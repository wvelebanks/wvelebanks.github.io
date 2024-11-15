// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Log a welcome message to the console when the page loads
    console.log("Welcome to Your Website! Page Loaded Successfully.");

    // Add event listeners to navigation links to smooth scroll to sections
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior (jumping directly)
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1); // Remove the "#" symbol
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Example of an interactive welcome message when clicking a button
    const welcomeButton = document.createElement('button');
    welcomeButton.textContent = 'Click Me for a Welcome Message!';
    document.body.appendChild(welcomeButton);

    // Show an alert when the button is clicked
    welcomeButton.addEventListener('click', function() {
        alert('Welcome to your interactive website!');
    });
});
