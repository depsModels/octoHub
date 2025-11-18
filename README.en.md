# OctoHub — Next.js Application for Digital Marketing

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)

![OctoHub Logo](public/assets/logos/logo.png)

## 📋 Description

OctoHub is a Next.js (App Router) application focused on customer acquisition and business growth. The project prioritizes performance, SEO, user experience and internationalization (PT/EN) with a mobile‑first approach.

### 🚀 Highlights

- Next.js 14 architecture (App Router)
- Internationalization with JSON and `useTranslation`
- Tailwind CSS design system and fonts via `next/font`
- Accessible and responsive components
- Optimized performance and semantic SEO

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Font Awesome](https://fontawesome.com/) (icons)

## 🗂️ Project Structure

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
└── README.en.md
```

## 📦 Pre requisites

- [Node.js](https://nodejs.org/) 18.17+ (recommended)
- [npm](https://www.npmjs.com/) 9+

## ⚙️ Installation & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/octoHub.git
   cd octoHub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development:

   ```bash
   npm run dev
   ```

---

Developed with 💙 by the Deps Models team
