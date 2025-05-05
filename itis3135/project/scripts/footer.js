// Update year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
document.getElementById("year2").textContent = currentYear;

// Validation links
document.getElementById("validation_link_html").setAttribute("href","https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
document.getElementById("validation_link_wcag").setAttribute("href", "https://wave.webaim.org/report#/" + location.href);

// Toggle footer theme
const footer = document.querySelector('footer');
const toggleBtn = document.getElementById('toggle-footer-theme');
if (footer && toggleBtn) {
    let isDefaultTheme = true;

    toggleBtn.addEventListener('click', () => {
        if (isDefaultTheme) {
            footer.style.backgroundColor = '#1e3d58';
            footer.style.color = '#ffffff';
        } else {
            footer.style.backgroundColor = '#4a90e2';
            footer.style.color = '#ffffff';
        }
        isDefaultTheme = !isDefaultTheme;
    });
}

// Hover color change on nav links
const footerLinks = document.querySelectorAll('#footer-nav a');
footerLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#ffcc00";
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "";
    });
});