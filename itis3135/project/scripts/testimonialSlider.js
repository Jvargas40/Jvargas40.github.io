// testimonialSlider.js
// Rotates testimonials every 6 seconds and allows manual navigation

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Auto-rotate every 6 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 6000);

    showTestimonial(currentIndex);
});