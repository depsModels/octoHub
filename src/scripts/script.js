document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  updateCopyrightYear();
  initCarousel();
  initScrollAnimations();
});

// Menu Mobile
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !mobileMenu) return;

  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // Fechar o menu
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('overflow-hidden');

      // Scroll suave para a seção
      scrollToSection(this.getAttribute('href'));
    });
  });
}

// Função para scroll suave
function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (!targetSection) return;

  setTimeout(() => {
    const headerOffset = 80;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, 300);
}

// Atualiza ano no footer
function updateCopyrightYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Carrossel aprimorado
function initCarousel() {
  const carousel = document.querySelector('.logos-carousel');
  if (!carousel) return;

  const logos = Array.from(carousel.querySelectorAll('.partner-logo'));
  if (logos.length === 0) return;

  const logoWidth = logos[0].offsetWidth;
  const totalLogos = logos.length;
  let scrollPosition = 0;
  let animationId;
  let isPaused = false;

  // Clona os logos para criar o efeito infinito (clone dois conjuntos)
  const logosFragment = document.createDocumentFragment();
  [...logos, ...logos].forEach((logo) => {
    logosFragment.appendChild(logo.cloneNode(true));
  });
  carousel.appendChild(logosFragment);

  // Função que faz o scroll do carrossel
  function scrollCarousel() {
    if (isPaused) return;

    scrollPosition -= 0.5; // Velocidade reduzida

    // Reinicia a posição para criar o efeito infinito
    if (scrollPosition <= -logoWidth * totalLogos) {
      scrollPosition = 0;
    }

    carousel.style.transform = `translateX(${scrollPosition}px)`;
    animationId = requestAnimationFrame(scrollCarousel);
  }

  // Inicia a animação
  scrollCarousel();

  // Controles de pause/resume ao passar o mouse
  const carouselContainer = document.querySelector('.logos-carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      isPaused = true;
      cancelAnimationFrame(animationId);
    });

    carouselContainer.addEventListener('mouseleave', () => {
      isPaused = false;
      scrollCarousel();
    });
  }

  // Ajusta quando a janela é redimensionada
  window.addEventListener('resize', () => {
    const newLogoWidth = logos[0].offsetWidth;
    if (newLogoWidth !== logoWidth && scrollPosition <= -logoWidth * totalLogos) {
      scrollPosition = 0;
      carousel.style.transform = `translateX(${scrollPosition}px)`;
    }
  });
}

// Animações de scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  if (animatedElements.length === 0) return;

  // Adiciona estilos para as animações apenas se necessário
  if (!document.getElementById('aos-animation-style')) {
    const style = document.createElement('style');
    style.id = 'aos-animation-style';
    style.innerHTML = `
      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 1.2s forwards;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      [data-aos] {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      [data-aos].aos-animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      [data-aos="fade-right"] {
        transform: translateX(-30px);
      }
      
      [data-aos="fade-left"] {
        transform: translateX(30px);
      }
      
      [data-aos="fade-right"].aos-animate,
      [data-aos="fade-left"].aos-animate {
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);
  }

  // Função que verifica se os elementos estão visíveis
  const checkIfInView = () => {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('aos-animate');
      } else {
        element.classList.remove('aos-animate');
      }
    });
  };

  // Verifica a posição inicial dos elementos
  checkIfInView();

  // Debounce para melhorar o desempenho
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkIfInView, 10);
  });
}
