<?php

/**
 * Script de teste para diagnosticar problemas com o formulário
 * IMPORTANTE: Remover este arquivo após o teste para evitar exposição de informações!
 */

// Ativar exibição de erros para depuração
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo '<h1>Teste de Diagnóstico do Formulário</h1>';

// Verificar se o arquivo send_form.php existe
echo '<h2>Verificação de arquivos:</h2>';
if (file_exists('send_form.php')) {
  echo '<p style="color: green;">✓ O arquivo send_form.php existe</p>';

  // Verificar permissões do arquivo
  $perms = fileperms('send_form.php');
  $perms_octal = substr(sprintf('%o', $perms), -4);
  echo '<p>Permissões do arquivo: ' . $perms_octal . '</p>';

  if (($perms & 0x0100) && ($perms & 0x0080)) {
    echo '<p style="color: green;">✓ O arquivo tem permissões de leitura e execução</p>';
  } else {
    echo '<p style="color: red;">✗ O arquivo pode não ter as permissões adequadas</p>';
  }
} else {
  echo '<p style="color: red;">✗ O arquivo send_form.php não foi encontrado!</p>';
}

// Verificar se o arquivo .htaccess existe e seu conteúdo
if (file_exists('.htaccess')) {
  echo '<p style="color: green;">✓ O arquivo .htaccess existe</p>';

  // Verificar o conteúdo do arquivo
  $htaccess = file_get_contents('.htaccess');
  if (strpos($htaccess, '<Files "send_form.php">') !== false) {
    echo '<p style="color: orange;">⚠ .htaccess contém regras para o arquivo send_form.php. Verifique se estão corretas.</p>';
    echo '<pre>' . htmlspecialchars(substr($htaccess, strpos($htaccess, '<Files "send_form.php">'), 300)) . '</pre>';
  } else {
    echo '<p style="color: green;">✓ Não foram encontradas regras restritivas para send_form.php no .htaccess</p>';
  }
} else {
  echo '<p style="color: orange;">⚠ O arquivo .htaccess não foi encontrado</p>';
}

// Verificar configurações do PHP
echo '<h2>Configurações do PHP:</h2>';
echo '<p>Versão do PHP: ' . phpversion() . '</p>';
echo '<p>mail() habilitado: ' . (function_exists('mail') ? 'Sim' : 'Não') . '</p>';
echo '<p>POST máximo: ' . ini_get('post_max_size') . '</p>';
echo '<p>Limite de execução: ' . ini_get('max_execution_time') . ' segundos</p>';

// Testar formulário com CURL
echo '<h2>Teste de requisição POST:</h2>';
if (function_exists('curl_version')) {
  $test_url = 'http' . (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 's' : '') . '://' . $_SERVER['HTTP_HOST'] . '/send_form.php';
  echo '<p>Testando URL: ' . $test_url . '</p>';

  $ch = curl_init($test_url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, true);
  curl_setopt($ch, CURLOPT_NOBODY, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'nome' => 'Teste Automático',
    'email' => 'teste@exemplo.com',
    'mensagem' => 'Esta é uma mensagem de teste automatizado.'
  ]);

  $response = curl_exec($ch);
  $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

  echo '<p>Código de resposta HTTP: ' . $httpcode . '</p>';
  if ($httpcode == 200) {
    echo '<p style="color: green;">✓ O script respondeu com sucesso (200 OK)</p>';
  } elseif ($httpcode == 302) {
    echo '<p style="color: green;">✓ O script redirecionou corretamente (302 Found)</p>';
  } elseif ($httpcode == 403) {
    echo '<p style="color: red;">✗ Erro 403 Forbidden - Problema com permissões ou regras do .htaccess</p>';
  } elseif ($httpcode == 404) {
    echo '<p style="color: red;">✗ Erro 404 Not Found - O arquivo não foi encontrado</p>';
  } elseif ($httpcode == 500) {
    echo '<p style="color: red;">✗ Erro 500 Internal Server Error - Problema no script PHP</p>';
  } else {
    echo '<p style="color: orange;">⚠ Código de resposta inesperado: ' . $httpcode . '</p>';
  }
} else {
  echo '<p style="color: orange;">⚠ CURL não está disponível para testar a requisição</p>';
}

// Verificar logs de erro
echo '<h2>Logs de erro:</h2>';
$log_file = __DIR__ . '/form_errors.log';
if (file_exists($log_file)) {
  echo '<p style="color: green;">✓ Arquivo de log de erros encontrado</p>';

  // Mostrar últimas linhas do log
  $log_content = file_get_contents($log_file);
  $log_lines = explode("\n", $log_content);
  $last_lines = array_slice($log_lines, -20); // últimas 20 linhas

  echo '<pre style="background-color: #f5f5f5; padding: 10px; max-height: 300px; overflow: auto;">';
  foreach ($last_lines as $line) {
    echo htmlspecialchars($line) . "\n";
  }
  echo '</pre>';
} else {
  echo '<p style="color: orange;">⚠ Arquivo de log de erros não encontrado</p>';
}

echo '<h2>Solução recomendada:</h2>';
echo '<ol>';
echo '<li>Se você está recebendo erro 403, verifique o arquivo .htaccess e remova temporariamente qualquer restrição ao arquivo send_form.php</li>';
echo '<li>Certifique-se de que send_form.php tem permissões 644 (chmod 644 send_form.php)</li>';
echo '<li>Verifique se o servidor tem permissão para enviar emails (função mail())</li>';
echo '<li>Se possível, configure um sistema de email alternativo como SMTP</li>';
echo '</ol>';

echo '<p style="margin-top: 20px; color: red; font-weight: bold;">IMPORTANTE: Por segurança, exclua este arquivo (form_test.php) após o diagnóstico!</p>';
