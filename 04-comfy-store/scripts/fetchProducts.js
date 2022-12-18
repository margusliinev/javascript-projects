const allProductsUrl = 'https://course-api.com/javascript-store-products';
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';

async function fetchProducts() {
    const response = await fetch(allProductsUrl);
    const data = response.json();
    return data;
}

export { allProductsUrl, singleProductUrl, fetchProducts };
