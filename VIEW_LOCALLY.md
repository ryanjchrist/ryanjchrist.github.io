# Viewing Your Portfolio Locally

## Quick Start

### Option 1: Python HTTP Server (Recommended)

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

### Option 2: Using Node.js (if you have it installed)

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

## Making Changes

- Edit `index.html` for content and structure
- Edit `styles.css` for styling and design
- Edit `script.js` for interactivity
- Refresh your browser to see changes

## Notes

- The server will automatically reload when you refresh the page
- Images are loaded from the `assets/images/` directory
- Make sure all file paths are correct relative to the root directory

