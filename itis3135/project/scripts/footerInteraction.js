// scripts/footerInteraction.js
document.addEventListener('DOMContentLoaded', () => {
    function initFooterFeatures() {
        // Update dynamic years
        const currentYear = new Date().getFullYear();
        document.getElementById("year").textContent = currentYear;
        document.getElementById("year2").textContent = currentYear;

        // Update validation links
        document.getElementById("validation_link_html").href = "https://validator.w3.org/check?uri=" + location.href;
        document.getElementById("validation_link_css").href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
        document.getElementById("validation_link_wcag").href = "https://wave.webaim.org/report#/" + location.href;

        // Toggle dark mode class on <body>
        const toggleBtn = document.getElementById("toggle-footer-theme");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
            });
        }

        // Hover effect for footer links
        document.querySelectorAll("#footer-nav a").forEach(link => {
            link.addEventListener("mouseover", () => link.style.color = "#ffcc00");
            link.addEventListener("mouseout", () => link.style.color = "");
        });
    }

    // Delay for HTML includes to load
    if (window.HTMLInclude) {
        HTMLInclude();
        setTimeout(initFooterFeatures, 300);
    } else {
        initFooterFeatures();
    }
});
