document.addEventListener('DOMContentLoaded', () => {
    function initFooterFeatures() {
        const footer = document.querySelector('footer');
        const toggleBtn = document.getElementById('toggle-footer-theme');
        const year1 = document.getElementById('year');
        const year2 = document.getElementById('year2');
        const htmlLink = document.getElementById("validation_link_html");
        const cssLink = document.getElementById("validation_link_css");
        const wcagLink = document.getElementById("validation_link_wcag");

        // Set current year
        const currentYear = new Date().getFullYear();
        if (year1) year1.textContent = currentYear;
        if (year2) year2.textContent = currentYear;

        // Validation URLs
        if (htmlLink) htmlLink.href = "https://validator.w3.org/check?uri=" + location.href;
        if (cssLink) cssLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
        if (wcagLink) wcagLink.href = "https://wave.webaim.org/report#/" + location.href;

        // Toggle footer theme
        if (toggleBtn && footer) {
            let isDarkMode = false;
            toggleBtn.addEventListener('click', () => {
                if (!isDarkMode) {
                    footer.style.backgroundColor = "#1e3d58";
                    footer.style.color = "#ffffff";
                } else {
                    footer.style.backgroundColor = "#4a90e2";
                    footer.style.color = "#ffffff";
                }
                isDarkMode = !isDarkMode;
            });
        }

        // Hover effect on links
        const footerLinks = document.querySelectorAll('#footer-nav a');
        footerLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.color = "#ffcc00";
            });
            link.addEventListener('mouseout', () => {
                link.style.color = "";
            });
        });
    }

    // If HTMLInclude is active, wait for content load
    if (window.HTMLInclude) {
        HTMLInclude();
        setTimeout(initFooterFeatures, 400); // Wait for include to finish
    } else {
        initFooterFeatures();
    }
});