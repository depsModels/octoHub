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

  // Carrossel infinito para logos de parceiros
  const carousel = document.querySelector('.logos-carousel');
  
  if (carousel) {
    const logos = carousel.querySelectorAll('.partner-logo');
    const logoWidth = logos[0].offsetWidth;
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
    
    // Função que faz o scroll do carrossel
    function scrollCarousel() {
      if (isPaused) return;
      
      scrollPosition -= 1;
      
      // Quando o primeiro conjunto de logos está completamente fora da vista
      // Reinicia a posição para criar o efeito infinito
      if (scrollPosition <= -logoWidth * logos.length) {
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
      if (newLogoWidth !== logoWidth && scrollPosition <= -logoWidth * logos.length) {
        scrollPosition = 0;
        carousel.style.transform = `translateX(${scrollPosition}px)`;
      }
    });
  }
});
