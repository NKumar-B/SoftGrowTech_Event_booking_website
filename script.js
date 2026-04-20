document.addEventListener('DOMContentLoaded', () => {
    
    // 1. THEME TOGGLE LOGIC (Light / Dark Mode)

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check memory for previous theme choice
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.textContent = '🌙'; 
    }

    // Handle toggle click (only if the button exists on the page)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙'; 
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });
    }

    // 2. FORM VALIDATION & MODAL LOGIC
   
    const form = document.getElementById('bookingForm');
    const modal = document.getElementById('confirmationModal');
    const okBtn = document.getElementById('modalOkBtn');

    // Only run this if we are currently on the booking page
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            clearErrors();

            // Gather inputs
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const eventType = document.getElementById('eventType').value;
            const date = document.getElementById('eventDate').value;
            const guests = document.getElementById('guests').value;

            let isValid = true;

            // Validation Rules
            if (name.length < 3) {
                showError('nameError', 'Name must be at least 3 characters.');
                isValid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError('emailError', 'Enter a valid email.');
                isValid = false;
            }

            if (eventType === "") {
                showError('eventError', 'Please select an event type.');
                isValid = false;
            }

            if (!date) {
                showError('dateError', 'Please select a date.');
                isValid = false;
            }

            if (guests < 1 || guests > 500) {
                showError('guestsError', 'Enter guests between 1 and 500.');
                isValid = false;
            }

            // If valid, populate and show modal
            if (isValid) {
                document.getElementById('display-name').textContent = name;
                document.getElementById('display-email').textContent = email;
                document.getElementById('display-event').textContent = eventType;
                document.getElementById('display-date').textContent = date;
                document.getElementById('display-guests').textContent = guests;

                modal.classList.remove('hidden');
            }
        });

        // Redirect to Home Page when OK is clicked
        okBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Helper functions for the form
    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    }


    // 3. SCROLL (Active Link Highlighting)

    const sections = document.querySelectorAll('section');
    
    // Select only the links that point to an ID on the same page (e.g., #home, #services)
    // Using index.html#... because the links span across pages now
    const navLinks = document.querySelectorAll('.nav-links a[href*="#"]'); 

    // Add immediate click interaction
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Only run the observer if sections exist (i.e., we are on the homepage)
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 // Triggers when 40% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Check if the link contains the current ID
                        if (link.getAttribute('href').includes(`#${currentId}`)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});