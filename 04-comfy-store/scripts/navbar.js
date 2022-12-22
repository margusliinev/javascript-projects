import { get } from './utils.js';

const navbar = get('.navbar');
const navLogo = get('.nav-logo');
const cartBtn = get('.toggle-cart');
const navLinks = document.querySelectorAll('.nav-links a');

function fixedNavbar() {
    window.addEventListener('scroll', function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if (scrollHeight > navHeight) {
            navbar.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('fixed-nav');
        }
    });
}

function fixedNavbarColor() {
    window.addEventListener('scroll', function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if (scrollHeight > navHeight) {
            navbar.classList.add('fixed-nav');
            navLogo.src = './images/logo-black.svg';
            cartBtn.style.color = 'black';
            navLinks.forEach(function (link) {
                link.style.color = 'var(--colorGrey-1)';
            });
        } else {
            navbar.classList.remove('fixed-nav');
            navLogo.src = './images/logo-white.svg';
            cartBtn.style.color = 'var(--colorWhite)';
            navLinks.forEach(function (link) {
                link.style.color = 'var(--colorWhite)';
            });
        }
    });
}

export { fixedNavbar, fixedNavbarColor };
