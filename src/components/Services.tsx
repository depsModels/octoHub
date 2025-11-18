export default function Services() {
  const cards = [
    {icon:'fa-code', title:'Desenvolvimento Web', desc:'Sites, aplicações e plataformas com foco em experiência do usuário e performance.', items:['Sites responsivos e otimizados','E-commerce e lojas virtuais','Aplicações web personalizadas']},
    {icon:'fa-bullhorn', title:'Marketing Digital', desc:'Estratégias integradas para aumentar visibilidade, engajamento e conversões.', items:['SEO e otimização para buscadores','Gestão de mídias sociais','Campanhas de tráfego pago']},
    {icon:'fa-paintbrush', title:'CRM e funis de vendas', desc:'Sistemas de gestão de clientes e automação de processos de venda.', items:['CRM de clientes','Funis de vendas']},
    {icon:'fa-chart-pie', title:'Análise de Dados', desc:'Transformando dados em insights para decisões estratégicas.', items:['Implementação de Google Analytics','Relatórios de performance','Otimização baseada em dados']},
    {icon:'fa-pencil', title:'Conteúdo Estratégico', desc:'Textos persuasivos e relevantes para diferentes canais e objetivos.', items:['Blogs e artigos otimizados para SEO','Copywriting para landing pages','Storytelling para marcas']},
    {icon:'fa-headset', title:'Consultoria Digital', desc:'Orientação especializada para transformação e crescimento digital.', items:['Diagnóstico digital','Planejamento estratégico','Treinamento de equipes']}
  ]
  return (
    <section id="sobre" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-octo-yellow/20 text-white rounded-full mb-4 text-sm uppercase tracking-wider font-bold">Nossa Expertise</span>
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bebas uppercase mb-4">Nossos Tentáculos</h2>
          <div className="w-24 h-1 bg-octo-yellow mx-auto mb-6" />
          <p className="max-w-2xl mx-auto xl:text-xl mb-8">Soluções integradas que se adaptam às necessidades do seu negócio, sempre conectadas ao objetivo central.</p>
          <div className="flex justify-center"><a href="#contato" className="inline-flex items-center bg-octo-yellow text-octo-blue px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 hover:scale-105 hover:bg-octo-green hover:text-white group shadow-md"><span className="relative z-10">Potencialize Seu Negócio</span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map(card => (
            <div key={card.title} className="bg-octo-blue/80 backdrop-blur-md rounded-2xl overflow-hidden group transition-all duration-300 hover:bg-octo-blue/90 border border-octo-yellow/10 hover:border-octo-yellow shadow-lg hover:shadow-octo-yellow/20">
              <div className="h-3 bg-gradient-to-r from-octo-yellow via-octo-green to-octo-yellow" />
              <div className="p-8">
                <div className="w-16 h-16 bg-octo-yellow/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-octo-yellow/80 transition-all"><i className={`fa-solid ${card.icon} text-2xl text-octo-yellow`} /></div>
                <h3 className="text-xl font-bold mb-3 xl:text-3xl">{card.title}</h3>
                <p className="mb-4 text-white xl:text-xl">{card.desc}</p>
                <ul className="space-y-2 text-sm xl:text-lg mb-6">{card.items.map(it => (<li key={it} className="flex items-center"><i className="fas fa-check text-octo-yellow mr-2"></i><span>{it}</span></li>))}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}