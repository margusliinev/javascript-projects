import '../toggleSidebar.js';
import '../toggleCart.js';
import { fetchProducts } from '../fetchProducts.js';
import { setupStore } from '../store.js';

async function init() {
    const products = await fetchProducts();
    if (products) {
        setupStore(products);
    }
}

window.addEventListener('DOMContentLoaded', init);
