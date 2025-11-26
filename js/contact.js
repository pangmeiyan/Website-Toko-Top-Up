// Contact Page JavaScript

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('.btn-send-modern');
    
    if (contactForm && submitButton) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!email || !name || !phone || !message) {
                showError('Mohon lengkapi semua field!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('Mohon masukkan email yang valid!');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(phone)) {
                showError('Mohon masukkan nomor HP yang valid!');
                return;
            }
            
            // Show loading animation
            showLoading();
            
            // Simulate API call (replace with actual API call)
            setTimeout(function() {
                // Show success animation
                showSuccess();
                
                // Reset form after animation
                setTimeout(function() {
                    contactForm.reset();
                    resetButton();
                }, 2000);
            }, 1500);
        });
    }
    
    // Show loading state
    function showLoading() {
        submitButton.classList.add('btn-loading');
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span><span>Mengirim...</span>';
    }
    
    // Show success state
    function showSuccess() {
        submitButton.classList.remove('btn-loading');
        submitButton.classList.add('btn-success');
        submitButton.innerHTML = '<i class="bi bi-check-circle-fill"></i><span>Pesan Terkirim!</span>';
        
        // Show success notification
        showNotification('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.', 'success');
    }
    
    // Reset button to original state
    function resetButton() {
        submitButton.classList.remove('btn-success', 'btn-loading');
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Kirim Pesan</span><i class="bi bi-send-fill ms-2"></i>';
    }
    
    // Show error notification
    function showError(message) {
        showNotification(message, 'error');
    }
    
    // Show notification
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.classList.remove('show');
            setTimeout(function() {
                existingNotification.remove();
            }, 300);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `form-notification form-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Insert notification to body (outside form)
        document.body.appendChild(notification);
        
        // Show notification after a brief delay to ensure DOM is ready
        setTimeout(function() {
            notification.classList.add('show');
        }, 10);
        
        // Hide notification after 4 seconds
        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }
    
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.btn-contact-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Navbar scroll effect (if not already handled in main script)
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
});

