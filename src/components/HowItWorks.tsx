export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-octo-yellow/20 text-white rounded-full mb-4 text-sm uppercase tracking-wider font-bold">Processo Simplificado</span>
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bebas uppercase mb-4">4 PASSOS PARA O RESULTADO</h2>
          <div className="w-24 h-1 bg-octo-yellow mx-auto mb-6" />
          <p className="max-w-2xl mx-auto xl:text-xl mb-8">Alcance resultados de forma mais simples do que você imagina</p>
          <div className="flex justify-center">
            <a href="#contato" className="inline-flex items-center bg-octo-yellow text-octo-blue px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white group shadow-md">
              <span className="relative z-10">Comece Sua Jornada Hoje</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-octo-green/10 via-octo-yellow/30 to-octo-green/10 transform -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[1,2,3,4].map((n) => (
              <div key={n} className="bg-octo-blue rounded-2xl p-8 border border-octo-yellow/20 shadow-xl hover:shadow-octo-yellow/10 transition-all group">
                <div className="flex justify-center mb-6 relative">
                  <div className="w-20 h-20 bg-octo-green rounded-full flex items-center justify-center text-3xl font-bold text-white group-hover:bg-octo-yellow group-hover:text-octo-blue transition-all duration-300">{n}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center xl:text-2xl text-white">{n===1?'Converse com um Especialista':n===2?'Diagnóstico do Seu Cenário atual':n===3?'Implementação das Estratégias':'Resultados Visíveis em até 3 Meses'}</h3>
                <p className="text-center text-white xl:text-lg">{n===1?'Tudo começa com um bate-papo com um dos nossos especialistas em marketing e vendas, que irá compreender as particularidades do seu negócio e identificar as melhores oportunidades para crescer.':n===2?'Realizamos uma análise aprofundada da sua presença online para identificar melhorias e revelar as melhores oportunidades de atrair leads qualificados.':n===3?'Nosso time desenvolve campanhas personalizadas focadas na captação de clientes diretos, posicionamento digital e automação dos processos — tudo para manter sua empresa à frente da concorrência.':'Em até 3 meses, você já verá resultados concretos: geração de leads qualificados e crescimento nas vendas.'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}