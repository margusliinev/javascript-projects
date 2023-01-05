import { get, getStorageItem, setStorageItem } from './utils.js';
import { menu } from './data.js';

let cart = getStorageItem('cart');
const cartItems = get('.cart-items');

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
        addToCartDOM(product);
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

function addToCartDOM(product) {
    const { id, title, img, price, amount } = product;
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);
    article.innerHTML = `<img src="${img}" class="cart-item-img" alt="${title}" />
                        <div>
                            <h4 class="cart-item-name">${title}</h4>
                            <p class="cart-item-price">$${price}</p>
                            <button class="cart-item-remove-btn" data-id="${id}">remove</button>
                        </div>
                        <div>
                            <button class="cart-item-increase-btn" data-id="${id}">
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <p class="cart-item-amount" data-id="${id}">${amount}</p>
                            <button class="cart-item-decrease-btn" data-id="${id}">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>`;
    cartItems.append(article);
}

function displayAllCartItems() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
}

displayAllCartItems();

export { setupCart, addToCart, addToCartDOM };
