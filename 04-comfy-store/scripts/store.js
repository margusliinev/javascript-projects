import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

function setupStore(products) {
    store = products.map((product) => {
        const {
            id,
            fields: { featured, name, price, company, colors, image: img },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, price, company, colors, image };
    });
    setStorageItem('store', store);
}

function findProduct(id) {
    let product = store.find((product) => product.id === id);
    return product;
}

export { store, setupStore, findProduct };
