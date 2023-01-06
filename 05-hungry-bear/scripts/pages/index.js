import '../navigation.js';
import '../setupCart.js';
import { menu } from '../data.js';
import { displayProducts } from '../displayProducts.js';
import { filterProducts } from '../filterProducts.js';

displayProducts(menu);
filterProducts();
