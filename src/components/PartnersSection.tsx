import PartnersCarousel from './PartnersCarousel'

export default function PartnersSection() {
  return (
    <section id="parceiros" className="py-16 px-4 bg-octo-blue/90 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-octo-yellow/5 to-transparent" />
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="rgba(249, 249, 224, 0.3)" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center ml-1 text-3xl md:text-4xl xl:text-6xl font-bebas uppercase mb-4">Quem confia na <img src="/assets/logos/logo.png" alt="octo.hub Logo" className="mb-6" width={250} height={100} /></h2>
        </div>
        <PartnersCarousel />
      </div>
    </section>
  )
}