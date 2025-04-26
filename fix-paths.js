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

// Processar arquivo PHP de formulário se existir
const sendFormPhpPath = path.join(__dirname, 'public', 'send_form.php');
if (fs.existsSync(sendFormPhpPath)) {
  console.log('Processando arquivo PHP de formulário...');

  // Ler o conteúdo do arquivo PHP
  let phpContent = fs.readFileSync(sendFormPhpPath, 'utf8');

  // Não precisamos fazer substituições no arquivo PHP pois ele já tem caminhos absolutos
  // Se necessário, podemos adicionar substituições específicas para o PHP aqui

  // Verificar se existe pasta pages/en no public
  const enPagesDir = path.join(__dirname, 'public', 'pages', 'en');
  if (fs.existsSync(enPagesDir)) {
    console.log('Pasta páginas em inglês encontrada - configurando detecção de idioma');

    // Garantir que a detecção de idioma funcione corretamente com a estrutura de pastas
    phpContent = phpContent.replace(
      /\$lang = \(strpos\(\$referer, '\/en\/'\) !== false\) \? 'en' : 'pt';/,
      "$lang = (strpos($referer, '/pages/en/') !== false || strpos($referer, '/en/') !== false) ? 'en' : 'pt';"
    );
  }

  // Garantir que a validação da mensagem aceite qualquer comprimento
  phpContent = phpContent.replace(
    /if \(empty\(\$mensagem\) \|\| strlen\(\$mensagem\) < 10\) \{/,
    'if (empty($mensagem)) {'
  );

  // Salvar alterações
  fs.writeFileSync(sendFormPhpPath, phpContent, 'utf8');
  console.log('Arquivo PHP processado e atualizado com sucesso!');

  // Tentar definir permissões para garantir que o arquivo seja executável
  try {
    fs.chmodSync(sendFormPhpPath, 0o644);
    console.log('Permissões do arquivo PHP atualizadas (644)');
  } catch (error) {
    console.warn('Aviso: Não foi possível definir permissões para o arquivo PHP:', error.message);
  }
}

// Copiar .htaccess para a raiz do public (pode já ter sido copiado pelo npm script)
const htaccessPath = path.join(__dirname, '.htaccess');
const publicHtaccessPath = path.join(__dirname, 'public', '.htaccess');
if (fs.existsSync(htaccessPath)) {
  // Ler o conteúdo original do .htaccess
  let htaccessContent = fs.readFileSync(htaccessPath, 'utf8');

  // Substituir a configuração restritiva do send_form.php por uma mais permissiva
  htaccessContent = htaccessContent.replace(
    /<Files "send_form\.php">([\s\S]*?)<\/Files>/m,
    `<Files "send_form.php">
    # Permitir acesso para métodos POST
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteCond %{REQUEST_METHOD} !^POST$
        RewriteRule .* - [F,L]
    </IfModule>
</Files>`
  );

  // Atualizar a política de segurança de conteúdo para permitir recursos externos
  htaccessContent = htaccessContent.replace(
    /Header set Content-Security-Policy "(.*?)"/,
    "Header set Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com; font-src 'self' fonts.gstatic.com cdnjs.cloudflare.com data:; img-src 'self' data:; connect-src 'self'\""
  );

  // Salvar o arquivo .htaccess modificado
  fs.writeFileSync(publicHtaccessPath, htaccessContent, 'utf8');

  // Tentar definir permissões adequadas para o .htaccess
  try {
    fs.chmodSync(publicHtaccessPath, 0o644);
    console.log('Arquivo .htaccess processado e permissões atualizadas (644)');
  } catch (error) {
    console.warn('Aviso: Não foi possível definir permissões para o .htaccess:', error.message);
  }
}

console.log('Todos os caminhos foram corrigidos!');
