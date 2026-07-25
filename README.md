# E-Portfolio V2

A React and Vite portfolio website for Francisco Aguero. The app presents a modern one-page experience with sections for the hero area, skills, projects, experience, contact, and footer.

## Project structure

```text
src/
  App.jsx
  App.test.js
  index.css
  index.jsx
  portfolioData.js
  serviceWorker.js
  setupTests.js
  components/
    portfolio/
      BootLoader.jsx
      Contact.jsx
      Experience.jsx
      Footer.jsx
      Header.jsx
      Hero.jsx
      Projects.jsx
      Skills.jsx
  pages/
    FranciscoPortfolio.jsx
    PortfolioPage.jsx

public/
  CNAME
  Francisco-Aguero-Portfolio.html
  favicon.png
  manifest.json
  profile.jpg
  robots.txt
```

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Testing Library

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- The app uses a custom domain configured in the public CNAME file.
- Static assets and metadata live in the public directory.
- Portfolio content is centralized in src/portfolioData.js.
