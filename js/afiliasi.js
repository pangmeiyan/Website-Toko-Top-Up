// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect with modern animation (same as index.html)
let ticking = false;

function updateNavbar() {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;
    
    const currentScroll = window.pageYOffset || window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}, { passive: true });

// Fade in animation on scroll for affiliate page
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate step items
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        observer.observe(item);
    });

    // Animate phone images
    const phoneImages = document.querySelectorAll('.phone-image');
    phoneImages.forEach((image, index) => {
        observer.observe(image);
    });

    // Animate how it works section elements
    const howItWorksElements = document.querySelectorAll('.how-it-works-title, .how-it-works-intro, .rules-title, .rules-list, .btn-register-affiliate');
    howItWorksElements.forEach((element) => {
        observer.observe(element);
    });
});

// Button click handlers for affiliate page
document.querySelectorAll('.btn-register-affiliate, .btn-community').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your affiliate registration or link logic here
        console.log('Affiliate button clicked');
        // You can add redirect or modal logic here
    });
});

// Phone image hover effects
document.querySelectorAll('.phone-image').forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Step item hover effects
document.querySelectorAll('.step-item').forEach(step => {
    step.addEventListener('mouseenter', function() {
        const stepNumber = this.querySelector('.step-number');
        if (stepNumber) {
            stepNumber.style.transform = 'scale(1.1)';
            stepNumber.style.transition = 'transform 0.3s ease';
        }
    });
    
    step.addEventListener('mouseleave', function() {
        const stepNumber = this.querySelector('.step-number');
        if (stepNumber) {
            stepNumber.style.transform = 'scale(1)';
        }
    });
});

// Console log for debugging
console.log('Tokotopup.id - Affiliate page loaded successfully!');

