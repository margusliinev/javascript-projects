import { getStorageItem, setStorageItem } from './utils.js';
import { menu } from './data.js';

function setupMenu() {
    let storage = getStorageItem('menu');
    if (storage.length < 1) {
        setStorageItem('menu', menu);
    } else {
        return;
    }
}

export { setupMenu };
