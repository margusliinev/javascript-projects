import { getStorageItem, setStorageItem, formatPrice, get } from './utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from './store.js';

const cartItemCountDOM = get('.cart-item-count');
const cartItemsDOM = get('.cart-items');
const cartTotalDOM = get('.cart-total');

let cart = getStorageItem('cart');

function addToCartDOM({ id, name, price, image, amount }) {
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);
    article.innerHTML = `<img src="${image}" class="cart-item-img" alt="${name}" />
                        <div>
                            <h4 class="cart-item-name">${name}</h4>
                            <p class="cart-item-price">${formatPrice(price)}</p>
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
    cartItemsDOM.append(article);
}

function displayCartItemCount() {
    const amount = cart.reduce((total, current) => {
        return (total += current.amount);
    }, 0);
    cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
    const total = cart.reduce((total, current) => {
        return (total += current.price * current.amount);
    }, 0);
    cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function addToCart(id) {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addToCartDOM(product);
    } else {
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
        const newAmount = items.find((value) => value.dataset.id === id);
        newAmount.textContent = amount;
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
    openCart();
}

function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
}

function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}

function decreaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}

function removeCartItem(id) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
}

function setupCartFunctionality() {
    cartItemsDOM.addEventListener('click', function (e) {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id;
        if (element.classList.contains('cart-item-remove-btn')) {
            removeCartItem(id);
            parent.parentElement.remove();
        }
        if (parent.classList.contains('cart-item-increase-btn')) {
            const newAmount = increaseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }
        if (parent.classList.contains('cart-item-decrease-btn')) {
            const newAmount = decreaseAmount(parentID);
            if (newAmount === 0) {
                removeCartItem(parentID);
                parent.parentElement.parentElement.remove();
            } else {
                parent.previousElementSibling.textContent = newAmount;
            }
        }
        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart', cart);
        if (cart.length < 1) {
            localStorage.removeItem('cart');
        }
    });
}

function init() {
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();
}

init();

export { addToCart };
