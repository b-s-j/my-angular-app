document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId); // Using querySelector for robustness
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero Section Text Animation (Simple JS-driven fade-in for now, can be CSS)
    // This will be a simple opacity change on load.
    // For a true character-by-character typing effect, more complex logic is needed.
    const heroH2 = document.querySelector('#hero h2');
    if (heroH2) {
        heroH2.style.opacity = '0';
        setTimeout(() => {
            heroH2.style.transition = 'opacity 0.8s ease-in-out';
            heroH2.style.opacity = '1';
        }, 100); // Slight delay to ensure CSS transition applies
    }
    
    // Scroll Animations (Fade-in Elements - Intersection Observer)
    const scrollAnimatedElements = document.querySelectorAll('.hidden-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden-on-scroll');
                    entry.target.classList.add('visible-on-scroll');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        scrollAnimatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        scrollAnimatedElements.forEach(el => {
            el.classList.remove('hidden-on-scroll');
            el.classList.add('visible-on-scroll'); // Or just make them visible directly
        });
    }

    // Basic Contact Form Validation Feedback
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Reset errors
            [nameInput, emailInput, messageInput].forEach(input => {
                if(input) input.classList.remove('input-error');
            });

            if (nameInput && nameInput.value.trim() === '') {
                nameInput.classList.add('input-error');
                isValid = false;
            }
            if (emailInput && emailInput.value.trim() === '') {
                emailInput.classList.add('input-error');
                isValid = false;
            } else if (emailInput && !emailInput.value.includes('@')) { // Simple email format check
                emailInput.classList.add('input-error');
                isValid = false;
            }
            if (messageInput && messageInput.value.trim() === '') {
                messageInput.classList.add('input-error');
                isValid = false;
            }

            if (isValid) {
                console.log('Form submitted (simulated)');
                // Here you would typically send the form data to a server
                contactForm.reset(); // Clear the form
            } else {
                console.log('Form validation failed.');
            }
        });
    }
});
