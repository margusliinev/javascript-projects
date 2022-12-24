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

function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element found`);
    }
}

function formatPrice(price) {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2));
    return formattedPrice;
}

function getStorageItem(item) {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }
    return storageItem;
}

function setStorageItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
}

export { get, formatPrice, getStorageItem, setStorageItem, fixedNavbar, fixedNavbarColor };
