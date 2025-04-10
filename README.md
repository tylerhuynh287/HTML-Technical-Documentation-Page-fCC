# HTML Technical Documentation Page

A fully responsive and interactive HTML documentation page built with HTML5, CSS3, and vanilla JavaScript. This project is ideal for beginners and serves as both a learning tool and a clean template for documentation-style sites.

---

## Overview

This project explains core HTML concepts while showcasing front-end skills like semantic markup, interactive UI, responsive layout, and accessibility best practices.

It was originally a base-level project for freeCodeCamp but has since been expanded into a more robust documentation system.

---

## Features

### Documentation Content

- 7 main sections:
  - Introduction
  - HTML Syntax
  - Semantic/Advanced Elements
  - Forms
  - Inline vs Block Elements
  - Media & Embeds
  - Best Practices & SEO
- Rich code examples using `<pre>` + `<code>`
- Semantic HTML5 structure using `<main>`, `<section>`, `<header>`, etc.

### Interactivity (via JavaScript)

-  **Scrollspy Navigation** — Highlights the active nav item based on scroll position
-  **Collapsible Sections** — Clickable headers collapse/expand their content
-  **Dark Mode Toggle** — Button to switch themes; persists preference using localStorage
-  **Back-to-Top Button** — Appears after scroll and animates back to top
-  **Hamburger Menu** — Sidebar collapses into a mobile menu on smaller screens

### Styling

- Fully responsive (desktop, tablet, mobile)
- Custom scrollbar behavior with smooth scroll
- Light/Dark themes with proper color contrast
- Hover states and transitions for better UX

---

## Technologies Used

- **HTML5** — For semantic structure
- **CSS3** — For layout, styling, and responsive design
- **JavaScript** — For interactivity with no dependencies

---

## Project Structure

```plaintext
project-root/
├── index.html        # Main HTML documentation content
├── styles.css        # All styling (responsive + theming)
├── script.js         # JavaScript interactivity
└── README.md         # Project documentation
```

---

## Clone this repository:

```bash
   git clone https://github.com/tylerhuynh287/HTML-Technical-Documentation-Page-fCC.git
   cd HTML-Technical-Documentation-Page-fCC
   open index.html