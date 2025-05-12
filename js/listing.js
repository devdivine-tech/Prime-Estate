// SEARCH BAR FUNCTIONALITY
// => This script handles the search bar functionality, including showing suggestions, filtering the main list, and resetting the list when the "See Full Listing" link is clicked.
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
  const filterMainList = (e) => {
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
  }
  
  searchButton.addEventListener("click", filterMainList);
  // Add event listener for the Enter key
  searchBar.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior
      filterMainList(); // Call the filter function
  
      // Scroll to the specific section
      const targetSection = document.querySelector("#productList"); // Replace with your section's ID or class
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
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

// FAQS FUNCTIONALITY
// => This script handles the FAQ section, allowing users to expand and collapse answers to questions.

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll("dl");

  faqs.forEach((faq) => {
    const question = faq.querySelector("dt");
    const answer = faq.querySelector("dd");
    const iconPlus = faq.querySelector(".fa-plus");
    const iconMinus = faq.querySelector(".fa-minus");

    // Initially hide all answers
    answer.style.height = "0"; // Set height to 0 for smooth animation
    answer.style.overflow = "hidden"; // Prevent content overflow
    answer.style.transition = "height 0.3s ease"; // Add smooth transition

    question.addEventListener("click", function () {
      if (answer.style.height === "0px") {
        // Expand the answer
        answer.style.height = `${answer.scrollHeight}px`; // Set height to content height
        iconPlus.style.display = "none"; // Hide the plus icon
        iconMinus.style.display = "block"; // Show the minus icon
      } else {
        // Collapse the answer
        answer.style.height = "0"; // Set height to 0
        iconPlus.style.display = "block"; // Show the plus icon
        iconMinus.style.display = "none"; // Hide the minus icon
      }
    });
  });
});