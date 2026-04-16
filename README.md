# Musa Portfolio

Modern personal portfolio built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4 via @tailwindcss/vite
- PDFKit for resume PDF generation

## Current Site Sections

- Sticky navigation with mobile menu
- Hero section with responsive portrait layout
- Featured projects with real preview images
- About and capabilities
- Current Focus (Currently Building and Currently Learning)
- Writing section with real article links and cover images
- Contact section
- Footer with social links and quick navigation

## Run Locally

1. Install dependencies

npm install

2. Start development server

npm run dev

3. Build for production

npm run build

4. Preview production build

npm run preview

## Resume PDF Workflow

The site uses a generated PDF resume at public/cv.pdf.

- Generate or regenerate resume PDF:

npm run generate:resume

- Resume source template:

scripts/generate-resume-pdf.mjs

- Public PDF output:

public/cv.pdf

## Key Files

- Main page and content data:

src/App.jsx

- Global styling and reveal effects:

src/index.css

- Vite plugins/config:

vite.config.js

- HTML shell and metadata:

index.html

## Content Updates

To quickly edit portfolio content, update arrays in src/App.jsx:

- projects
- capabilities
- currentProjects
- learningFocus
- writing

## Notes

- Project preview images are stored locally in src/assets/projects for reliable rendering.
- External article cover images are loaded from Paragraph URLs.
