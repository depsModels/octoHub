# OctoHub

<img src="./src/assets/logos/logo.png" alt="OctoHub Logo" width="300"/>

## Sobre o Projeto

OctoHub é uma landing page moderna para uma agência de marketing digital, apresentando seus serviços, portfólio e informações de contato de forma elegante e responsiva.

## Recursos

- Design responsivo
- Experiência de usuário intuitiva
- Validação de formulário
- Animações suaves
- Otimização SEO
- Tempos de carregamento rápidos

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- PHP
- Tailwind CSS
- PostCSS
- npm

## Estrutura do Projeto

- **`src/`**: Diretório de desenvolvimento.
  - `styles/`: Arquivos de estilo Sass e CSS.
  - `scripts/`: JavaScript do cliente.
  - `assets/`: Recursos como imagens e fontes.
    - `logos/`: Contém `logo.png` (logo completo) e `logoIcon.png` (ícone).
    - `images/`: Imagens utilizadas no site.
    - `logos-companies/`: Logos de empresas parceiras.
  - `pages/`: Arquivos de template para diferentes páginas.

- **`public/`**: Diretório de produção com arquivos otimizados prontos para implantação.

## Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório do projeto
cd <nome-da-pasta>

# Instale as dependências
npm install
```

## Comandos Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Compila para produção
npm run build

# Executa testes
npm run test
```

## Fluxo de Desenvolvimento

1. Trabalhe nos arquivos dentro do diretório `src/`.
2. Execute `npm run dev` para visualizar suas alterações em tempo real.
3. Quando estiver pronto para produção, execute `npm run build` para gerar arquivos otimizados no diretório `public/`.

## Implantação

Para implantar o site:

1. Execute `npm run build` para gerar os arquivos de produção.
2. Faça upload dos arquivos do diretório `public/` para seu servidor web.