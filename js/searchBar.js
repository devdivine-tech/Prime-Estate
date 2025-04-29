document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".search-bar");
  const suggestions = document.querySelector(".suggestions");
  const searchButton = document.querySelector(".search-btn");
  const fullListLink = document.querySelector(".full-list"); // Select the full-list link

  // Show suggestions only when the input is active or hovered
  searchBar.addEventListener("focus", function () {
    suggestions.style.display = "block"; // Show suggestions
  });

  searchBar.addEventListener("blur", function () {
    setTimeout(() => {
      suggestions.style.display = "none"; // Hide suggestions after losing focus
    }, 200); // Delay to allow clicking on suggestions
  });

  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase().trim();
    const searchWords = searchTerm.split(" "); // Split search term into words

    // Filter products for suggestions
    const filteredProducts = products.filter((product) => {
      const searchableWords = [
        product.category.toLowerCase(),
        `${product.bedrooms} bedrooms`.toLowerCase(),
        `${product.bathrooms} bathrooms`.toLowerCase(),
      ];

      return searchWords.every((word) =>
        searchableWords.some((field) => field === word || field.includes(word))
      );
    });

    // Update suggestions
    suggestions.innerHTML = ""; // Clear previous suggestions
    if (filteredProducts.length === 0) {
      const noResultItem = document.createElement("li");
      noResultItem.textContent = "No property found";
      noResultItem.classList.add("no-result");
      suggestions.appendChild(noResultItem);
    } else {
      filteredProducts.forEach((product) => {
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = `${product.category} - ${product.bedrooms} Bedrooms, ${product.bathrooms} Bathrooms`;
        suggestions.appendChild(suggestionItem);
      });
    }
  });

  // Filter the main list when the search button is clicked
  searchButton.addEventListener("click", function (e) {
    const searchTerm = searchBar.value.toLowerCase().trim();
    const searchWords = searchTerm.split(" "); // Split search term into words

    // Filter products for the main list
    products.forEach((product) => {
      const productElement = document.querySelector(
        `.list-cards[data-id="${product.id}"]`
      );
      if (productElement) {
        const searchableWords = [
          product.category.toLowerCase(),
          `${product.bedrooms} bedrooms`.toLowerCase(),
          `${product.bathrooms} bathrooms`.toLowerCase(),
        ];
        if (
          searchWords.every((word) =>
            searchableWords.some((field) => field === word || field.includes(word))
          )
        ) {
          productElement.classList.remove("hidden");
        } else {
          productElement.classList.add("hidden");
        }
      }
    });

    // Hide suggestions after filtering
    suggestions.style.display = "none";
  });

  // Reset the main list when the "See Full Listing" link is clicked
  fullListLink.addEventListener("click", function (e) {

    // Clear the search bar
    searchBar.value = "";

    // Clear any filtering or suggestions
    suggestions.innerHTML = "";

    // Reset the product list to show all items
    products.forEach((product) => {
      const productElement = document.querySelector(
        `.list-cards[data-id="${product.id}"]`
      );
      if (productElement) {
        productElement.classList.remove("hidden"); // Show all products
      }
    });
  });
});