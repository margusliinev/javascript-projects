import { get } from './get.js';

const cart = get('.cart-overlay');
const cartBtn = get('.toggle-cart');
const cartCloseBtn = get('.cart-close');

cartBtn.addEventListener('click', () => cart.classList.add('show'));
cartCloseBtn.addEventListener('click', () => cart.classList.remove('show'));
