(() => {
    const elements = document.querySelectorAll(
        '.animate-on-scroll, .animate-fade-up, .animate-fade-in, .animate-scale-in, .reveal'
    );

    if (!('IntersectionObserver' in window)) {
        elements.forEach(element => {
            element.classList.add('visible', 'is-visible', 'animate-start');
        });

        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        'visible',
                        'is-visible',
                        'animate-start'
                    );

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });
})();


document.querySelectorAll('.policy-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));

        if (!target) {
            return;
        }

        event.preventDefault();

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            (window.innerHeight / 2) +
            (target.offsetHeight / 2);

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});