// Skills tab navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.skill-tab');
    const skillGrids = document.querySelectorAll('.skills-grid');
    const allSkillsGrid = document.querySelector('.all-skills');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Show/hide skill grids based on category
            skillGrids.forEach(grid => {
                if (category === 'all') {
                    // Show all skills grid, hide category grids
                    if (grid.classList.contains('all-skills')) {
                        grid.style.display = 'grid';
                    } else {
                        grid.style.display = 'none';
                    }
                } else {
                    // Hide all skills grid, show only selected category
                    if (grid.classList.contains('all-skills')) {
                        grid.style.display = 'none';
                    } else {
                        const gridCategory = grid.getAttribute('data-category');
                        grid.style.display = gridCategory === category ? 'grid' : 'none';
                    }
                }
            });
        });
    });
});
