const fs = require('fs');
const path = require('path');
const { Router } = require('express');
const { fn, col } = require('sequelize');
const { requireAuth } = require('../middleware/auth');
const { User, UserGameState, AnimalEntry } = require('../models');

const router = Router();

// Middleware para verificar se o usuário é administrador
function requireAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ error: 'Acesso restrito para administradores' });
}

// Config paths
const bgmConfigPath = path.resolve(process.cwd(), 'bgm_config.json');
const bgmDefaultsPath = path.resolve(process.cwd(), 'src/config/bgm_defaults.json');
const npcConfigPath = path.resolve(process.cwd(), 'npc_config.json');
const npcDefaultsPath = path.resolve(process.cwd(), 'src/config/npc_defaults.json');

// Função para escanear diretórios de forma recursiva ignorando pastas de sistema e back-end
function scanDir(dirPath, relativeDir = '') {
  const results = [];
  const list = fs.readdirSync(dirPath);
  
  list.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    const relPath = relativeDir ? path.join(relativeDir, file) : file;
    
    if (stat.isDirectory()) {
      const ignoredDirs = [
        'node_modules', '.git', '.venv', '.gemini', 'src', 
        'config', 'db', 'models', 'middleware', 'routes', 'seed', '.agents'
      ];
      if (!ignoredDirs.includes(file)) {
        results.push(...scanDir(fullPath, relPath));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      const allowedExts = ['.png', '.webp', '.jpg', '.jpeg', '.svg', '.json'];
      // Ignore config files in assets list to avoid duplication
      if (allowedExts.includes(ext) && file !== 'bgm_config.json' && file !== 'npc_config.json') {
        results.push({
          name: file,
          path: relPath.replace(/\\/g, '/'), // Normaliza caminhos no Windows
          sizeBytes: stat.size,
          mtime: stat.mtime
        });
      }
    }
  });
  return results;
}

