document.addEventListener('DOMContentLoaded', () => {
    function initFooterFeatures() {
        // Dynamic year
        const currentYear = new Date().getFullYear();
        const year1 = document.getElementById("year");
        const year2 = document.getElementById("year2");
        if (year1) year1.textContent = currentYear;
        if (year2) year2.textContent = currentYear;

        // Validation links
        const htmlLink = document.getElementById("validation_link_html");
        const cssLink = document.getElementById("validation_link_css");
        const wcagLink = document.getElementById("validation_link_wcag");

        if (htmlLink) htmlLink.href = "https://validator.w3.org/check?uri=" + location.href;
        if (cssLink) cssLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
        if (wcagLink) wcagLink.href = "https://wave.webaim.org/report#/" + location.href;

        // Footer Theme Toggle
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

        // Hover effects
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

    // Delay init until footer is included
    if (window.HTMLInclude) {
        HTMLInclude();
        setTimeout(initFooterFeatures, 300);
    } else {
        initFooterFeatures();
    }
});
