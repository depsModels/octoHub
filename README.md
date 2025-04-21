# octo.hub - Soluções Estratégicas Conectadas

![octo.hub Logo](src/assets/logo/logo.png)

## 📌 Sobre o Projeto

**octo.hub** é uma plataforma de soluções estratégicas e conectadas para negócios, oferecendo serviços integrados de marketing digital, desenvolvimento web e consultoria.

## 🚀 Tecnologias Utilizadas

- HTML5  
- Tailwind CSS  
- JavaScript  
- Node.js  
- PostCSS  
- Autoprefixer  

## 🧰 Pré-requisitos

- Node.js (versão 14 ou superior)  
- npm (gerenciador de pacotes do Node)  
- Editor de código (recomendado: VS Code)  
- Extensão Live Server (para VS Code)  

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/depsModels/octoHub.git
cd octoHub
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o ambiente de desenvolvimento:
```bash
npm run dev
```

## 📂 Desenvolvimento

### Estrutura de Arquivos

```
octoHub/
├── src/
│   ├── assets/        # Imagens, ícones e outros recursos
│   ├── styles/        # Arquivos CSS
│   ├── scripts/       # Arquivos JavaScript
│   └── pages/         # Páginas adicionais
├── index.html         # Página principal
├── package.json       # Configurações do projeto
└── tailwind.config.js # Configuração do Tailwind
```

### Comandos Disponíveis

- `npm run dev`: Inicia o modo de desenvolvimento com watch  
- `npm run build`: Compila o CSS para produção  

### Trabalhando com o Tailwind CSS

1. Os arquivos CSS estão localizados em `src/styles/`  
2. O arquivo `input.css` contém as diretivas do Tailwind  
3. O arquivo `output.css` é gerado automaticamente  

### Personalização

- Cores personalizadas podem ser configuradas em `tailwind.config.js`  
- Fontes personalizadas estão definidas no arquivo de configuração  
- Estilos globais podem ser adicionados em `src/styles/input.css`  

## 👀 Visualizando o Projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Abra o projeto:
   - Use o Live Server do VS Code  
   - Ou abra `index.html` diretamente no navegador  

## 📦 Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

## 🛠️ Ferramentas de Desenvolvimento

### ESLint e Prettier

O projeto utiliza **ESLint** e **Prettier** para garantir a qualidade e consistência do código:

- **ESLint**: Identifica e corrige problemas no código JavaScript  
- **Prettier**: Mantém um estilo de código consistente  

#### Comandos Disponíveis

- `npm run lint` – Verifica o código com ESLint  
- `npm run lint:fix` – Corrige automaticamente problemas detectados  
- `npm run format` – Formata todos os arquivos com Prettier  
- `npm run format:check` – Verifica se os arquivos estão formatados corretamente  

#### Arquivos de Configuração

- `.eslintrc.json` – Configuração do ESLint  
- `.prettierrc` – Configuração do Prettier  
- `.eslintignore` – Arquivos ignorados pelo ESLint  
- `.prettierignore` – Arquivos ignorados pelo Prettier 
