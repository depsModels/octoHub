<?php

/**
 * Script seguro para processamento de formulário de contato
 * Compatível com as páginas em português e inglês
 * Retorna um JSON para processamento via AJAX
 */

// Em ambiente de desenvolvimento, você pode habilitar a exibição de erros para depuração
// Remova ou comente estas linhas em produção
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

// Para produção, desabilite a exibição de erros
ini_set('display_errors', 0);
error_reporting(0);

// Evita o cache no navegador para respostas AJAX
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json; charset=utf-8');

// Inicializar array para mensagens
$messages = [
  'pt' => [
    'success' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    'error' => 'Erro ao enviar mensagem. Por favor, tente novamente.',
    'invalid_name' => 'Por favor, informe seu nome completo.',
    'invalid_email' => 'Por favor, informe um email válido.',
    'invalid_message' => 'Por favor, escreva uma mensagem.',
    'spam_detected' => 'Ação bloqueada por suspeita de spam.',
    'server_error' => 'Erro interno do servidor. Tente novamente mais tarde.'
  ],
  'en' => [
    'success' => 'Message sent successfully! We will contact you soon.',
    'error' => 'Error sending message. Please try again.',
    'invalid_name' => 'Please enter your full name.',
    'invalid_email' => 'Please enter a valid email.',
    'invalid_message' => 'Please enter a message.',
    'spam_detected' => 'Action blocked due to spam suspicion.',
    'server_error' => 'Internal server error. Please try again later.'
  ]
];

// Função para gerar log de erros em arquivo
function logError($message)
{
  $log_file = __DIR__ . '/form_errors.log';
  $date = date('Y-m-d H:i:s');
  $log_message = "[$date] $message\n";

  // Tentar escrever no arquivo de log
  @error_log($log_message, 3, $log_file);
}

// Função para obter mensagens no idioma correto
function getMessage($key, $lang)
{
  global $messages;
  // Definir idioma padrão caso não seja especificado corretamente
  $lang = (isset($messages[$lang])) ? $lang : 'pt';
  return $messages[$lang][$key];
}

// Função para enviar resposta JSON 
function sendJsonResponse($success, $message, $data = null, $status_code = 200)
{
  http_response_code($status_code);
  echo json_encode([
    'success' => $success,
    'message' => $message,
    'data' => $data
  ]);
  exit;
}

// Verificar a origem do formulário e definir o idioma
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$lang = (strpos($referer, '/pages/en/') !== false || strpos($referer, '/en/') !== false) ? 'en' : 'pt';

// Log da requisição para debugging
logError("Requisição recebida. Método: " . $_SERVER['REQUEST_METHOD'] . ", Referer: $referer, Idioma: $lang");

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  logError("Método inválido: " . $_SERVER['REQUEST_METHOD']);
  sendJsonResponse(false, getMessage('error', $lang), null, 405); // 405 Method Not Allowed
}

// Verificar se os campos foram recebidos
if (!isset($_POST['nome']) || !isset($_POST['email']) || !isset($_POST['mensagem'])) {
  logError("Campos incompletos: " . json_encode($_POST));
  sendJsonResponse(false, 'Campos obrigatórios não foram enviados.', null, 400); // 400 Bad Request
}

// Inicializar array de erros
$errors = [];

// Filtrar e validar entradas
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

logError("Dados recebidos - Nome: $nome, Email: $email, Mensagem: " . substr($mensagem, 0, 30) . "...");

// Validar nome (pelo menos 3 caracteres)
if (empty($nome) || strlen($nome) < 3) {
  $errors[] = getMessage('invalid_name', $lang);
}

// Validar email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = getMessage('invalid_email', $lang);
}

// Validar mensagem (apenas verificar se não está vazia)
if (empty($mensagem)) {
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

// Verificar se há erros
if (!empty($errors)) {
  logError("Erros encontrados: " . json_encode($errors));
  sendJsonResponse(false, implode(' ', $errors), null, 400); // 400 Bad Request
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
$destinatario = 'team@octohub.site';

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

// Tentativa de envio de email com tratamento de erros
try {
  // Enviar email
  $enviado = mail($destinatario, $assunto, $corpo_email, $headers);

  logError("Tentativa de envio - Resultado: " . ($enviado ? 'Sucesso' : 'Falha'));

  if ($enviado) {
    $success_message = getMessage('success', $lang);
    sendJsonResponse(true, $success_message);
  } else {
    $error_message = getMessage('error', $lang);
    logError("Falha no envio de email: " . error_get_last()['message'] ?? 'Erro desconhecido');
    sendJsonResponse(false, $error_message, null, 500); // 500 Internal Server Error
  }
} catch (Exception $e) {
  // Log do erro
  logError("Exceção ao enviar email: " . $e->getMessage());

  // Mostrar mensagem de erro genérica
  $server_error = getMessage('server_error', $lang);
  sendJsonResponse(false, $server_error, null, 500); // 500 Internal Server Error
}
