import { get, formatPrice, getStorageItem, setStorageItem } from './utils.js';
import { menu } from './data.js';

let cart = getStorageItem('cart');

const cartItemCount = get('.cart-item-count');
const cartItems = get('.cart-items');
const cartTotal = get('.cart-total span');

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
        const items = [...cartItems.querySelectorAll('.cart-item-amount')];
        const newAmount = items.find((value) => value.dataset.id === id);
        newAmount.textContent = amount;
    }
    displayCartTotalPrice();
    displayCartItemCount();
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

function decreaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === parseInt(id)) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    });
    return newAmount;
}

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== parseInt(id));
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

function displayCartItemCount() {
    const amount = cart.reduce((total, value) => {
        total = total + value.amount;
        return total;
    }, 0);
    cartItemCount.textContent = amount;
}

function displayCartTotalPrice() {
    const amount = cart.reduce((total, value) => {
        total = total + value.price * value.amount;
        return total;
    }, 0);
    cartTotal.textContent = `$${formatPrice(amount)}`;
}

function setupCartFunctionality() {
    cartItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('cart-item-remove-btn')) {
            removeItemFromCart(e.target.dataset.id);
            e.target.parentElement.parentElement.remove();
        }
        if (e.target.parentElement.classList.contains('cart-item-increase-btn')) {
            const newAmount = increaseAmount(e.target.parentElement.dataset.id);
            e.target.parentElement.nextElementSibling.textContent = newAmount;
        }
        if (e.target.parentElement.classList.contains('cart-item-decrease-btn')) {
            const newAmount = decreaseAmount(e.target.parentElement.dataset.id);
            if (newAmount < 1) {
                removeItemFromCart(e.target.parentElement.dataset.id);
                e.target.parentElement.parentElement.parentElement.remove();
            } else {
                e.target.parentElement.previousElementSibling.textContent = newAmount;
            }
        }
        displayCartItemCount();
        displayCartTotalPrice();
        setStorageItem('cart', cart);
        if (cart.length < 1) {
            localStorage.removeItem('cart');
        }
    });
}

displayCartItemCount();
displayCartTotalPrice();
displayAllCartItems();
setupCartFunctionality();

export { addToCart };
