const fs = require('fs');
const path = require('path');
const { Router } = require('express');

const router = Router();

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
            if (allowedExts.includes(ext)) {
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

// Rota 1: Listar todos os assets elegíveis do jogo
router.get('/admin/files', (req, res) => {
    try {
        const rootDir = path.resolve(process.cwd());
        const filesList = scanDir(rootDir);
        res.json({ files: filesList });
    } catch (error) {
        console.error('Erro ao escanear diretório:', error);
        res.status(500).json({ error: 'Erro ao listar arquivos do servidor: ' + error.message });
    }
});

// Rota 2: Upload de imagens/JSONs com prevent-traversal e SW auto-bumping
router.post('/admin/upload', (req, res) => {
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
                // Detecta se jsonData veio como base64 ou texto plano de objeto JSON
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
