// expandServices.js
// Highlights the currently expanded service section dynamically

document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');

    details.forEach(detail => {
        detail.addEventListener('toggle', () => {
            details.forEach(d => d.classList.remove('active-service'));
            if (detail.open) {
                detail.classList.add('active-service');
            }
        });
    });
});