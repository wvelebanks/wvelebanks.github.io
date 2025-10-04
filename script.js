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

// for Analytics purposes
document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('javascript:') || href.startsWith('#')) return;

    const linkUrl = new URL(href, window.location.origin);
    const currentHost = window.location.host;

    // Only track internal links
    if (linkUrl.host === currentHost) {
      gtag('event', 'internal_link_click', {
        event_category: 'Navigation',
        event_label: linkUrl.pathname,
        page_location: window.location.href
      });
    }
  });
});

