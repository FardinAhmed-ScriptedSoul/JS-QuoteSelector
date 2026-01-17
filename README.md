# JS-QuoteSelector

A small, professional, responsive web app that demonstrates modern DOM manipulation and fluid UI design by generating and displaying quotes dynamically.

## Table of contents
- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech & Concepts](#tech--concepts)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Development](#development)
- [Accessibility & Browser Support](#accessibility--browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview
JS-QuoteSelector is a minimal quote generator built using plain HTML, CSS and JavaScript. It focuses on clean UI (glassmorphism), responsive layout using `clamp()` and media queries, and DOM techniques such as selection, event handling, and dynamic rendering without page reloads.

## Demo
Open `index.html` in a modern browser to run the app locally. (If the app fetches remote data or modules, serve via a local HTTP server — instructions below.)

## Features
- Dynamic content rendering (update the DOM without reloads)
- Responsive design using `clamp()` and media queries
- Glassmorphism UI using `backdrop-filter` and CSS variables
- Random quote selection powered by `Math.random()`
- Keyboard- and pointer-friendly controls (where applicable)

## Tech & Concepts
- HTML5 (semantic markup)
- CSS3 (custom properties, `backdrop-filter`, responsive utilities)
- Vanilla JavaScript
  - DOM selection with `querySelector` / `querySelectorAll`
  - Event handling with `addEventListener`
  - Randomization with `Math.random()`

## Project structure
(Adjust filenames if your project uses different names.)
- index.html — App entry point and markup
- css/
  - styles.css — Main styles (glassmorphism, layout, responsive rules)
- js/
  - main.js — DOM logic and quote-selection code
- README.md — This file

## Getting started

### Prerequisites
A modern web browser (Chrome, Firefox, Edge, Safari). If you want to serve files over HTTP (recommended for certain features):

- Python 3: `python -m http.server 8000`
- Node (http-server): `npx http-server -c-1`

### Run locally
1. Clone the repository:
   git clone https://github.com/FardinAhmed-ScriptedSoul/JS-QuoteSelector.git
2. Open the project folder:
   cd JS-QuoteSelector
3. Open `index.html` in your browser, or run a local server and go to `http://localhost:8000`.

## Usage
- Click the "New Quote" (or similar) button to display a random quote.
- Quote text updates are handled client-side—no page reload.
- (Optional) Add or modify the quotes array in `js/main.js` to customize content.

## Development
- Keep JavaScript modular and avoid global variables where possible.
- Use semantic HTML for better accessibility.
- Use CSS custom properties for easy theming.
- If adding features that require network requests, prefer fetch and handle errors gracefully.

## Accessibility & Browser Support
- Ensure interactive elements are focusable and keyboard-operable.
- Provide adequate color contrast for text over glassmorphism backgrounds.
- The app targets evergreen browsers that support `backdrop-filter`. Provide graceful fallback for browsers that don't support it (e.g., use a semi-transparent background).

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push and open a pull request

Please follow standard commit message practices and include a short description of your change.

## License
No license specified in this repository. If you want to make this project open source, add a `LICENSE` file (for example, MIT).

## Author
Fardin Ahmed (FardinAhmed-ScriptedSoul)

## Acknowledgements
- Design inspiration from glassmorphism examples
- JavaScript fundamentals inspired by MDN web docs