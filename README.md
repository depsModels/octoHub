# OctoHub - Soluções Estratégicas de Marketing Digital

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.en.md)

![OctoHub Logo](src/assets/logos/logo.png)

## 📋 Descrição

OctoHub é uma landing page moderna para uma agência de marketing digital especializada em captação de clientes e estratégias de crescimento para empresas. A plataforma foi construída com foco em performance, SEO e experiência do usuário, utilizando uma abordagem mobile-first.

### 🚀 Características Principais

- Design responsivo e mobile-first
- Animações e interações suaves otimizadas
- Carregamento otimizado de imagens e recursos
- SEO amigável com HTML semântico
- Performance excelente (Lighthouse 90+)

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- JavaScript Vanilla para funcionalidades interativas
- Otimização de imagens com carregamento lazy
- PostCSS para processamento CSS

## 🗂️ Estrutura do Projeto

```
octoHub/
├── src/
│   ├── assets/
│   │   ├── images/     # Imagens do site
│   │   └── logo/       # Logos e identidade visual
│   ├── scripts/
│   │   └── script.js   # JavaScript principal
│   ├── styles/
│   │   ├── input.css   # Arquivo fonte para o Tailwind
│   │   ├── output.css  # CSS compilado pelo Tailwind
│   │   └── styles.css  # Estilos adicionais
│   └── pages/          # Páginas secundárias (ex: EN)
├── index.html          # Página principal
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do Tailwind
└── README.md           # Este arquivo
```

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) (v14.0.0 ou superior)
- [npm](https://www.npmjs.com/) (v6.0.0 ou superior)
- [XAMPP](https://www.apachefriends.org/) ou servidor web similar (opcional, para desenvolvimento local)

## ⚙️ Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/octoHub.git
   cd octoHub
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Para construir o projeto para produção:
   ```bash
   npm run build
   ```

## 📝 Comandos Disponíveis

| Comando                | Descrição                                                                       |
| ---------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento com hot-reload (observa alterações em CSS) |
| `npm run build`        | Compila o CSS com Tailwind para produção (minificado)                           |
| `npm run lint`         | Executa o ESLint para verificar problemas no código                             |
| `npm run lint:fix`     | Corrige automaticamente problemas de linting quando possível                    |
| `npm run format`       | Formata o código com Prettier                                                   |
| `npm run format:check` | Verifica se o código está formatado corretamente                                |

## 🔧 Desenvolvimento

### Workflow de Desenvolvimento

1. Execute `npm run dev` para iniciar o ambiente de desenvolvimento
2. Edite arquivos HTML, CSS ou JavaScript conforme necessário
3. As alterações no HTML são atualizadas automaticamente
4. Para mudanças nas classes Tailwind, elas serão compiladas automaticamente pelo watcher
5. Para alterações em JavaScript, você pode precisar atualizar o navegador

### Estrutura Tailwind CSS

O projeto utiliza Tailwind CSS para estilização. Os principais arquivos são:

- `src/styles/input.css`: Contém as diretivas do Tailwind e pode incluir estilos personalizados
- `src/styles/output.css`: CSS compilado pelo Tailwind (não edite diretamente)
- `tailwind.config.js`: Configuração do Tailwind, incluindo temas, plugins e extensões

### Adicionando Novas Páginas

1. Crie um novo arquivo HTML na pasta raiz ou na pasta `/src/pages/`
2. Utilize a mesma estrutura e componentes da página principal para manter a consistência
3. Inclua os mesmos arquivos CSS e JavaScript

## 📤 Deploy

Para publicar o site em produção:

1. Execute `npm run build` para gerar os arquivos otimizados
2. Faça upload dos arquivos para o servidor web:
   - Todos os arquivos HTML
   - A pasta `public` completa
   - Qualquer outro arquivo necessário (robots.txt, sitemap.xml, etc.)

### Recomendações para Hospedagem

- Habilite compressão GZIP/Brotli no servidor
- Configure cache de navegador para recursos estáticos
- Utilize CDN para entrega de conteúdo (opcional)

## 📚 Recursos e Documentação

- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Guia de HTML Semântico](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics)
- [Otimização de Performance Web](https://web.dev/performance-scoring/)

---

Desenvolvido com 💙 pelo time Deps Models =
