document.addEventListener("DOMContentLoaded", function () {
    const sortSelect = document.getElementById("sort");
    const priceSelect = document.getElementById("price");
    const brandSelect = document.getElementById("brand");
    const sizeSelect = document.getElementById("size");
    const loadMoreButton = document.querySelector(".loadMore button");
    const productContainer = document.querySelector(".searchResult_products .row");

    const allProducts = Array.from(productContainer.querySelectorAll(".product-box"));
    let filteredProducts = [];
    let currentValue = 8; // Number of products to show

    function filterAndSortProducts() {
        const sortValue = sortSelect.value;
        const priceValue = priceSelect.value;
        const brandValue = brandSelect.value.toLowerCase();
        const sizeValue = sizeSelect.value.toLowerCase();

        // Filter logic
        filteredProducts = allProducts.filter(product => {
            const price = parseInt(product.dataset.price);
            const productBrand = (product.dataset.brand || "").toLowerCase();
            const productSizes = (product.dataset.size || "").toLowerCase().split(",");

            let matchesPrice = true;
            let matchesBrand = true;
            let matchesSize = true;

            if (priceValue === "below-15000") {
                matchesPrice = price < 15000;
            } else if (priceValue === "15000-20000") {
                matchesPrice = price >= 15000 && price <= 20000;
            } else if (priceValue === "above-20000") {
                matchesPrice = price > 20000;
            }

            if (brandValue && productBrand !== brandValue) {
                matchesBrand = false;
            }

            if (sizeValue && !productSizes.includes(sizeValue)) {
                matchesSize = false;
            }

            return matchesPrice && matchesBrand && matchesSize;
        });

        // Sort logic
        if (sortValue === "price-low-to-high") {
            filteredProducts.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
        } else if (sortValue === "price-high-to-low") {
            filteredProducts.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
        }

        currentValue = 8; // Reset how many items to show
        updateProductDisplay();
    }

    function updateProductDisplay() {
        productContainer.innerHTML = "";

        if (filteredProducts.length === 0) {
            productContainer.innerHTML = `<p class="filterProductNoResult">No Results Found!</p>`;
            loadMoreButton.style.display = "none";
            return;
        }

        // Display only current visible items
        for (let i = 0; i < filteredProducts.length; i++) {
            filteredProducts[i].style.display = i < currentValue ? "block" : "none";
            productContainer.appendChild(filteredProducts[i]);
        }

        // Toggle Load More button
        if (currentValue >= filteredProducts.length) {
            loadMoreButton.style.display = "none";
        } else {
            loadMoreButton.style.display = "block";
            loadMoreButton.innerText = "Load More";
        }
    }

    loadMoreButton.addEventListener("click", () => {
        loadMoreButton.innerHTML = `<span class="loader"></span>`;

        setTimeout(() => {
            currentValue += 8;
            updateProductDisplay();
        }, 1000);
    });

    // Add event listeners to all filters
    [sortSelect, priceSelect, brandSelect, sizeSelect].forEach(select => {
        select.addEventListener("change", filterAndSortProducts);
    });

    // Initial load
    filterAndSortProducts();
});
