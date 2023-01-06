import '../navigation.js';
import { get } from '../utils.js';
import { menu } from '../data.js';
import { addToCart } from '../setupCart.js';

const banner = get('.product-banner h3');
const image = get('.single-product-img');
const description = get('.description-text');
const price = get('.price-title span');
const addToCartBtn = get('.add-to-cart-btn');

let productID;

window.addEventListener('DOMContentLoaded', function () {
    const urlID = window.location.search.substring(4);
    productID = urlID;
    let meal = menu.find((meal) => meal.id === parseInt(urlID));
    document.title = `Hungry Bear || ${meal.title}`;
    banner.textContent = meal.title;
    image.src = meal.img;
    description.textContent = meal.desc;
    price.textContent = `$${meal.price}`;
});

addToCartBtn.addEventListener('click', function () {
    addToCart(productID);
});
