/**
 * Manipulador de formulários octo.hub
 * Envia formulários via AJAX e exibe mensagens em um modal
 */

// Traduções para os elementos da UI
const translations = {
  pt: {
    sending: 'Enviando...',
    close: 'Fechar',
    errorMessage: 'Erro ao enviar mensagem. Por favor, tente novamente.'
  },
  en: {
    sending: 'Sending...',
    close: 'Close',
    errorMessage: 'Error sending message. Please try again.'
  }
};

// Detectar o idioma com base na URL
function detectLanguage() {
  return window.location.pathname.includes('/en/') ? 'en' : 'pt';
}

// Obter textos traduzidos
function getTranslation(key) {
  const lang = detectLanguage();
  return translations[lang][key] || translations.pt[key];
}

document.addEventListener('DOMContentLoaded', function () {
  // Criar o modal no carregamento da página
  createModal();

  // Selecionar todos os formulários de contato
  const forms = document.querySelectorAll('form[action*="send_form.php"]');

  // Adicionar handler para cada formulário
  forms.forEach((form) => {
    form.addEventListener('submit', handleFormSubmit);
  });
});

/**
 * Cria o elemento modal no DOM
 */
function createModal() {
  // Verificar se o modal já existe
  if (document.getElementById('octo-modal')) return;

  // Criar estrutura do modal
  const modalHtml = `
    <div id="octo-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
      <div class="absolute inset-0 bg-octo-blue/80 backdrop-blur-sm" onclick="closeModal()"></div>
      <div class="relative bg-octo-blue p-8 rounded-xl border border-octo-yellow/20 shadow-xl max-w-md w-full mx-4 z-10">
        <button onclick="closeModal()" class="absolute right-3 top-3 text-octo-yellow hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div id="octo-modal-content" class="text-center">
          <!-- Conteúdo dinâmico aqui -->
        </div>
      </div>
    </div>
  `;

  // Adicionar o modal ao final do body
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

/**
 * Manipula o envio do formulário via AJAX
 * @param {Event} e - Evento de submit
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Desabilitar o botão e mostrar indicador de carregamento
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    ${getTranslation('sending')}
  `;

  // Coletar os dados do formulário
  const formData = new FormData(form);

  // Enviar requisição via fetch API
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // Restaurar o botão
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Exibir resultado no modal
      showModal(data.success, data.message);

      // Se for sucesso, limpar o formulário
      if (data.success) {
        form.reset();
      }
    })
    .catch((error) => {
      console.error('Erro ao enviar formulário:', error);

      // Restaurar o botão
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Exibir mensagem de erro no modal
      showModal(false, getTranslation('errorMessage'));
    });
}

/**
 * Exibe o modal com a mensagem
 * @param {boolean} success - Se a operação foi bem-sucedida
 * @param {string} message - Mensagem a ser exibida
 */
function showModal(success, message) {
  const modalContent = document.getElementById('octo-modal-content');
  const iconClass = success ? 'text-octo-yellow' : 'text-red-500';
  const icon = success
    ? '<svg class="h-16 w-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
    : '<svg class="h-16 w-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';

  modalContent.innerHTML = `
    <div class="${iconClass}">
      ${icon}
    </div>
    <p class="text-xl ${success ? 'text-octo-yellow' : 'text-red-400'} mb-4">${message}</p>
    <button onclick="closeModal()" class="px-6 py-2 bg-octo-yellow text-octo-blue rounded-lg hover:bg-octo-green hover:text-white transition-colors">
      ${getTranslation('close')}
    </button>
  `;

  // Exibir o modal
  document.getElementById('octo-modal').classList.remove('hidden');
}

/**
 * Fecha o modal
 */
function closeModal() {
  document.getElementById('octo-modal').classList.add('hidden');
}

// Expor funções para uso global
window.showModal = showModal;
window.closeModal = closeModal;
