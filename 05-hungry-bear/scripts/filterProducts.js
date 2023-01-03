import { get } from './utils.js';

const filterBtns = [...document.querySelectorAll('.filter-btn')];
const searchInput = get('.search-input');
const form = get('.input-form');

function filterButtons(data, button) {
    const newMenu = data.filter(function (item) {
        if (item.category === button.textContent || button.textContent === 'all') {
            return item;
        }
    });
    return newMenu;
}

function filterSearch(data) {
    const value = searchInput.value;
    const newMenu = data.filter(function (item) {
        if (item.title.includes(value)) {
            return item;
        }
    });
    return newMenu;
}

export { filterBtns, searchInput, form, filterButtons, filterSearch };
