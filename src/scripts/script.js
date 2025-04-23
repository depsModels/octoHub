document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('overflow-hidden');

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
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
    });
  });

  // Atualiza o ano atual no footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Sistema de partículas para a seção porque-escolher
  const particlesContainer = document.getElementById('particles-container');
  if (particlesContainer) {
    createParticles(particlesContainer, 20);
  }

  // Carrossel infinito para logos de parceiros - melhorado com navegação manual
  initCarousel();

  // Inicializa as animações de aparecimento ao scroll
  initScrollAnimations();
});

// Sistema de partículas
function createParticles(container, count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Tamanho aleatório entre 2-6px
    const size = Math.random() * 4 + 2;

    // Posição aleatória
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Duração da animação aleatória entre 20-40s
    const duration = Math.random() * 20 + 20;

    // Atraso aleatório para iniciar a animação
    const delay = Math.random() * 5;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background-color: rgba(249, 249, 224, 0.3);
      border-radius: 50%;
      top: ${posY}%;
      left: ${posX}%;
      opacity: ${Math.random() * 0.5 + 0.1};
      animation: float ${duration}s ease-in-out ${delay}s infinite;
    `;

    container.appendChild(particle);
  }

  // Adiciona a animação de float ao stylesheet
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(10px, 15px) rotate(5deg); }
      50% { transform: translate(-5px, 10px) rotate(-5deg); }
      75% { transform: translate(-10px, -5px) rotate(3deg); }
    }
  `;
  document.head.appendChild(style);
}

// Carrossel aprimorado
function initCarousel() {
  const carousel = document.querySelector('.logos-carousel');
  if (carousel) {
    const logos = carousel.querySelectorAll('.partner-logo');
    const logoWidth = logos[0].offsetWidth;
    const totalLogos = logos.length;
    let scrollPosition = 0;
    let animationId;
    let isPaused = false;

    // Clona os logos necessários para criar o efeito infinito
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      carousel.appendChild(clone);
    });

    // Duplica mais um conjunto para garantir que sempre tenha elementos suficientes
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      carousel.appendChild(clone);
    });

    // Função que faz o scroll do carrossel (mais lento)
    function scrollCarousel() {
      if (isPaused) return;

      scrollPosition -= 0.5; // Reduzindo a velocidade do carrossel

      // Quando o primeiro conjunto de logos está completamente fora da vista
      // Reinicia a posição para criar o efeito infinito
      if (scrollPosition <= -logoWidth * totalLogos) {
        scrollPosition = 0;
      }

      carousel.style.transform = `translateX(${scrollPosition}px)`;
      animationId = requestAnimationFrame(scrollCarousel);
    }

    // Inicia a animação
    scrollCarousel();

    // Pausa a animação quando o cursor está sobre o carrossel
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
}

// Animações de scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');

  if (animatedElements.length > 0) {
    const checkIfInView = () => {
      animatedElements.forEach(element => {
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

    // Atualiza ao rolar a página
    window.addEventListener('scroll', checkIfInView);
  }

  // Adiciona estilos para a animação de fade-in nos elementos
  const style = document.createElement('style');
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
