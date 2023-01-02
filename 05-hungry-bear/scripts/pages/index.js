import '../navigation.js';
import '../displayProducts.js';
import { menu } from '../data.js';
import { filterProducts } from '../filterProducts.js';
import { displayProducts } from '../displayProducts.js';

displayProducts(menu);
filterProducts();
