import { get } from './utils.js';

const sidebarLinks = [...document.querySelectorAll('.sidebar-link')];

const sidebarBtn = get('.sidebar-btn');
const sidebarOverlay = get('.sidebar-overlay');
const sidebarClose = get('.sidebar-close');

const cartBtn = get('.cart-btn');
const cartOverlay = get('.cart-overlay');
const cartClose = get('.cart-close');

function compare(title, target) {
    if (document.title.toLowerCase().includes(title) && target.textContent === title) {
        target.style.borderBottom = '2px solid var(--colorVeryDarkBrown)';
    }
}

sidebarLinks.forEach((link) => {
    compare(link.textContent, link);
});

window.matchMedia('(min-width: 800px)').addEventListener('change', function () {
    sidebarOverlay.classList.remove('show');
});

sidebarBtn.addEventListener('click', () => sidebarOverlay.classList.add('show'));
sidebarClose.addEventListener('click', () => sidebarOverlay.classList.remove('show'));
cartBtn.addEventListener('click', () => cartOverlay.classList.add('show'));
cartClose.addEventListener('click', () => cartOverlay.classList.remove('show'));
