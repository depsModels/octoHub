"use client";
import { useTranslation } from '../lib/i18n/useTranslation'
export default function CTA() {
  const { t } = useTranslation();
  return (
    <section id="cta" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#F9F9E0" strokeWidth="0.25" strokeDasharray="5,5" d="M0,0 L100,100 M100,0 L0,100" /></svg>
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-octo-blue text-octo-yellow rounded-full mb-4 text-sm uppercase tracking-wider">{t('cta.badge')}</span>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bebas uppercase mb-6 text-white">{t('cta.title')}</h2>
          <div className="w-24 h-1 bg-octo-yellow mx-auto mb-8" />
          <p className="text-xl md:text-2xl xl:text-3xl mb-12 text-octo-yellow">{t('cta.text')}</p>
          <a href="https://wa.me/+61414977586" className="inline-flex items-center bg-octo-yellow text-octo-blue px-10 py-4 rounded-full text-xl font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white xl:text-2xl group shadow-lg">
            <span className="relative z-10">{t('cta.button')} </span>
            <div className="w-12 h-12 rounded-full flex items-center justify-center ml-5 bg-octo-green/10 group-hover:bg-octo-green/30 transition-all duration-300">
              <i className="fa-brands fa-whatsapp" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}