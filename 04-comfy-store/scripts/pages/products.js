import '../toggleSidebar.js';
import '../toggleCart.js';
import { get } from '../utils.js';
import { fetchProducts } from '../fetchProducts.js';
import { store, setupStore } from '../store.js';
import { displayProducts } from '../displayProducts.js';
import { setupSearch, setupCompanies, setupPrice } from '../filters.js';

async function init() {
    const products = await fetchProducts();
    if (products) {
        setupStore(products);
        displayProducts(store, get('.products-container'));
    }
}

if (store.length === 0) {
    init();
} else {
    displayProducts(store, get('.products-container'));
}

setupSearch(store);
setupCompanies(store);
