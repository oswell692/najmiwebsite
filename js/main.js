
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}


let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-xl', 'py-2');
        navbar.classList.remove('shadow-lg', 'py-4');
    } else {
        navbar.classList.add('shadow-lg', 'py-4');
        navbar.classList.remove('shadow-xl', 'py-2');
    }
    
    lastScroll = currentScroll;
});


const counters = document.querySelectorAll('.counter');
let animated = false;

function animateCounters() {
    if (animated) return;
    
    const triggerBottom = window.innerHeight * 0.8;
    
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        
        if (rect.top < triggerBottom) {
            animated = true;
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        }
    });
}

window.addEventListener('scroll', animateCounters);
animateCounters();


const scrollTopBtn = document.createElement('div');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Form submitted successfully!');
        form.reset();
    });
});


const subscribeBtn = document.querySelector('.bg-white.text-blue-600');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert(`Thanks for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}


AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});