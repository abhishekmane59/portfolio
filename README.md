# Abhishek Mane Portfolio

A premium, dark technical portfolio for Abhishek Mane, a Front-End Developer specializing in React, TypeScript and REST API integration.

## Features

- Responsive portfolio experience for mobile, tablet and desktop
- Supplied transparent profile photograph as the hero focal point
- GSAP hero entrance and subtle ScrollTrigger parallax
- Mobile navigation, accessible form controls and reduced-motion support
- About, skills, experience, featured banking application, education, certifications and contact sections
- SEO title, description and Open Graph metadata

## Tech Stack

React 19, Vite, GSAP, ScrollTrigger, Lucide React, CSS.

## Installation and Running Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The site can be deployed to Vercel, Netlify, GitHub Pages or any static host using the generated `dist` directory.

## Folder Structure

- `src/App.jsx`: page composition and interactive form/menu state
- `src/App.css`: responsive visual system and layout
- `src/data/`: personal, skills, experience, project-related, education, certification and social content
- `src/animations/heroAnimations.js`: GSAP setup and cleanup
- `public/assets/images/profile.png`: supplied profile photograph
- `public/assets/resume/`: place `Abhishek-Mane-Resume.pdf` here for the resume link

## Updating Portfolio Content

Update personal contact details in `src/data/personal.js`, skills in `src/data/skills.js`, work history in `src/data/experience.js`, education in `src/data/education.js`, certifications in `src/data/certifications.js`, and social URLs in `src/data/socialLinks.js`. The experience start date intentionally remains `[START DATE]` until the correct date is supplied.

## Environment Variables

Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY` to your Web3Forms access key. The contact form posts directly to Web3Forms and shows submitting, success and retry states. The supplied key is configured locally and `.env` is ignored by Git.

## Remaining TODOs

- Add the final resume PDF at `public/assets/resume/Abhishek-Mane-Resume.pdf`.
- Replace `[START DATE]` in `src/data/experience.js` with the confirmed date.
