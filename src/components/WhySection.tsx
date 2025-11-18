export default function WhySection() {
  return (
    <section id="porque-escolher" className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-octo-yellow/5 to-transparent" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bebas uppercase mb-4 relative z-10 animate-fade-in">Por que escolher a <span className="text-octo-yellow relative">octo</span>?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-octo-green via-octo-yellow to-octo-green mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-sm sm:text-base xl:text-xl text-octo-yellow/90 mb-8">Oferecemos soluções integradas que trazem resultados reais para o seu negócio.</p>
          <div className="flex justify-center">
            <a href="#sobre" className="inline-flex items-center bg-octo-yellow text-octo-blue px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white group shadow-md">
              <span className="relative z-10">Descubra Nossas Soluções</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-row gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          <div className="w-1/2">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {[{icon:'fa-sitemap',title:'Metodologias Comprovadas',text:'Estratégias de marketing e vendas sob medida que já ajudaram dezenas de empresários a captar clientes e aumentar suas margens de lucro.'},{icon:'fa-users',title:'Equipe Especializada',text:'Um time completo de especialistas em social media, tráfego pago, funis e CRM trabalhando para impulsionar seus resultados.'},{icon:'fa-flask',title:'Estratégias de Impacto',text:'Conteúdo e anúncios que atraem e engajam seu público-alvo, aumentando sua visibilidade e gerando oportunidades de negócio.'}].map(c => (
                <div key={c.title} className="bg-gradient-to-br from-octo-blue/90 to-octo-blue/70 p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-octo-yellow shadow-lg hover:shadow-xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-octo-yellow/0 to-octo-yellow/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-2 sm:mb-4 relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-octo-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-octo-yellow/40 transition-all duration-300 flex-shrink-0">
                      <i className={`fa-solid ${c.icon} text-base sm:text-lg md:text-xl text-octo-yellow`} />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold xl:text-2xl mt-1 text-white group-hover:text-octo-yellow transition-colors">{c.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm xl:text-lg text-octo-yellow/90 relative pl-11 sm:pl-14 md:pl-16">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-octo-green/30 via-octo-yellow/20 to-octo-green/30 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-700 h-full">
                <img src="/assets/images/grupo-camisas-coloridas.webp" alt="Equipe octo.hub em ação" className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-octo-yellow/80 text-octo-blue px-4 py-1 rounded-full text-sm font-bold">Time octo.hub</div>
          </div>
        </div>

        <div className="block lg:hidden mb-6">
          <div className="w-full mb-8">
            <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden h-full">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-octo-green/30 via-octo-yellow/20 to-octo-green/30 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-700 h-full">
                <img src="/assets/images/grupo-camisas-coloridas.webp" alt="Equipe octo.hub em ação" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
              </div>
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-octo-yellow/80 text-octo-blue px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-bold">Time octo.hub</div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {[{icon:'fa-sitemap',title:'Metodologias Comprovadas',text:'Estratégias de marketing e vendas sob medida que já ajudaram dezenas de empresários a captar clientes e aumentar suas margens de lucro.'},{icon:'fa-users',title:'Equipe Especializada',text:'Um time completo de especialistas em social media, tráfego pago, funis e CRM trabalhando para impulsionar seus resultados.'},{icon:'fa-flask',title:'Estratégias de Impacto',text:'Conteúdo e anúncios que atraem e engajam seu público-alvo, aumentando sua visibilidade e gerando oportunidades de negócio.'}].map(c => (
              <div key={c.title} className="bg-gradient-to-br from-octo-blue/90 to-octo-blue/70 p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-octo-yellow shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-octo-yellow/0 to-octo-yellow/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex items-start space-x-3 sm:space-x-4 mb-2 sm:mb-4 relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-octo-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-octo-yellow/40 transition-all duration-300 flex-shrink-0"><i className={`fa-solid ${c.icon} text-base sm:text-lg text-octo-yellow`} /></div>
                  <h3 className="text-sm sm:text-base font-bold mt-1 text-white group-hover:text-octo-yellow transition-colors">{c.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-octo-yellow/90 relative pl-11 sm:pl-14">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}