// sidebarInteraction.js
// Adds interactivity to Clifford Favors' sidebar

document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "“Strategic clarity is the first step to mitigating cost.”",
        "“Risk management isn't just insurance — it's strategic foresight.”",
        "“The right coverage today saves you from crisis tomorrow.”",
        "“Knowledge transforms risk into opportunity.”"
    ];

    let quoteIndex = 0;
    const quoteText = document.getElementById('quote-text');

    function rotateQuotes() {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quoteText.textContent = quotes[quoteIndex];
    }

    setInterval(rotateQuotes, 10000); // change every 10 seconds

    const toggleSpotlight = document.getElementById('toggle-spotlight');
    const spotlightText = document.getElementById('spotlight-text');
    toggleSpotlight.addEventListener('click', () => {
        spotlightText.style.display = spotlightText.style.display === 'none' ? 'block' : 'none';
    });

    const toggleFastFact = document.getElementById('toggle-fastfact');
    const fastfactText = document.getElementById('fastfact-text');
    toggleFastFact.addEventListener('click', () => {
        fastfactText.style.display = fastfactText.style.display === 'none' ? 'block' : 'none';
    });

    const hoverLinks = document.querySelectorAll('.hover-link');
    hoverLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = "#4a90e2";
            link.style.textDecoration = "underline";
        });
        link.addEventListener('mouseout', () => {
            link.style.color = "";
            link.style.textDecoration = "none";
        });
    });
});