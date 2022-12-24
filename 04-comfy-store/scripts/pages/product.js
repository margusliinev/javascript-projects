import '../toggleSidebar.js';
import '../toggleCart.js';
import '../setupCart.js';
import { get, formatPrice, fixedNavbar } from '../utils.js';
import { singleProductUrl } from '../fetchProducts.js';
import { addToCart } from '../setupCart.js';

fixedNavbar();

const centerDOM = get('.single-product-center');
const pageTitleDOM = get('.page-hero-title');
const imgDOM = get('.single-product-img');
const titleDOM = get('.single-product-title');
const companyDOM = get('.single-product-company');
const priceDOM = get('.single-product-price');
const colorsDOM = get('.single-product-colors');
const descDOM = get('.single-product-desc');
const cartBtn = get('.addToCartBtn');

let productID;

window.addEventListener('DOMContentLoaded', async function () {
    const urlID = window.location.search;
    try {
        const response = await fetch(`${singleProductUrl}${urlID}`);
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json();
            const { id, fields } = data;
            productID = id;
            const { name, company, price, colors, description } = fields;
            const image = fields.image[0].thumbnails.large.url;
            document.title = `${name.toUpperCase()} || Comfy`;
            pageTitleDOM.textContent = `${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = `by ${company}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
            colors.forEach((color) => {
                const span = document.createElement('span');
                span.classList.add('product-color');
                span.style.backgroundColor = `${color}`;
                colorsDOM.append(span);
            });
        } else {
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
            <div class="error">
                <h4>sorry, something went wrong</h4>
                <a href="index.html" class="btn">back home</a>
            </div>`;
        }
    } catch (error) {
        console.log(error);
    }
});

cartBtn.addEventListener('click', function () {
    addToCart(productID);
});
