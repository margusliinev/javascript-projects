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

function filterProducts() {
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            filterBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            const filteredMenu = filterButtons(menu, e.currentTarget);
            displayProducts(filteredMenu);
            form.addEventListener('keyup', function () {
                const value = searchInput.value;
                const newMenu = filteredMenu.filter(function (item) {
                    if (item.title.includes(value)) {
                        return item;
                    }
                });
                displayProducts(newMenu);
            });
        });
    });

    form.addEventListener('keyup', function () {
        const filteredMenu = filterSearch(menu);
        displayProducts(filteredMenu);
        filterBtns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const newMenu = filteredMenu.filter(function (item) {
                    if (item.category === btn.textContent || btn.textContent === 'all') {
                        return item;
                    }
                });
                displayProducts(newMenu);
            });
        });
    });
}

export { filterProducts };
