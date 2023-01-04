import '../navigation.js';
import '../displayProducts.js';
import { menu } from '../data.js';
import { displayProducts } from '../displayProducts.js';
import { filterBtns, searchInput, form, filterButtons, filterSearch } from '../filterProducts.js';
import { setupMenu } from '../setupMenu.js';
import { setupCart } from '../setupCart.js';

setupMenu();
setupCart();
displayProducts(menu);

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