// Incrementa automaticamente a versão do cache no service-worker.js
function incrementPWACache(rootDir) {
  const swPath = path.join(rootDir, 'service-worker.js');
  if (fs.existsSync(swPath)) {
    try {
      let swContent = fs.readFileSync(swPath, 'utf8');
      const match = swContent.match(/const\s+CACHE_NAME\s*=\s*['"]capivara-v(\d+)['"]/);
      if (match) {
        const currentVer = parseInt(match[1]);
        const nextVer = currentVer + 1;
        swContent = swContent.replace(
          /const\s+CACHE_NAME\s*=\s*['"]capivara-v\d+['"]/,
          `const CACHE_NAME = 'capivara-v${nextVer}'`
        );
        fs.writeFileSync(swPath, swContent, 'utf8');
        console.log(`PWA cache version bumped to capivara-v${nextVer}`);
      }
    } catch (err) {
      console.error('Erro ao atualizar service-worker.js:', err);
    }
  }
}

// ── Endpoints Trilha Sonora (BGM) ──────────────────
router.get('/bgm/config', (req, res) => {
  try {
    if (fs.existsSync(bgmConfigPath)) {
      const data = fs.readFileSync(bgmConfigPath, 'utf8');
      return res.json(JSON.parse(data));
    }
    const defaults = fs.readFileSync(bgmDefaultsPath, 'utf8');
    return res.json(JSON.parse(defaults));
  } catch (error) {
    console.error('Erro ao ler config de BGM:', error);
    res.status(500).json({ error: 'Erro ao carregar trilha sonora: ' + error.message });
  }
});

router.post('/admin/bgm/config', requireAuth, requireAdmin, (req, res) => {
  try {
    const configData = req.body;
    if (!configData || typeof configData !== 'object') {
      return res.status(400).json({ error: 'Configuração de áudio inválida' });
    }
    fs.writeFileSync(bgmConfigPath, JSON.stringify(configData, null, 2), 'utf8');
    incrementPWACache(path.resolve(process.cwd()));
    res.json({ success: true, message: 'Configuração da trilha sonora atualizada!' });
  } catch (error) {
    console.error('Erro ao salvar config de BGM:', error);
    res.status(500).json({ error: 'Erro ao salvar trilha sonora: ' + error.message });
  }
});

// ── Endpoints Personagens (NPCs) ───────────────────
router.get('/npc/config', (req, res) => {
  try {
    if (fs.existsSync(npcConfigPath)) {
      const data = fs.readFileSync(npcConfigPath, 'utf8');
      return res.json(JSON.parse(data));
    }
    const defaults = fs.readFileSync(npcDefaultsPath, 'utf8');
    return res.json(JSON.parse(defaults));
  } catch (error) {
    console.error('Erro ao ler config de NPCs:', error);
    res.status(500).json({ error: 'Erro ao carregar personagens: ' + error.message });
  }
});

router.post('/admin/npc/config', requireAuth, requireAdmin, (req, res) => {
  try {
    const configData = req.body;
    if (!configData || !Array.isArray(configData)) {
      return res.status(400).json({ error: 'Configuração de personagens inválida' });
    }
    fs.writeFileSync(npcConfigPath, JSON.stringify(configData, null, 2), 'utf8');
    incrementPWACache(path.resolve(process.cwd()));
    res.json({ success: true, message: 'Lista de personagens atualizada!' });
  } catch (error) {
    console.error('Erro ao salvar config de NPCs:', error);
    res.status(500).json({ error: 'Erro ao salvar personagens: ' + error.message });
  }
});

// ── Endpoints de Gestão de Usuários ────────────────
router.get('/admin/users', requireAuth, requireAdmin, async (req, res) => {
  try {
    const usersList = await User.findAll({
      attributes: ['id', 'name', 'email', 'avatar', 'role', 'createdAt'],
      include: [
        {
          model: UserGameState,
          as: 'gameState',
          attributes: ['guardianXP', 'seedCoins', 'currentStreak']
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    
    const animalCounts = await AnimalEntry.findAll({
      attributes: ['userId', [fn('COUNT', col('id')), 'count']],
      group: ['userId'],
      raw: true
    });
    
    const countsMap = {};
    animalCounts.forEach(c => {
      countsMap[c.userId] = Number(c.count);
    });
    
    const formattedUsers = usersList.map(u => {
      const userJson = u.toJSON();
      userJson.animalsCount = countsMap[u.id] || 0;
      return userJson;
    });
    
    const totalUsers = formattedUsers.length;
    const totalCapins = formattedUsers.reduce((sum, u) => sum + (u.gameState ? u.gameState.seedCoins : 0), 0);
    const totalXP = formattedUsers.reduce((sum, u) => sum + (u.gameState ? u.gameState.guardianXP : 0), 0);
    const totalAnimals = Object.values(countsMap).reduce((sum, count) => sum + count, 0);
    
    res.json({
      users: formattedUsers,
      stats: {
        totalUsers,
        totalCapins,
        totalXP,
        totalAnimals
      }
    });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro ao carregar estatísticas de usuários: ' + error.message });
  }
});

router.put('/admin/users/:id', requireAuth, requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { role, seedCoins, guardianXP, currentStreak } = req.body;
  
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    if (role && ['user', 'admin'].includes(role)) {
      user.role = role;
      await user.save();
    }
    
    const [state] = await UserGameState.findOrCreate({
      where: { userId: id },
      defaults: {
        guardianXP: 0,
        seedCoins: 0,
        currentStreak: 0,
        lastVisitDate: null,
        quizDoneDate: null,
        userLevelMemo: 1,
        activeMissions: null,
        cameraAccepted: false
      }
    });
    
    if (seedCoins !== undefined) state.seedCoins = Number(seedCoins);
    if (guardianXP !== undefined) state.guardianXP = Number(guardianXP);
    if (currentStreak !== undefined) state.currentStreak = Number(currentStreak);
    
    await state.save();
    
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        gameState: {
          seedCoins: state.seedCoins,
          guardianXP: state.guardianXP,
          currentStreak: state.currentStreak
        }
      }
    });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao salvar dados do usuário: ' + error.message });
  }
});

router.delete('/admin/users/:id', requireAuth, requireAdmin, async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    await AnimalEntry.destroy({ where: { userId: id } });
    await UserGameState.destroy({ where: { userId: id } });
    
    const { UserAccessory } = require('../models');
    if (UserAccessory) {
      await UserAccessory.destroy({ where: { userId: id } });
    }
    
    await user.destroy();
    
    res.json({ success: true, message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir usuário: ' + error.message });
  }
});

// ── Endpoints Originais de Assets (Protegidos) ──────
router.get('/admin/files', requireAuth, requireAdmin, (req, res) => {
  try {
    const rootDir = path.resolve(process.cwd());
    const filesList = scanDir(rootDir);
    res.json({ files: filesList });
  } catch (error) {
    console.error('Erro ao escanear diretório:', error);
    res.status(500).json({ error: 'Erro ao listar arquivos do servidor: ' + error.message });
  }
});

router.post('/admin/upload', requireAuth, requireAdmin, (req, res) => {
  const { filePath, fileData, jsonPath, jsonData } = req.body;
  
  if (!filePath || !fileData) {
    return res.status(400).json({ error: 'Parâmetros filePath e fileData são obrigatórios' });
  }
  
  try {
    const rootDir = path.resolve(process.cwd());
    
    // Proteção Path Traversal
    const targetPath = path.resolve(rootDir, filePath);
    if (!targetPath.startsWith(rootDir)) {
      return res.status(403).json({ error: 'Acesso negado fora do diretório do projeto' });
    }
    
    // Assegurar que o diretório pai existe
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Decodificar Base64 e salvar imagem
    const buffer = Buffer.from(fileData, 'base64');
    fs.writeFileSync(targetPath, buffer);
    console.log(`Arquivo salvo com sucesso em: ${targetPath}`);
    
    // Tratar upload opcional do arquivo de animação JSON associado (se enviado)
    if (jsonPath && jsonData) {
      const targetJsonPath = path.resolve(rootDir, jsonPath);
      if (targetJsonPath.startsWith(rootDir)) {
        const targetJsonDir = path.dirname(targetJsonPath);
        if (!fs.existsSync(targetJsonDir)) {
          fs.mkdirSync(targetJsonDir, { recursive: true });
        }
        
        let jsonBuffer;
        if (jsonData.startsWith('{') || jsonData.startsWith('[')) {
          jsonBuffer = Buffer.from(jsonData, 'utf8');
        } else {
          jsonBuffer = Buffer.from(jsonData, 'base64');
        }
        
        fs.writeFileSync(targetJsonPath, jsonBuffer);
        console.log(`Arquivo JSON de animação associado salvo em: ${targetJsonPath}`);
      }
    }
    
    // Incrementa cache do PWA
    incrementPWACache(rootDir);
    
    res.json({ success: true, message: 'Arquivos gravados no disco e cache do PWA invalidado!' });
  } catch (error) {
    console.error('Erro ao processar upload:', error);
    res.status(500).json({ error: 'Erro ao salvar os arquivos no servidor: ' + error.message });
  }
});

module.exports = router;
