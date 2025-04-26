# Formulário de Contato Seguro - octo.hub

Este documento explica a implementação do formulário de contato seguro para o site octo.hub, que funciona tanto na versão em português quanto na versão em inglês.

## Características de Segurança

O formulário foi implementado seguindo as melhores práticas de segurança para ambientes de hospedagem compartilhada:

1. **Validação e Sanitização:**
   - Todos os campos são validados e sanitizados usando `filter_input()` e `filter_var()` do PHP
   - Verificações de comprimento mínimo para evitar submissões em branco
   - Validação completa de endereços de e-mail

2. **Proteção contra Injeção:**
   - Sanitização de todos os campos para remover códigos maliciosos
   - Cabeçalhos de e-mail seguros com encodificação adequada
   - Proteção contra injeção de cabeçalhos de e-mail

3. **Proteção contra Spam:**
   - Verificação de palavras-chave comuns em spam
   - Bloqueio de mensagens com múltiplos links
   - Verificações de comprimento para evitar mensagens muito curtas

4. **Internacionalização:**
   - Suporte para mensagens em português e inglês
   - Detecção automática do idioma baseado na origem do formulário
   - Codificação UTF-8 para suporte a caracteres especiais

5. **Feedback ao Usuário:**
   - Página de feedback intermediária antes do redirecionamento
   - Mensagens de erro e sucesso em ambos os idiomas
   - Redirecionamento automático de volta ao formulário

## Arquivos Implementados

- `send_form.php` - Script principal para processamento do formulário
- `.htaccess` - Configurações de segurança adicionais para o servidor

## Campos do Formulário

Os seguintes campos foram implementados em ambas as versões do formulário:

- **Nome** (`nome`) - Nome completo do usuário
- **E-mail** (`email`) - Endereço de e-mail válido para contato
- **Mensagem** (`mensagem`) - Conteúdo da mensagem

## Processo de Envio

1. O usuário preenche o formulário (em português ou inglês)
2. Os dados são enviados via POST para `send_form.php`
3. O script valida e sanitiza todos os campos
4. Se houver erros, o usuário é informado
5. Se tudo estiver correto, o e-mail é enviado para `miguelstrapazonl@gmail.com`
6. Uma mensagem de sucesso é exibida ao usuário
7. O usuário é redirecionado de volta à página de origem

## Processo de Build

Durante o build do site (`npm run build`), os seguintes passos são executados automaticamente:

1. O arquivo `send_form.php` é copiado para a pasta `public/`
2. O arquivo `.htaccess` é copiado para a pasta `public/`
3. O script `fix-paths.js` atualiza a detecção de idioma no arquivo PHP para garantir compatibilidade com a estrutura de pastas de produção
4. Os formulários nas páginas HTML em português e inglês são atualizados para apontar para o caminho correto do script

Isso garante que o formulário funcione corretamente tanto no ambiente de desenvolvimento quanto no ambiente de produção.

## Manutenção e Atualização

Para manutenção ou ajustes futuros:

1. Mensagens e traduções podem ser modificadas no array `$messages` no início do arquivo `send_form.php`
2. Configurações de segurança adicionais podem ser ajustadas no arquivo `.htaccess`
3. O destinatário do e-mail pode ser alterado modificando a variável `$destinatario`

---

Implementado em: <?php echo date('d/m/Y'); ?> 