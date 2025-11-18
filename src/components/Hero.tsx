"use client";
import HeaderContainer from './HeaderContainer'
import { useTranslation } from '../lib/i18n/useTranslation'
export default function Hero() {
  const { t } = useTranslation();
  return (
    <header className="relative h-[100vh] md:h-screen min-h-[600px] md:min-h-[700px] overflow-hidden flex flex-col">
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="octo-pattern" patternUnits="userSpaceOnUse" width="120" height="120">
              <path d="M50 10 Q60 30 70 10 T90 10 Q100 30 90 50 T90 90 Q70 100 50 90 T10 90 Q0 70 10 50 T10 10 Q30 0 50 10" fill="none" stroke="#03493D" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#octo-pattern)" />
        </svg>
      </div>

      <div className="absolute inset-0 md:hidden z-0">
        <div className="absolute inset-0">
          <img src="/assets/images/dupla-otimizada.webp" alt="Equipe octo.hub trabalhando em conjunto" className="w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-octo-blue/80 to-octo-blue/90" />
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-octo-blue z-0 md:block hidden" />
        <div className="absolute top-0 bottom-0 right-0 w-full md:w-2/3 lg:w-3/5 overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-octo-blue via-octo-blue/10 to-transparent z-10" />
          <div className="absolute inset-0">
            <img src="/assets/images/dupla-otimizada.webp" alt="Equipe octo.hub trabalhando em conjunto" className="w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-octo-blue/95 to-transparent md:w-[55%] z-5 hidden md:block" />
      </div>

      <div className="relative z-20 flex flex-col flex-grow">
        <HeaderContainer />
        <div className="container mx-auto px-4 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl p-2">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bebas uppercase leading-tight mb-4 md:mb-6 text-white">{t('hero.title')}</h1>
            <p className="text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 text-octo-yellow/90">{t('hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contato" className="inline-flex items-center justify-center bg-octo-yellow text-octo-blue px-6 py-3 rounded-full text-lg md:text-lg xl:text-xl font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white group shadow-md">
                <span className="relative z-10">{t('hero.cta.contact')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="#porque-escolher" className="inline-flex items-center justify-center border-2 border-octo-yellow/60 text-octo-yellow px-6 py-3 md:px-8 md:py-3 rounded-full text-lg md:text-lg xl:text-xl font-medium hover:border-octo-yellow hover:text-white transition-all group">
                <span>{t('hero.cta.services')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}