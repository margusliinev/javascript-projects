import '../toggleSidebar.js';
import '../toggleCart.js';
import '../setupCart.js';
import { fixedNavbarColor } from '../navbar.js';
import { get } from '../utils.js';
import { fetchProducts } from '../fetchProducts.js';
import { store, setupStore } from '../store.js';
import { displayProducts } from '../displayProducts.js';

fixedNavbarColor();

async function init() {
    const products = await fetchProducts();
    if (products) {
        setupStore(products);
        const featured = store.filter((product) => product.featured === true);
        displayProducts(featured, get('.featured-center'));
    }
}

window.addEventListener('DOMContentLoaded', init);
