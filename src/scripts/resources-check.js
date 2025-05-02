/**
 * Script para verificar o carregamento de recursos externos
 * e alertar em caso de problemas com CSP
 */

document.addEventListener('DOMContentLoaded', function () {
  // Verifica se os ícones do Font Awesome estão carregando
  checkFontAwesome();

  // Carrega as fontes diretamente via CSS inline
  injectFontsDirectly();
});

/**
 * Verifica se o Font Awesome está funcionando corretamente
 */
function checkFontAwesome() {
  // Cria um elemento com um ícone do Font Awesome
  const iconTest = document.createElement('i');
  iconTest.className = 'fa fa-check fa-test-element';
  iconTest.style.position = 'absolute';
  iconTest.style.opacity = '0';
  iconTest.style.pointerEvents = 'none';
  document.body.appendChild(iconTest);

  // Usa setTimeout para dar tempo ao navegador de aplicar os estilos
  setTimeout(() => {
    // Verifica se o elemento tem a largura esperada (não zero)
    const style = window.getComputedStyle(iconTest);
    const width = parseFloat(style.width);

    if (width === 0) {
      console.warn(
        '⚠️ Font Awesome não está carregando corretamente. Verifique a configuração CSP no .htaccess.'
      );
      // Tenta carregar o Font Awesome via JavaScript como fallback
      loadFontAwesomeFallback();
    }

    // Remove o elemento de teste
    document.body.removeChild(iconTest);
  }, 500);
}

/**
 * Injeta as fontes diretamente no documento via CSS @font-face
 * Esta é a abordagem mais confiável para garantir que as fontes estejam disponíveis
 */
function injectFontsDirectly() {
  console.log('📋 Injetando fontes diretamente no documento para máxima compatibilidade');

  // Cria um estilo que define as fontes diretamente
  const style = document.createElement('style');
  style.textContent = `
    /* Definiçoes de fonte injetadas diretamente para garantir disponibilidade */
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Archivo Black';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/archivoblack/v17/HTxqL289NzCGg4MzN6KJ7eW6CYyF-w.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/bebasneue/v9/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2') format('woff2');
    }
  `;

  // Insere o estilo no cabeçalho do documento
  document.head.appendChild(style);

  // Também carrega as fontes via link para redundância
  loadAllGoogleFonts();

  // Não precisa verificar se as fontes carregaram - estamos definindo elas diretamente
}

/**
 * Carrega todas as fontes Google via JavaScript
 */
function loadAllGoogleFonts() {
  // URLs de fontes individuais (para maior confiabilidade de carregamento)
  const fontUrls = [
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
  ];

  // Carrega cada URL individual
  fontUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  console.log('📋 Fontes Google carregadas via links de redundância');
}

/**
 * Carrega o Font Awesome via JavaScript como fallback
 */
function loadFontAwesomeFallback() {
  if (document.querySelector('link[href*="font-awesome"]')) {
    return; // Já existe uma tag link, não duplicar
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  link.integrity =
    'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
  link.crossOrigin = 'anonymous';
  link.id = 'fontawesome-fallback';

  document.head.appendChild(link);
  console.log('📋 Carregando Font Awesome via JavaScript como fallback');
}
