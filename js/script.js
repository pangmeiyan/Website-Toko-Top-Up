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

// Navbar scroll effect with modern animation
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


// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar-custom');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = 'background: none; border: 1px solid #fff; color: #fff; padding: 10px; cursor: pointer; font-size: 24px;';
            navbarContent.insertBefore(toggle, navbarMenu);
            
            toggle.addEventListener('click', () => {
                navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

// Fade in animation on scroll
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

// Apply animations
document.addEventListener('DOMContentLoaded', function() {
    // Pricing cards already have CSS animation, no need for JS animation

    // Animate comparison table
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        comparisonTable.style.opacity = '0';
        comparisonTable.style.transform = 'translateY(30px)';
        comparisonTable.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(comparisonTable);
    }

    // Animate CTA section
    const ctaSection = document.querySelector('.cta-content');
    if (ctaSection) {
        ctaSection.style.opacity = '0';
        ctaSection.style.transform = 'translateY(30px)';
        ctaSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(ctaSection);
    }

    // Handle responsive menu
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
});

// Hover effects for pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0px 8px 25px 8px rgba(0, 0, 0, 0.35)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0px 4px 15.3px 6px rgba(0, 0, 0, 0.25)';
    });
});

// Button click handlers
document.querySelectorAll('.btn-contact, .btn-community').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your contact form or link logic here
        console.log('Contact button clicked');
    });
});

// Comparison table toggle functionality
(function() {
    'use strict';
    
    // Global toggle function - called from onclick in HTML
    window.toggleTableCell = function(cell) {
        if (!cell) {
            console.error('No cell provided');
            return false;
        }
        
        var span = cell.querySelector('span');
        if (!span) {
            console.error('No span found in cell');
            return false;
        }
        
        // Get current state
        var currentText = span.textContent.trim();
        var isChecked = currentText === '✓';
        
        // Toggle the state
        if (isChecked) {
            // Change to cross
            span.textContent = '✗';
            span.className = 'cancel-mark';
            cell.setAttribute('data-checked', 'false');
        } else {
            // Change to checkmark
            span.textContent = '✓';
            span.className = 'check-mark';
            cell.setAttribute('data-checked', 'true');
        }
        
        // Force visibility
        span.style.display = 'inline-block';
        span.style.visibility = 'visible';
        span.style.opacity = '1';
        
        return false;
    };
    
    // Setup toggle cells with event listeners
    function setupToggleCells() {
        var cells = document.querySelectorAll('.toggle-cell');
        
        if (cells.length === 0) {
            return; // Cells not ready yet
        }
        
        cells.forEach(function(cell) {
            // Set cursor
            cell.style.cursor = 'pointer';
            
            // FORCE span to be visible - NEVER hide checkmarks
            var span = cell.querySelector('span');
            if (span) {
                // Force all styles to ensure visibility
                span.style.display = 'inline-block';
                span.style.visibility = 'visible';
                span.style.opacity = '1';
                span.style.background = '#FFFFFF';
                span.style.backgroundColor = '#FFFFFF';
                span.style.width = '28px';
                span.style.height = '28px';
                span.style.minWidth = '28px';
                span.style.minHeight = '28px';
                span.style.color = '#000000';
                span.style.fontSize = '18px';
                span.style.lineHeight = '28px';
                span.style.textAlign = 'center';
                span.style.borderRadius = '50%';
                span.style.position = 'relative';
                span.style.zIndex = '100';
            }
            
            // Add click event listener as backup (onclick in HTML is primary)
            cell.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.toggleTableCell(this);
            });
        });
    }
    
    // Initialize when DOM is ready
    function init() {
        setupToggleCells();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also initialize after window loads
    window.addEventListener('load', function() {
        setTimeout(init, 100);
    });
    
    // Retry initialization
    setTimeout(init, 200);
    setTimeout(init, 500);
    
})();

// Console log for debugging
console.log('Tokotopup.id - Landing page loaded successfully!');
