<div align="center">

# Inkfolio — Hand-Drawn Developer Portfolio

<p>A hand-drawn portfolio built with HTML, CSS, and JavaScript.</p>

</div>

<p align="center">
  A creative developer portfolio built with pure HTML, CSS, and JavaScript — where hand-drawn illustrations, ink-inspired animations, and thoughtful interactions bring a personal touch to the web.
</p>

---

## Overview

**Inkfolio** is a single-page developer portfolio designed around the idea of turning a traditional portfolio into a digital sketchbook.

Instead of relying on generic layouts and conventional UI patterns, it uses an ink-on-paper aesthetic, custom SVG illustrations, rough hand-drawn borders, and animated strokes to create a distinctive visual identity.

The entire experience is built with vanilla HTML, CSS, and JavaScript, without requiring a frontend framework or build tools.

## Features

- **Hand-Drawn Visual Identity** — Sketch-inspired illustrations, ink textures, irregular borders, and a paper-like background.
- **Animated SVG Artwork** — Draw-on effects, animated details, and illustrations that reveal themselves as you scroll.
- **Responsive Layout** — Adaptive sections and navigation for desktop, tablet, and mobile screens.
- **Dynamic Portfolio Content** — Update personal information, skills, projects, and social links from a centralized JavaScript configuration.
- **About Section** — Introduce the developer, share a personal statement, and display quick facts.
- **Skills Showcase** — Present technical skills using custom brush-stroke illustrations.
- **Project Gallery** — Display projects with hand-drawn previews, technology tags, descriptions, and external links.
- **Contact Form** — Validate contact details and prepare a message in the visitor's default email application.
- **Email Copy Button** — Copy the configured email address to the clipboard.
- **Interactive Navigation** — Mobile menu, active-section indicators, smooth scrolling, and a scroll-aware header.
- **Accessibility Considerations** — Keyboard focus indicators, descriptive labels, reduced-motion support, and a skip-to-content link.
- **Lightweight Architecture** — No framework, package installation, or compilation required.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- SVG Illustrations and Animations
- Google Fonts
- Intersection Observer API
- Clipboard API
- Responsive Web Design

## Project Structure

```text
Inkfolio/
├── index.html
├── README.md
└── Preview.png
```

## Getting Started

No installation or build process is needed.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Inkfolio.git
```

### 2. Open the project

```bash
cd Inkfolio
```

Open `index.html` directly in your browser, or use the Live Server extension in Visual Studio Code for local development.

### 3. Customize the portfolio

Find the `SITE` configuration object near the end of `index.html`.

Update the relevant fields to personalize the portfolio:

- Name and professional title
- Introduction and personal statement
- Contact email and availability
- Skills and tools
- Projects, descriptions, and technologies
- GitHub, LinkedIn, and other social links

The page automatically renders these details throughout the portfolio.

## Customization

The design uses CSS custom properties to keep its visual style consistent.

```css
:root {
  --ink: #0c0c0c;
  --paper: #f3f1ea;
}
```

Adjust these variables to experiment with different ink and paper colors.

The typography combines EB Garamond, Kalam, and Permanent Marker to create a mix of editorial typography and handwritten accents.

## Important Notes

- Replace all placeholder personal information before publishing.
- Replace example project URLs and social links with real destinations.
- The contact form uses `mailto:` and does not send messages through a backend server.
- The portfolio references Google Fonts, so the intended typography requires an internet connection.
- For reliable GitHub Pages deployment, verify that all asset paths and links work correctly.

## </> Developer

**Developed by [Raed Mosaed](https://github.com/raedmosaed0)**

---

© 2026 Omar Nasser — drawn with ink & code.
