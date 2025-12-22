# Viewing Your Portfolio Locally

## Quick Start (No Jekyll Required)

### Using Python HTTP Server

1. Open Terminal and navigate to your project directory:
   ```bash
   cd /Users/ryanchrist/ryanjchrist.github.io
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### Using Node.js (if you have it installed)

1. Install a simple HTTP server globally:
   ```bash
   npm install -g http-server
   ```

2. Navigate to your project directory and run:
   ```bash
   http-server -p 8000
   ```

3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

## Notes

- **CSS is compiled**: The SCSS has been compiled to `assets/css/main.css` - no build step needed!
- **Static HTML**: View HTML files directly (index.html, about.html, projects.html, etc.)
- **Images**: Loaded from the `assets/images/` directory
- **Refresh**: Just refresh your browser to see changes after editing files

## Making Changes

- Edit HTML files directly for content and structure
- Edit `assets/css/main.css` for styling (or edit SCSS files in `_sass/` and recompile if you have a Sass compiler)
- Refresh your browser to see changes

## Important

Since this is a Jekyll site, some pages may use Liquid templating that won't work with a static server. For full functionality including dynamic content, you'd need Jekyll, but for viewing the styling and basic structure, the static server works fine.

