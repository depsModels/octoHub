import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_#F9F9E0_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-octo-green to-octo-yellow opacity-30 blur rounded-lg" />
              <div className="relative bg-octo-blue/80 backdrop-blur-sm p-8 rounded-xl border border-octo-yellow/20 shadow-2xl">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bebas uppercase mb-6">Transforme seu Negócio Hoje</h2>
                <div className="w-16 h-1 bg-octo-yellow mb-6" />
                <p className="mb-8 xl:text-xl text-octo-yellow/90">Pronto para conquistar novos clientes e aumentar suas vendas? Nossa equipe de especialistas está preparada para impulsionar seus resultados com estratégias personalizadas e eficientes.</p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center group transition-all">
                    <div className="w-12 h-12 bg-octo-yellow/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-octo-yellow/40 transition-all"><i className="fa-solid fa-envelope text-xl text-octo-yellow" /></div>
                    <div>
                      <span className="text-sm uppercase tracking-wider text-octo-yellow">E-mail</span>
                      <span className="block xl:text-xl text-white">team@octohub.site</span>
                    </div>
                  </div>
                  <div className="flex items-center group transition-all">
                    <div className="w-12 h-12 bg-octo-yellow/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-octo-yellow/40 transition-all"><i className="fa-solid fa-phone text-xl text-octo-yellow" /></div>
                    <div>
                      <span className="text-sm uppercase tracking-wider text-octo-yellow">Telefone</span>
                      <span className="block xl:text-xl text-white">+55 (11) 98765-4321</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}