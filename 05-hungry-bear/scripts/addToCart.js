import { setStorageItem, getStorageItem } from './utils.js';
import { menu } from './data.js';
import { cart } from './setupCart.js';

function findProduct(id) {
    let product = menu.find((product) => product.id === parseInt(id));
    return product;
}

function addToCart(id) {
    let product = findProduct(id);
    cart.push(product);
    setStorageItem('cart', cart);
}

export { addToCart };
