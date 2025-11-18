# OctoHub — Aplicação Next.js para Marketing Digital

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.en.md)

![OctoHub Logo](public/assets/logos/logo.png)

## 📋 Descrição

OctoHub é uma aplicação construída com Next.js (App Router) focada em captação de clientes e crescimento de negócios. O projeto prioriza performance, SEO, experiência do usuário e internacionalização (PT/EN), seguindo uma abordagem mobile-first.

### 🚀 Destaques

- Arquitetura com Next.js 14 (App Router)
- Internacionalização com JSON e `useTranslation`
- Design system com Tailwind CSS e fontes via `next/font`
- Componentes acessíveis e responsivos
- Performance otimizada e SEO semântico

## 🛠️ Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Font Awesome](https://fontawesome.com/) (ícones)

## 🗂️ Estrutura do Projeto

```
octoHub/
├── public/
│   └── assets/
│       ├── images/
│       ├── logos/
│       └── logos-companies/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send_form/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx, Services.tsx, ...
│   ├── hooks/
│   │   └── useLanguage.tsx
│   ├── lib/
│   │   └── i18n/
│   │       ├── en.json
│   │       ├── pt.json
│   │       └── useTranslation.ts
│   └── styles/
│       └── styles.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) 18.17+ (recomendado)
- [npm](https://www.npmjs.com/) 9+

## ⚙️ Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/octoHub.git
   cd octoHub
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie em desenvolvimento:

   ```bash
   npm run dev
   ```

—

Desenvolvido com 💙 pelo time Deps Models
