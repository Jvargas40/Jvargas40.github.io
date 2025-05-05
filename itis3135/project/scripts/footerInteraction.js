// footerInteraction.js
// This JS ensures footer dynamic interactions work across all pages

document.addEventListener('DOMContentLoaded', () => {
    // Update year dynamically
    const currentYear = new Date().getFullYear();
    const yearSpan1 = document.getElementById("year");
    const yearSpan2 = document.getElementById("year2");
    if (yearSpan1) yearSpan1.textContent = currentYear;
    if (yearSpan2) yearSpan2.textContent = currentYear;

    // Update validation links
    const htmlValidator = document.getElementById("validation_link_html");
    const cssValidator = document.getElementById("validation_link_css");
    const wcagValidator = document.getElementById("validation_link_wcag");

    const currentURL = location.href;
    if (htmlValidator) htmlValidator.setAttribute("href", "https://validator.w3.org/check?uri=" + currentURL);
    if (cssValidator) cssValidator.setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + currentURL);
    if (wcagValidator) wcagValidator.setAttribute("href", "https://wave.webaim.org/report#/" + currentURL);

    // Footer theme toggle
    const footer = document.querySelector('footer');
    const toggleBtn = document.getElementById('toggle-footer-theme');
    let isDefaultTheme = true;

    if (toggleBtn && footer) {
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
});
