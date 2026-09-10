# LifeClinique

A concept homepage for **LifeClinique**, a fictional health clinic based in Viseu, Portugal. This project is a front-end design exercise built to explore how far pure HTML and CSS can go without relying on JavaScript or any framework.

## About the project

LifeClinique started as a personal exploration of layout, motion-free interactivity and visual identity. The goal was to design a single-page clinic website that feels calm, organic and a little unconventional, while staying entirely dependency-free: no JavaScript, no build tools, no external UI libraries.

Everything — navigation between sections, the testimonials carousel, and the schedule chart — is driven purely by CSS, using the checked-state sibling-selector technique. There is also no page-level scrolling anywhere in the desktop layout: every panel is designed to fit the viewport exactly, using fluid `clamp()`-based sizing rather than fixed pixel values.

## Highlights

- **Pure HTML5 + CSS3.** No JavaScript, no frameworks, no build step — just open `index.html` in a browser.
- **Click-only navigation.** A fixed icon sidebar switches between sections instantly, implemented entirely with hidden radio inputs and CSS sibling combinators.
- **Zero-scroll layout.** Each section is sized to fit the viewport using `clamp()` for spacing and typography, so content adapts gracefully to different screen heights instead of overflowing.
- **CSS-only testimonials carousel.** A rotating set of client testimonials with dot navigation, no JavaScript involved.
- **CSS-only schedule chart.** Weekly opening hours are visualised as a bar chart, with each bar's height driven by a CSS custom property.
- **Custom visual identity.** A bespoke logo (badge, heart and leaf-vein motif), an organic "leaf-cut" shape language applied to buttons, cards and icons, and a typeface pairing of Fraunces, Poppins and Nunito Sans.
- **Fully responsive.** The layout adapts from a fixed left sidebar on desktop down to a bottom icon dock on mobile, keeping the same click-only navigation at every breakpoint.

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, `clamp()`, sibling combinators)
- Google Fonts (Fraunces, Poppins, Nunito Sans)
- No JavaScript, no frameworks, no build tools

## Project structure

```
Clinica_NovaVida/
├── index.html          # Page markup and content
├── css/
│   └── style.css        # All styling, layout and CSS-only interactivity
└── README.md
```

## Running it locally

No installation or build step is required. Simply clone or download the repository and open `index.html` in any modern browser:

```bash
git clone <repository-url>
cd Clinica_NovaVida
open index.html   # or double-click the file
```

## Disclaimer

LifeClinique is a fictional brand created for design and front-end development purposes. Any resemblance to real clinics, healthcare providers or businesses is purely coincidental. No real medical services are offered.

## License

© LifeClinique. All rights reserved.

This repository is public for viewing purposes only, as part of a personal portfolio. No permission is granted to copy, reuse, modify, distribute or otherwise use any part of this code, design or content without prior written consent from the author.
