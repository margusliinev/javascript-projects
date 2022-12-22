import { get } from './utils.js';
import { displayProducts } from './displayProducts.js';

function setupSearch(store) {
    const form = get('.input-form');
    const searchInput = get('.search-input');
    form.addEventListener('keyup', () => {
        const value = searchInput.value;
        if (value) {
            const newStore = store.filter((product) => {
                let { name } = product;
                name = name.toLowerCase();
                if (name.startsWith(value)) {
                    return product;
                }
            });
            displayProducts(newStore, get('.products-container'), true);
            if (newStore.length < 1) {
                const products = get('.products-container');
                products.innerHTML = 'Sorry, no products matched your search.';
            }
        } else {
            displayProducts(store, get('.products-container'), true);
        }
    });
}

function setupCompanies(store) {
    let companies = ['all', ...new Set(store.map((product) => product.company))];
    const companiesContainer = get('.companies');
    companiesContainer.innerHTML = companies
        .map((company) => {
            return `<button class="company-btn">${company}</button>`;
        })
        .join('');
    companiesContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('company-btn')) {
            let newStore = [];
            if (e.target.textContent === 'all') {
                newStore = [...store];
            } else {
                newStore = store.filter((product) => product.company === e.target.textContent);
            }
            displayProducts(newStore, get('.products-container'), true);
        }
    });
}

function setupPrice(store) {
    const priceInput = get('.price-filter');
    const priceValue = get('.price-value');

    let maxPrice = store.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value : $${maxPrice}`;

    priceInput.addEventListener('input', function () {
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Value : $${value}`;
        let newStore = store.filter((product) => product.price / 100 <= value);
        displayProducts(newStore, get('.products-container'), true);
        if (newStore.length < 1) {
            const products = get('.products-container');
            products.innerHTML = 'Sorry, no products matched your search.';
        }
    });
}

export { setupSearch, setupCompanies, setupPrice };
