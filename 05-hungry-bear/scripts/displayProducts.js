import { get } from './utils.js';

const container = get('.products-container');

function displayProducts(data) {
    const products = data
        .map((product) => {
            return `<article class="product">
                        <div class="product-img-container">
                            <img class="product-img" src="${product.img}" alt="${product.title}">
                            <div class="product-icons">
                                <a href="product.html?id=${product.id}" class="product-icon">
                                    <i class="fas fa-search"></i>
                                </a>
                                <button class="product-cart-btn product-icon data-id="${product.id}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h6 class="product-name">${product.title}</h6>
                            <p class="product-price">$${product.price}</p>
                        </div>
                </article>`;
        })
        .join('');
    container.innerHTML = products;
    if (!products) {
        container.innerHTML = `<h4 class="error">Sorry, no products matched your search.</h4>`;
    }
}

export { displayProducts };
