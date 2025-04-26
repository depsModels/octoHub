<?php

/**
 * Script seguro para processamento de formulário de contato
 * Compatível com as páginas em português e inglês
 */

// Desativar exibição de erros para produção
ini_set('display_errors', 0);
error_reporting(0);

// Inicializar array para mensagens
$messages = [
  'pt' => [
    'success' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    'error' => 'Erro ao enviar mensagem. Por favor, tente novamente.',
    'invalid_name' => 'Por favor, informe seu nome completo.',
    'invalid_email' => 'Por favor, informe um email válido.',
    'invalid_message' => 'Por favor, escreva uma mensagem.',
    'spam_detected' => 'Ação bloqueada por suspeita de spam.',
    'redirecting' => 'Redirecionando...',
    'page_title' => 'Processando formulário'
  ],
  'en' => [
    'success' => 'Message sent successfully! We will contact you soon.',
    'error' => 'Error sending message. Please try again.',
    'invalid_name' => 'Please enter your full name.',
    'invalid_email' => 'Please enter a valid email.',
    'invalid_message' => 'Please write a message.',
    'spam_detected' => 'Action blocked due to spam suspicion.',
    'redirecting' => 'Redirecting...',
    'page_title' => 'Processing form'
  ]
];

// Função para obter mensagens no idioma correto
function getMessage($key, $lang)
{
  global $messages;
  // Definir idioma padrão caso não seja especificado corretamente
  $lang = (isset($messages[$lang])) ? $lang : 'pt';
  return $messages[$lang][$key];
}

// Verificar a origem do formulário e definir o idioma
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$lang = (strpos($referer, '/en/') !== false) ? 'en' : 'pt';

// Processar apenas requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  // Redirecionar para a página inicial se acessado diretamente
  header('Location: /');
  exit;
}

// Inicializar array de erros
$errors = [];

// Filtrar e validar entradas
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

// Validar nome (pelo menos 3 caracteres)
if (empty($nome) || strlen($nome) < 3) {
  $errors[] = getMessage('invalid_name', $lang);
}

// Validar email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = getMessage('invalid_email', $lang);
}

// Validar mensagem (pelo menos 10 caracteres)
if (empty($mensagem) || strlen($mensagem) < 10) {
  $errors[] = getMessage('invalid_message', $lang);
}

// Verificações anti-spam básicas
$spam = false;

// Verificar se contém URLs em excesso (possível spam)
$url_count = substr_count(strtolower($mensagem), 'http://') +
  substr_count(strtolower($mensagem), 'https://');
if ($url_count > 2) {
  $spam = true;
}

// Verificar presença de palavras comuns em spam
$spam_words = ['viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner', '$$$'];
foreach ($spam_words as $word) {
  if (stripos($mensagem, $word) !== false || stripos($nome, $word) !== false) {
    $spam = true;
    break;
  }
}

// Bloquear se for spam
if ($spam) {
  $errors[] = getMessage('spam_detected', $lang);
}

// Destino para redirecionamento
$redirect_url = $referer ? $referer : '/';
if (strpos($redirect_url, '#') === false) {
  $redirect_url .= '#contato';
}

// Verificar se há erros
if (!empty($errors)) {
  showFeedbackPage($errors, $redirect_url, false, $lang);
  exit;
}

// Preparar o corpo do email
$corpo_email = "Nova mensagem do formulário de contato:\n\n";
$corpo_email .= "Nome: " . $nome . "\n";
$corpo_email .= "E-mail: " . $email . "\n";
$corpo_email .= "Mensagem:\n" . $mensagem . "\n\n";
$corpo_email .= "Enviado em: " . date('d/m/Y H:i:s') . "\n";
$corpo_email .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
$corpo_email .= "Origem: " . ($lang == 'en' ? 'Site em Inglês' : 'Site em Português');

// Destinatário
$destinatario = 'miguelstrapazonl@gmail.com';

// Assunto do email com proteção contra injeção
$assunto = '=?UTF-8?B?' . base64_encode('Contato do Site octo.hub - ' . date('d/m/Y')) . '?=';

// Cabeçalhos seguros com codificação UTF-8
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'octohub.com.br';
$headers = "From: contato@" . $host . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Enviar email
$enviado = mail($destinatario, $assunto, $corpo_email, $headers);

// Exibir feedback
if ($enviado) {
  $success_message = getMessage('success', $lang);
  showFeedbackPage([$success_message], $redirect_url, true, $lang);
} else {
  $error_message = getMessage('error', $lang);
  showFeedbackPage([$error_message], $redirect_url, false, $lang);
}
exit;

/**
 * Exibe uma página de feedback antes do redirecionamento
 * 
 * @param array $messages Mensagens a serem exibidas
 * @param string $redirect_url URL para redirecionamento
 * @param bool $success Se verdadeiro, exibe como sucesso, senão como erro
 * @param string $lang Idioma (pt ou en)
 */
function showFeedbackPage($messages, $redirect_url, $success = true, $lang = 'pt')
{
  $color_class = $success ? 'success' : 'error';
  $page_title = getMessage('page_title', $lang);
  $redirect_text = getMessage('redirecting', $lang);

  echo '<!DOCTYPE html>
  <html lang="' . ($lang == 'en' ? 'en' : 'pt-BR') . '">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>' . $page_title . '</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              padding: 20px;
              background-color: #152033;
              color: #fff;
          }
          .container {
              max-width: 500px;
              text-align: center;
              padding: 30px;
              background-color: rgba(21, 32, 51, 0.8);
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(255, 222, 89, 0.2);
              border: 1px solid rgba(255, 222, 89, 0.3);
          }
          .success {
              color: #FFDE59;
          }
          .error {
              color: #FF6B6B;
          }
          h1 {
              margin-bottom: 20px;
          }
          p {
              margin: 10px 0;
              font-size: 18px;
          }
          .redirect {
              margin-top: 20px;
              font-size: 14px;
              opacity: 0.7;
          }
      </style>
      <script>
          setTimeout(function() {
              window.location.href = "' . $redirect_url . '";
          }, 3000);
      </script>
  </head>
  <body>
      <div class="container">
          <h1 class="' . $color_class . '">' . ($success ? '✓' : '✗') . '</h1>';

  foreach ($messages as $msg) {
    echo '<p class="' . $color_class . '">' . htmlspecialchars($msg) . '</p>';
  }

  echo '<p class="redirect">' . $redirect_text . '</p>
      </div>
  </body>
  </html>';
}
