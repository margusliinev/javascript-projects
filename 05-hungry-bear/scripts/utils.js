function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element found`);
    }
}

export { get };
