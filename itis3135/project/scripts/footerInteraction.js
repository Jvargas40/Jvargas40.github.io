document.addEventListener('DOMContentLoaded', () => {
    function initFooterFeatures() {
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

        // Update copyright year
        const yearSpan1 = document.getElementById("year");
        const yearSpan2 = document.getElementById("year2");
        const currentYear = new Date().getFullYear();
        if (yearSpan1) yearSpan1.textContent = currentYear;
        if (yearSpan2) yearSpan2.textContent = currentYear;

        // Update validator links
        const htmlLink = document.getElementById("validation_link_html");
        const cssLink = document.getElementById("validation_link_css");
        const wcagLink = document.getElementById("validation_link_wcag");

        if (htmlLink) htmlLink.href = "https://validator.w3.org/check?uri=" + location.href;
        if (cssLink) cssLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
        if (wcagLink) wcagLink.href = "https://wave.webaim.org/report#/" + location.href;
    }

    // Wait for HTML includes to be inserted before initializing footer interactions
    if (window.HTMLInclude) {
        HTMLInclude(); // Run includes
        setTimeout(initFooterFeatures, 300); // Delay to allow <footer> to be included
    } else {
        initFooterFeatures();
    }
});
