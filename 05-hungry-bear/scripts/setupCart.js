import { getStorageItem, setStorageItem } from './utils.js';

let cart = getStorageItem('cart');

function setupCart() {
    setStorageItem('cart', cart);
}

export { setupCart, cart };
