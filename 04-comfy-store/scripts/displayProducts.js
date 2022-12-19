function displayProducts(products, section) {
    const displayedProducts = products
        .map((product) => {
            return `<article class="product">
                    <div class="product-container">
                        <img src="${product.image}" class="product-img img" alt="${product.name}" />
                        <div class="product-icons">
                            <a href="product.html?id=${product.id}" class="product-icon">
                                <i class="fas fa-search"></i>
                            </a>
                            <button class="product-cart-btn product-icon" data-id="1">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    <footer>
                        <p class="product-name">${product.name}</p>
                        <h4 class="product-price">$${product.price / 100}</h4>
                    </footer>
                </article>`;
        })
        .join('');
    section.innerHTML = displayedProducts;
}

export { displayProducts };
