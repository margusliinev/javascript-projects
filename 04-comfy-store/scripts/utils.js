function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element found`);
    }
}

function formatPrice(price) {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format((price / 100).toFixed(2));
    return formattedPrice;
}

function getStorageItem(item) {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }
    return storageItem;
}

function setStorageItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
}

export { get, formatPrice, getStorageItem, setStorageItem };
