"use client";
import { useEffect, useRef } from 'react';

export default function PartnersCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationId = 0;
    let isPaused = false;
    let scrollPosition = 0;
    let unitWidth = 0;
    const baseCount = 5;
    function measure() {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const first = carousel.querySelector('.partner-logo') as HTMLElement | null;
      unitWidth = first ? first.getBoundingClientRect().width : 0;
    }
    function tick() {
      if (isPaused) return;
      const carousel = carouselRef.current;
      if (!carousel || unitWidth === 0) { animationId = requestAnimationFrame(tick); return; }
      scrollPosition -= 0.5;
      if (scrollPosition <= -unitWidth * baseCount) scrollPosition += unitWidth * baseCount;
      carousel.style.transform = `translateX(${scrollPosition}px)`;
      animationId = requestAnimationFrame(tick);
    }
    measure();
    tick();
    const container = document.querySelector('.logos-carousel-container');
    if (container) {
      container.addEventListener('mouseenter', () => { isPaused = true; cancelAnimationFrame(animationId); });
      container.addEventListener('mouseleave', () => { isPaused = false; tick(); });
    }
    window.addEventListener('resize', () => { measure(); });
    return () => cancelAnimationFrame(animationId);
  }, []);

  const logos = ['logo-thony.png','logo-casani.png','logo-topcenter.png','logo-ryo.png','logo-daniela-justo.png'];

  return (
    <div className="logos-carousel-container w-full py-8 md:py-12 overflow-hidden rounded-xl bg-octo-blue/50 backdrop-blur-sm border border-octo-yellow/10 shadow-lg">
      <div ref={carouselRef} className="logos-carousel flex items-center will-change-transform">
        {[...logos, ...logos].map((name, idx) => (
          <div key={name} className="partner-logo group">
            <div className="relative overflow-hidden p-3 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-octo-yellow/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-octo-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img src={`/assets/logos-companies/${name}`} alt={name} className="h-24 sm:h-32 md:h-40 xl:h-48 w-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}