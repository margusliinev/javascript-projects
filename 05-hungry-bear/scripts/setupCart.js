import { getStorageItem, setStorageItem } from './utils.js';
import { menu } from './data.js';

let cart = getStorageItem('cart');

function setupCart() {
    setStorageItem('cart', cart);
}

function findProduct(id) {
    let product = menu.find((product) => product.id === parseInt(id));
    return product;
}

function addToCart(id) {
    let product = cart.find((product) => product.id === parseInt(id));
    if (!product) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
    } else {
        const amount = increaseAmount(id);
        product.amount = amount;
    }
    setStorageItem('cart', cart);
}

function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === parseInt(id)) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}

export { setupCart, addToCart };
