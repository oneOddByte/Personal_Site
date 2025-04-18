document.addEventListener('DOMContentLoaded', function () {
    // Add checkboxes to all h3 and h4 elements
    const headings = document.querySelectorAll('h3, h4');

    headings.forEach((heading, index) => {
        // Create a unique ID for each heading
        const headingId = `heading-${index}`;
        heading.id = headingId;

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'topic-checkbox';
        checkbox.id = `checkbox-${headingId}`;

        // Load saved state from localStorage
        const isChecked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = isChecked;

        // Apply completed class if checked
        if (isChecked) {
            heading.classList.add('completed');
        }

        // Add event listener to save state when checkbox changes
        checkbox.addEventListener('change', function () {
            localStorage.setItem(this.id, this.checked);

            if (this.checked) {
                heading.classList.add('completed');
            } else {
                heading.classList.remove('completed');
            }
        });

        // Add special highlighting for certain topics
        const headingText = heading.textContent.toLowerCase();
        if (
            headingText.includes('gram-schmidt') ||
            headingText.includes('qr decomp') ||
            headingText.includes('linear transformation')
        ) {
            heading.classList.add('highlight');
        }

        // Insert checkbox before heading text
        heading.prepend(checkbox);
    });
});
