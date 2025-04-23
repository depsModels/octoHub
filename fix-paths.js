import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para ajustar os caminhos em um arquivo HTML
function fixPaths(filePath, outputPath) {
  // Ler o conteúdo do arquivo
  let content = fs.readFileSync(filePath, 'utf8');

  // Substituir os caminhos
  content = content.replace(/src\/assets\//g, '/assets/');
  content = content.replace(/\.\/src\/styles\//g, '/styles/');
  content = content.replace(/src\/styles\//g, '/styles/');
  content = content.replace(/src\/scripts\//g, '/scripts/');

  // Atualizar os links entre páginas
  content = content.replace(/\/src\/pages\/en\/index.html/g, '/pages/en/index.html');
  content = content.replace(/\/src\/pages\/pt\//g, '/pages/pt/');

  // Salvar o arquivo com os caminhos corrigidos
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Caminhos corrigidos em: ${outputPath}`);
}

// Processar o arquivo index.html na raiz
const rootIndexPath = path.join(__dirname, 'index.html');
const publicRootIndexPath = path.join(__dirname, 'public', 'index.html');
if (fs.existsSync(rootIndexPath)) {
  fixPaths(rootIndexPath, publicRootIndexPath);
}

// Processar os arquivos HTML na pasta pages
const pagesDir = path.join(__dirname, 'public', 'pages');
if (fs.existsSync(pagesDir)) {
  function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        // Para arquivos HTML na pasta pages, precisamos ler o arquivo original
        const relativePath = path.relative(path.join(__dirname, 'public', 'pages'), filePath);
        const originalPath = path.join(__dirname, 'src', 'pages', relativePath);

        if (fs.existsSync(originalPath)) {
          fixPaths(originalPath, filePath);
        }
      }
    });
  }

  processDirectory(pagesDir);
}

console.log('Todos os caminhos foram corrigidos!');
