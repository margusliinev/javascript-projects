import '../toggleSidebar.js';
import '../toggleCart.js';
import { fetchProducts } from '../fetchProducts.js';

async function init() {
    const data = await fetchProducts();
    console.log(data);
}

window.addEventListener('DOMContentLoaded', init);
