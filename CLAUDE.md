# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project:

- `npm run dev` - Starts local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally before deploying

## Architecture

This is an Astro-based static site for Candy Beam, a laser cutting business specializing in baking products. The architecture follows Astro's file-based routing system with Tailwind CSS for styling.

### Key Structure
- **Pages**: File-based routing in `src/pages/` - each `.astro` file becomes a route
- **Components**: Reusable Astro components in `src/components/` (Header, Footer)
- **Layout**: Single base layout in `src/layouts/Layout.astro` with header/footer structure
- **Styling**: Global styles in `src/styles/global.css` with Tailwind utilities and custom component classes

### Styling System
- Tailwind CSS with custom component classes defined in `global.css`
- Button components: `.btn-primary` (pink filled) and `.btn-secondary` (pink outline)
- Card hover effects: `.card-hover` class for interactive elements
- Color scheme: Pink primary (`pink-600`) with purple accents, gray text
- Responsive design with mobile-first approach using Tailwind breakpoints

### Common Patterns
- Hero sections with gradient backgrounds and SVG wave dividers
- Card-based layouts for product showcases
- Mobile hamburger menu with dropdown policies section
- Sticky header with company branding and navigation