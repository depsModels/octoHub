export default function Footer() {
  return (
    <footer className="border-t border-octo-yellow/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#" className="inline-block">
              <img src="/assets/logos/logo.png" alt="octo.hub Logo" className="h-20 mb-3 mx-auto md:mx-0" />
            </a>
            <p className="text-xs text-octo-yellow/70 xl:text-lg">Especialista em captação de clientes</p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/octo_hub/" className="w-10 h-10 bg-octo-green/10 rounded-lg flex items-center justify-center hover:bg-octo-green hover:text-white transition-all" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/octo-hub/" className="w-10 h-10 bg-octo-green/10 rounded-lg flex items-center justify-center hover:bg-octo-green hover:text-white transition-all" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-sm font-medium uppercase mb-4 xl:text-lg">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-octo-yellow/70 xl:text-lg">
                <li><a href="#" className="hover:text-octo-yellow transition-colors">Início</a></li>
                <li><a href="#porque-escolher" className="hover:text-octo-yellow transition-colors">Por que escolher</a></li>
                <li><a href="#parceiros" className="hover:text-octo-yellow transition-colors">Parceiros</a></li>
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">Nossos serviços</a></li>
                <li><a href="#contato" className="hover:text-octo-yellow transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase mb-4 xl:text-lg">Serviços</h3>
              <ul className="space-y-2 text-sm text-octo-yellow/70 xl:text-lg">
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">Desenvolvimento Web</a></li>
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">Marketing Digital</a></li>
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">CRM e Funis de Vendas</a></li>
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">Análise de Dados</a></li>
                <li><a href="#sobre" className="hover:text-octo-yellow transition-colors">Conteúdo Estratégico</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-octo-yellow/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-octo-yellow/60 text-center md:text-left mb-4 md:mb-0 xl:text-base">&copy; <span id="currentYear"></span> octo.hub. Todos os direitos reservados.</p>
          <div className="flex justify-center md:justify-end space-x-4"><a href="#" className="text-xs text-octo-yellow/60 hover:text-octo-yellow transition-colors xl:text-base">Termos de Uso</a><a href="#" className="text-xs text-octo-yellow/60 hover:text-octo-yellow transition-colors xl:text-base">Política de Privacidade</a></div>
        </div>
      </div>
    </footer>
  );
}