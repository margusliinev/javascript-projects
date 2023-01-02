import { get } from './utils.js';
import { menu } from './data.js';
import { displayProducts } from './displayProducts.js';

const filterBtns = [...document.querySelectorAll('.filter-btn')];
const form = get('.input-form');
const searchInput = get('.search-input');

function filterButtons(button) {
    const newMenu = menu.filter(function (item) {
        if (item.category === button.textContent) {
            return item;
        }
    });
    return newMenu;
}

function filterProducts(buttonFilterMenu) {
    displayProducts(buttonFilterMenu);
    form.addEventListener('keyup', function () {
        const value = searchInput.value;
        const newMenu = buttonFilterMenu.filter(function (item) {
            if (item.title.includes(value)) {
                return item;
            }
        });
        displayProducts(newMenu);
    });
}

export { filterProducts, filterButtons, filterBtns };
