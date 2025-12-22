# Adding New Projects

This portfolio is built with pure HTML and CSS, modeled after Duke Pratt engineering portfolio examples. The structure emphasizes technical detail, clear methodology, and professional presentation.

## Quick Start

1. **Open `projects.html`** in your code editor
2. **Find the relevant tag section** (e.g., `#electronics`, `#cad`, `#drones`)
3. **Add a new project card** following this template:

```html
<article class="project-card">
    <div class="project-card__meta">
        <span class="pill">Month YYYY</span>
    </div>
    <h3><a href="projects/your-project.html">Project Title</a></h3>
    <p class="project-card__desc">
        Brief description of your project (1-2 sentences, ~140 characters).
    </p>
    <div class="project-card__tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</article>
```

4. **Update the tag count** in the tag summary at the top of the page
5. **Add the project to the home page** (`index.html`) if you want it featured
6. **Create the project detail page** using the template (see below)

## Creating a Project Detail Page

**Use the template file**: Copy `projects/PROJECT_TEMPLATE.html` and rename it to your project name.

### Project Page Structure (Based on Duke Pratt Examples)

The template includes these sections, which are standard for engineering portfolios:

1. **Project Header**
   - Title, date, tags
   - Back link to projects page

2. **Hero Image**
   - Large, high-quality image showcasing the project

3. **Context Section**
   - Problem statement
   - Background and motivation
   - Why this project matters

4. **Design & Approach**
   - Overall design philosophy
   - Key design decisions
   - Conceptual approach

5. **Technical Implementation**
   - Specific technologies and tools
   - Methodology and procedures
   - Key technical challenges and solutions
   - Implementation details

6. **Results & Outcomes**
   - Quantitative metrics
   - Performance improvements
   - What you learned

7. **Key Achievements**
   - Bulleted list of specific accomplishments
   - Measurable results

8. **Sidebar** (Right column)
   - Technologies used
   - Key metrics
   - Duration
   - Your role
   - Links (GitHub, documentation, etc.)

9. **Gallery**
   - Multiple images showcasing different aspects
   - Process photos, final results, technical details

### Example Sections to Fill In

```html
<h2>Context</h2>
<p>
    Explain the problem or challenge. Why was this project important?
    What motivated you to work on it?
</p>

<h2>Design & Approach</h2>
<p>
    Describe your overall approach. What were the key design decisions?
    Include any conceptual sketches or diagrams if relevant.
</p>

<h2>Technical Implementation</h2>
<p>
    Detail the technical aspects:
</p>
<ul>
    <li>Technologies, tools, and methodologies</li>
    <li>Key algorithms or techniques</li>
    <li>Hardware/software components</li>
</ul>

<h3>Key Technical Challenges</h3>
<p>
    Discuss challenges and how you solved them.
</p>

<h2>Results & Outcomes</h2>
<p>
    Present quantitative results. Include metrics like performance 
    improvements, accuracy measurements, efficiency gains.
</p>
```

### Tips for Writing Project Pages

- **Be specific**: Include numbers, metrics, and concrete details
- **Show your process**: Explain how you approached problems
- **Highlight challenges**: Discuss problems you solved
- **Use visuals**: Include diagrams, photos, and screenshots
- **Quantify results**: Use specific metrics when possible
- **Be concise**: Keep paragraphs focused and readable

## Adding New Tags

If you need a new tag category:

1. Add a new tag chip in the tag summary section
2. Create a new section with the tag ID (e.g., `id="your-tag"`)
3. Follow the same structure as existing tag sections

## Previewing

Simply open any HTML file in your browser. All pages are standalone and don't require a server.

## Design Notes

- Keep descriptions concise (140-150 characters for cards)
- Use consistent date formatting (e.g., "Oct 2024")
- Tags should be short and descriptive
- Images should be placed in `assets/images/`
