// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button click handlers
const primaryBtn = document.querySelector('.btn-primary');
if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        // Open invite link or redirect to Discord bot invite page
        window.open('https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=8', '_blank');
    });
}

const secondaryBtn = document.querySelector('.btn-secondary');
if (secondaryBtn) {
    secondaryBtn.addEventListener('click', () => {
        document.querySelector('#help').scrollIntoView({ behavior: 'smooth' });
    });
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all command categories and features
document.querySelectorAll('.command-category, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero background (optional)
window.addEventListener('mousemove', (e) => {
    const flowerAnimation = document.querySelector('.flower-animation');
    if (flowerAnimation) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
        flowerAnimation.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    }
});

// Simple analytics or tracking (optional)
console.log('Luna website loaded successfully!');
