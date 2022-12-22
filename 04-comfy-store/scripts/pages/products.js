import '../toggleSidebar.js';
import '../toggleCart.js';
import '../setupCart.js';
import { fixedNavbar } from '../navbar.js';
import { get } from '../utils.js';
import { fetchProducts } from '../fetchProducts.js';
import { store, setupStore } from '../store.js';
import { displayProducts } from '../displayProducts.js';
import { setupSearch, setupCompanies, setupPrice } from '../filters.js';

fixedNavbar();

async function init() {
    if (store.length === 0) {
        const products = await fetchProducts();
        if (products) {
            setupStore(products);
            displayProducts(store, get('.products-container'));
        }
    } else {
        displayProducts(store, get('.products-container'));
    }
    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
}

init();
