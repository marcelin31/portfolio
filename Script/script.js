// script.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});


const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => {
    alert('Merci de vouloir me contacter !');
});

// Application du thème sombre et clair
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Changer l'icône en fonction du thème
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-sun'); 
            icon.classList.add('fa-moon'); 
        } else {
            icon.classList.remove('fa-moon'); 
            icon.classList.add('fa-sun'); 
        }
    });
}


window.addEventListener('load', () => {
    const loader = document.getElementById('loader'); 
    loader.style.display = 'none'; 
});

// menu responsive
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active'); // Bascule la classe active
    });
}