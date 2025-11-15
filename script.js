
// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth scrolling for the "JOIN NOW" button
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();
        
        // Get the target element (the signup section)
        const targetId = ctaButton.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll smoothly to the target
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // 2. Handle the signup form submission
    const signupForm = document.getElementById('signup-form');
    const formMessage = document.getElementById('form-message');

    signupForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting to a server (for this demo)
        e.preventDefault();

        // Get the values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simple validation check
        if (name === '' || email === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'yellow';
            return;
        }

        // Simulate a successful submission
        console.log('Form Submitted:', { name, email });

        // Show a success message to the user
        formMessage.textContent = `Thank you, ${name}! A confirmation has been sent to ${email}.`;
        formMessage.style.color = 'white';

        // Clear the form fields
        signupForm.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });

});