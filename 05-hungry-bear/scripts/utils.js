function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element found`);
    }
}

function getStorageItem(key) {
    let storageItem = localStorage.getItem(key);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(key));
    } else {
        storageItem = [];
    }
    return storageItem;
}

function setStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export { get, getStorageItem, setStorageItem };
