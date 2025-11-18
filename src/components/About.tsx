export default function About() {
  return (
    <section id="quem-somos" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="octopus-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M50 10 Q60 30 70 10 T90 10 Q100 30 90 50 T90 90 Q70 100 50 90 T10 90 Q0 70 10 50 T10 10 Q30 0 50 10" fill="none" stroke="#03493D" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#octopus-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-octo-yellow/20 text-white rounded-full mb-4 text-sm uppercase tracking-wider font-bold">Nossa História</span>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-6 text-white">Quem somos?</h2>
          <div className="w-24 h-1 bg-octo-yellow mx-auto mb-6" />
          <p className="max-w-3xl mx-auto xl:text-xl">A <strong className="font-medium text-octo-yellow">octo.hub</strong> surgiu com o objetivo de centralizar, em um único lugar, todas as frentes essenciais para o sucesso de um negócio no ambiente digital. Unimos estratégias de marketing, tráfego pago, social media, automações, funis de vendas e consultoria comercial para oferecer uma solução completa.<br />Atuamos como uma extensão do seu time, conectando todas as áreas que impactam diretamente na atração de clientes e no aumento das vendas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {icon:'fa-brain', title:'Foco no Cliente', text:'Colocamos nossos clientes no centro de tudo. Cada estratégia é pensada para gerar resultados reais e impactar diretamente o crescimento do negócio.'},
            {icon:'fa-lightbulb', title:'Clareza e Eficiência', text:'Somos organizados, objetivos e orientados por dados. Valorizamos processos bem estruturados que entregam valor com agilidade e precisão.'},
            {icon:'fa-rocket', title:'Inovação com Propósito', text:'Acreditamos na criatividade que resolve problemas. Buscamos soluções inovadoras que fazem sentido para cada cenário e impulsionam vantagem competitiva.'},
            {icon:'fa-chart-line', title:'Resultados Acima de Tudo', text:'Nosso compromisso é com o crescimento. Trabalhamos com metas claras, foco em performance e ações que fazem a diferença no seu faturamento.'}
          ].map((c) => (
            <div key={c.title} className="bg-gradient-to-br from-octo-blue/90 to-octo-blue/80 p-6 rounded-xl border border-octo-yellow/20 shadow-lg hover:shadow-octo-yellow/10 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-octo-green/10 group-hover:bg-octo-green/30 transition-all duration-300"><i className={`fa-solid ${c.icon} text-2xl text-octo-yellow`} /></div>
                <h3 className="text-xl font-bold xl:text-2xl text-white">{c.title}</h3>
              </div>
              <p className="text-sm xl:text-base text-octo-yellow/90">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}