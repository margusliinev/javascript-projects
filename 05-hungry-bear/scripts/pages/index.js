import '../navigation.js';
import '../displayProducts.js';
import { menu } from '../data.js';
import { filterProducts, filterButtons, filterBtns } from '../filterProducts.js';

filterProducts(menu);

filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        if (e.currentTarget.textContent === 'all') {
            filterProducts(menu);
        } else {
            const filteredMenu = filterButtons(e.currentTarget);
            filterProducts(filteredMenu);
        }
    });
});
