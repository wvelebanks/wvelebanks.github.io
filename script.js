// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    console.log("Page loaded.");

    // Smooth scroll for nav links
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
    });

    // Optional welcome button
    const welcomeButton = document.createElement('button');
   // welcomeButton.textContent = 'Click Me for a Welcome Message!';
    document.querySelector('main').appendChild(welcomeButton);
    welcomeButton.style.display = 'block';
    welcomeButton.style.margin = '30px auto';
    document.body.appendChild(welcomeButton);

    welcomeButton.addEventListener('click', function () {
        alert('Welcome to your dynamic website! 🎉');
    });
});
