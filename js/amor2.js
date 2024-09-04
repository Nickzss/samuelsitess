document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.section');

    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
