/**
 * Script para verificar o carregamento de recursos externos
 * e alertar em caso de problemas com CSP
 */

document.addEventListener('DOMContentLoaded', function () {
  // Verifica se os ícones do Font Awesome estão carregando
  checkFontAwesome();

  // Verifica se as fontes do Google estão carregando
  checkGoogleFonts();
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
      // Tenta carregar o Font Awesome via JavaScript como fallback
      loadFontAwesomeFallback();
    }

    // Remove o elemento de teste
    document.body.removeChild(iconTest);
  }, 500);
}

/**
 * Verifica se as fontes do Google estão carregando
 */
function checkGoogleFonts() {
  // Lista de fontes que devem estar carregadas
  const expectedFonts = ['Bebas Neue', 'Space Grotesk', 'Archivo Black', 'Inter'];

  // Usa a API Font Loading se disponível
  if (document.fonts && document.fonts.check) {
    let allLoaded = true;

    expectedFonts.forEach((fontName) => {
      if (!document.fonts.check(`1em "${fontName}"`)) {
        allLoaded = false;
      }
    });

    if (!allLoaded) {
      loadGoogleFontsFallback();
    }
  } else {
    // Fallback para navegadores sem API Font Loading
    // Assume que pode haver problemas e carrega o fallback
    loadGoogleFontsFallback();
  }
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
}
/**
 * Carrega as fontes do Google via JavaScript como fallback
 */
function loadGoogleFontsFallback() {
  if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
    return; // Já existe uma tag link, não duplicar
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;700&family=Archivo+Black&family=Inter:wght@400;500;700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500;700&display=swap';
  link.id = 'google-fonts-fallback';

  document.head.appendChild(link);
}
