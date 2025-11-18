"use client";
import Link from 'next/link';

export default function Header({ menuActive, setMenuActive }: { menuActive: boolean; setMenuActive: (v: boolean) => void }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/assets/logos/logo.png" alt="octo.hub Logo" className="mr-2" width={250} height={80} />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#porque-escolher" className="text-octo-yellow hover:text-white transition-colors font-medium xl:text-lg">Por que escolher</a>
          <a href="#sobre" className="text-octo-yellow hover:text-white transition-colors font-medium xl:text-lg">Nossos serviços</a>
          <a href="#quem-somos" className="text-octo-yellow hover:text-white transition-colors font-medium xl:text-lg">Quem somos</a>
          <a href="#contato" className="bg-octo-green text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium xl:text-lg">Contato</a>
        <Link href="/en" className="ml-8 flex items-center text-octo-yellow hover:text-white transition-colors" aria-label="Switch to English"><span className="mr-2 text-lg">🇺🇸</span><span className="text-sm font-medium">EN</span></Link>
        </nav>
      </div>
      <div className="hamburger-wrapper">
        <div className="hamburger-button bg-octo-green" onClick={() => setMenuActive(!menuActive)}>
          <span className={`hamburger-icon ${menuActive ? 'active' : ''}`}></span>
        </div>
      </div>
      <nav id="mobile-menu" className={`${menuActive ? 'active' : ''} md:hidden`}>
        <a href="#porque-escolher" className="text-octo-yellow hover:text-white transition-colors text-xl mb-6" style={{ ['--i' as any]: 1 }}>Por que escolher</a>
        <a href="#sobre" className="text-octo-yellow hover:text-white transition-colors text-xl mb-6" style={{ ['--i' as any]: 2 }}>Nossos serviços</a>
        <a href="#quem-somos" className="text-octo-yellow hover:text-white transition-colors text-xl mb-6" style={{ ['--i' as any]: 3 }}>Quem somos</a>
        <a href="#contato" className="bg-octo-green text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-center text-xl cta-button" style={{ ['--i' as any]: 4 }}>Contato</a>
        <Link href="/en" className="flex items-center text-octo-yellow hover:text-white transition-colors text-xl mb-6" style={{ ['--i' as any]: 5 }} aria-label="Switch to English"><span className="mr-2 text-lg">🇺🇸</span><span>English</span></Link>
      </nav>
    </div>
  );
}