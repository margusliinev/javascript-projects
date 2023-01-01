import { get } from './utils.js';

const sidebarBtn = get('.sidebar-btn');
const sidebarOverlay = get('.sidebar-overlay');
const sidebarClose = get('.sidebar-close');

const cartBtn = get('.cart-btn');
const cartOverlay = get('.cart-overlay');
const cartClose = get('.cart-close');

sidebarBtn.addEventListener('click', () => sidebarOverlay.classList.add('show'));
sidebarClose.addEventListener('click', () => sidebarOverlay.classList.remove('show'));
cartBtn.addEventListener('click', () => cartOverlay.classList.add('show'));
cartClose.addEventListener('click', () => cartOverlay.classList.remove('show'));
