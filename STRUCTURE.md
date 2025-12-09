# Portfolio Site Structure

## Current Structure

This portfolio site has been restructured from Jekyll to a clean HTML/CSS/JavaScript setup.

### Main Files (Root)
- `index.html` - Home page
- `about.html` - About page
- `experience.html` - Experience timeline
- `projects.html` - Projects listing page
- `skills.html` - Skills page
- `contact.html` - Contact page
- `styles.css` - Main stylesheet
- `script.js` - Main JavaScript file

### Projects Directory
- `projects/` - Contains individual project detail pages:
  - `altimeter.html` - Altimeter System project
  - `cpsl.html` - Cyber-Physical Systems Lab project
  - `drone-noise-analysis.html` - Drone Noise Analysis project
  - `3d-printing.html` - 3D Printing Projects
  - `prototyping.html` - Prototyping Projects
  - `rock-relocation.html` - Rock Relocation Solution
  - `rjchrist-website.html` - RJ Christ Website
  - `centrifugal-pump.html` - Centrifugal Pump Support System

### Assets
- `assets/images/` - All project images and photos
- `assets/css/` - Additional CSS files (if needed)
- `assets/js/` - Additional JavaScript files (if needed)

### Legacy Files (Jekyll)
The following directories contain old Jekyll files that are no longer used but kept for reference:
- `_posts/` - Old Jekyll blog posts
- `_layouts/` - Old Jekyll layouts
- `_includes/` - Old Jekyll includes
- `_sass/` - Old Jekyll Sass files
- `_data/` - Old Jekyll data files
- `_config.yml` - Old Jekyll configuration

These can be archived or removed if you no longer need them.

## Viewing Locally

Run a local server:
```bash
python3 -m http.server 8001
```

Then open: http://localhost:8001

## Adding New Projects

1. Create a new HTML file in `projects/` directory
2. Add project card to `projects.html`
3. Add images to `assets/images/` if needed
4. Link from `projects.html` to your new project page

