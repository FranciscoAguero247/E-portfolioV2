# Francisco Agüero Portfolio

A polished personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. The project highlights Francisco Agüero’s background, technical capabilities, featured work, and contact details in a modern, responsive experience.

## Features

- Responsive one-page portfolio experience
- Animated transitions and motion-enhanced UI sections
- Dedicated sections for skills, projects, experience, and contact
- Contact form integration via EmailJS
- Content-driven structure for easy updates and maintenance

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Testing Library

## Project Structure

- [src/App.jsx](src/App.jsx) — application entry point
- [src/portfolioData.js](src/portfolioData.js) — portfolio content, profile details, and project data
- [src/components/portfolio](src/components/portfolio) — reusable UI sections such as Hero, Skills, Projects, Contact, and Footer
- [src/pages](src/pages) — page-level components
- [public](public) — static assets, manifest data, and downloadable files

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The local development server will start and provide a Vite URL in the terminal.

### Production Build

```bash
npm run build
```

### Preview Build Locally

```bash
npm run preview
```

## Content Management

Most site content is centralized in [src/portfolioData.js](src/portfolioData.js), making it straightforward to update:

- biography and title
- social links
- skill categories and proficiency
- project descriptions and URLs

## Deployment

This project is configured for deployment through a Vite-based hosting workflow and is associated with:

https://franciscojavieraguerojr.com

## License

This repository is intended for personal portfolio use.