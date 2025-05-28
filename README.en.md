# OctoHub - Strategic Digital Marketing Solutions

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)

![OctoHub Logo](src/assets/logos/logo.png)

## 📋 Description

OctoHub is a modern landing page for a digital marketing agency specialized in customer acquisition and growth strategies for businesses. The platform was built with a focus on performance, SEO, and user experience, using a mobile-first approach.

### 🚀 Key Features

- Responsive and mobile-first design
- Optimized smooth animations and interactions
- Optimized loading of images and resources
- SEO-friendly with semantic HTML
- Excellent performance (Lighthouse 90+)

## 🛠️ Technologies Used

- Semantic HTML5
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Vanilla JavaScript for interactive functionalities
- Image optimization with lazy loading
- PostCSS for CSS processing

## 🗂️ Project Structure

```
octoHub/
├── src/
│   ├── assets/
│   │   ├── images/     # Site images
│   │   └── logo/       # Logos and visual identity
│   ├── scripts/
│   │   └── script.js   # Main JavaScript
│   ├── styles/
│   │   ├── input.css   # Source file for Tailwind
│   │   ├── output.css  # CSS compiled by Tailwind
│   │   └── styles.css  # Additional styles
│   └── pages/          # Secondary pages (e.g., EN)
├── index.html          # Main page
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── README.md           # This file
```

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/octoHub.git
   cd octoHub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. To build the project for production:
   ```bash
   npm run build
   ```

## 📝 Available Commands

| Command                | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| `npm run dev`          | Starts the development server with hot-reload (watches CSS changes)       |
| `npm run build`        | Compiles CSS with Tailwind for production (minified)                      |
| `npm run lint`         | Runs ESLint to check for code issues                                      |
| `npm run lint:fix`     | Automatically fixes linting problems when possible                        |
| `npm run format`       | Formats code with Prettier                                                |
| `npm run format:check` | Checks if the code is properly formatted                                  |

## 🔧 Development

### Development Workflow

1. Run `npm run dev` to start the development environment
2. Edit HTML, CSS, or JavaScript files as needed
3. HTML changes are updated automatically
4. For changes to Tailwind classes, they will be automatically compiled by the watcher
5. For JavaScript changes, you may need to refresh the browser

### Tailwind CSS Structure

The project uses Tailwind CSS for styling. The main files are:

- `src/styles/input.css`: Contains Tailwind directives and may include custom styles
- `src/styles/output.css`: CSS compiled by Tailwind (do not edit directly)
- `tailwind.config.js`: Tailwind configuration, including themes, plugins, and extensions

### Adding New Pages

1. Create a new HTML file in the root folder or in the `/src/pages/` folder
2. Use the same structure and components as the main page to maintain consistency
3. Include the same CSS and JavaScript files

## 📤 Deployment

To publish the site in production:

1. Run `npm run build` to generate optimized files
2. Upload the files to the web server:
   - All HTML files
   - The complete `public` folder
   - Any other necessary files (robots.txt, sitemap.xml, etc.)

### Hosting Recommendations

- Enable GZIP/Brotli compression on the server
- Configure browser cache for static resources
- Use CDN for content delivery (optional)

## 📚 Resources and Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Semantic HTML Guide](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [Web Performance Optimization](https://web.dev/performance-scoring/)

---

Developed with 💙 by the Deps Models team 
