export default function Team() {
  const members = [
    {src:'victor.webp', name:'Victor Braga', role:'Especialista Digital com Foco em Métricas e Resultados', desc:'Responsável por transformar dados em decisões estratégicas, alinhando performance com crescimento sustentável.'},
    {src:'julia.webp', name:'Julia Vergamini', role:'Especialista em Vendas, CRM e Funis de Conversão', desc:'Estruturação de jornadas de compra e estratégias de relacionamento orientadas à conversão.'},
    {src:'gustavo.jpg', name:'Gustavo Scheffel', role:'Especialista em Estratégias e Escala', desc:'Focado em performance e conversão, extraindo o máximo das ferramentas de tráfego pago.'},
    {src:'evelyn.jpg', name:'Evelyn Santos', role:'Especialista em Marketing para Redes Sociais', desc:'Atua no posicionamento de marcas por meio de conteúdos estratégicos e campanhas de engajamento em redes sociais.'}
  ]
  return (
    <section id="equipe" className="py-20 px-4 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-octo-yellow/5 to-transparent" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bebas uppercase mb-4">Nossa Equipe</h2>
          <div className="w-24 h-1 bg-octo-yellow mx-auto mb-6" />
          <p className="max-w-2xl mx-auto xl:text-xl mb-8">Conheça os profissionais que fazem a octo.hub acontecer. Uma equipe multidisciplinar, apaixonada e comprometida com resultados.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img src={`/assets/images/${m.src}`} alt={m.name} className="w-full h-80 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-octo-blue via-octo-blue/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-2 xl:text-3xl">{m.name}</h3>
                <div className="w-12 h-1 bg-octo-yellow mx-auto mb-3" />
                <p className="text-octo-yellow font-medium mb-3 xl:text-xl">{m.role}</p>
                <p className="text-octo-yellow/80 mb-6 xl:text-lg">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}