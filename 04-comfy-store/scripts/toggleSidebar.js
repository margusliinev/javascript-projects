import { get } from './get.js';

const sidebar = get('.sidebar-overlay');
const navBtn = get('.toggle-nav');
const closeBtn = get('.sidebar-close');

navBtn.addEventListener('click', () => sidebar.classList.add('show'));
closeBtn.addEventListener('click', () => sidebar.classList.remove('show'));
