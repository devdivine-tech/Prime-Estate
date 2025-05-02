document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".listings");
  const listingLists = document.createElement("article");
  listingLists.classList.add("listing-lists");

  const circle = document.querySelector("#contain");
  if (circle) {
    listingLists.classList.add("home");
  }

  let homePage = listingLists.classList.contains("home");
  let numOfProduct = homePage ? 7 : products.length;

  products.slice(0, numOfProduct).forEach((product) => {
    // CREATE ELEMENTS
    const link = document.createElement("a");
    const listCard = document.createElement("figure");
    const category = document.createElement("label");
    const status = document.createElement("label");
    const div = document.createElement("div");
    const listImg = document.createElement("img");
    const listContent = document.createElement("figcaption");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const listDetails = document.createElement("div");
    const rooms = document.createElement("p");
    const bedrooms = document.createElement("span");
    const bathrooms = document.createElement("span");
    const sqrt = document.createElement("p");
    const location = document.createElement("p");
    const price = document.createElement("p");

    // STYLE AND ADD CLASSES
    link.href = `view-this-product.html?id=${product.id}`;
    listCard.classList.add("list-cards");
    listCard.classList.add(product.status);
    listCard.setAttribute("data-aos", "zoom-in");
    category.classList.add("category");
    category.textContent = product.category;
    status.classList.add("status");
    status.textContent = product.available;
    listImg.classList.add("list-img");
    listImg.src = product.image;
    listImg.alt = product.name;
    listContent.classList.add("list-content");
    h3.textContent = product.name;
    p.textContent = product.briefDescription;
    listDetails.classList.add("list-details");
    rooms.classList.add("rooms");
    bedrooms.innerHTML = `<i class="fa-solid fa-bed"></i> ${product.bedrooms} &nbsp;&nbsp;|&nbsp;&nbsp;`;
    bathrooms.innerHTML = `<i class="fa-solid fa-bath"></i> ${product.bathrooms} &nbsp;&nbsp;|&nbsp;&nbsp;`;
    sqrt.innerHTML = `<i class="fa-solid fa-ruler-combined"></i> ${product.sqrt}`;
    sqrt.classList.add("rooms");
    location.classList.add("location");
    location.textContent = product.location;
    price.classList.add("price");
    price.textContent = product.price;

    // APPEND ELEMENTS IN THE CORRECT ORDER
    listingLists.appendChild(link);
    link.appendChild(listCard);
    listCard.appendChild(category);
    listCard.appendChild(status);
    listCard.appendChild(div);
    div.appendChild(listImg);
    listCard.appendChild(listContent);
    listContent.appendChild(h3);
    listContent.appendChild(p);
    listContent.appendChild(listDetails);
    listDetails.appendChild(rooms);
    rooms.appendChild(bedrooms);
    rooms.appendChild(bathrooms);
    listDetails.appendChild(sqrt);
    listDetails.appendChild(location);
    listDetails.appendChild(price);
  });

  // APPEND THE MAIN ARTICLE TO THE CONTAINER
  container.appendChild(listingLists);


  const btnFullListing = document.createElement("a");
  btnFullListing.href = "listing.html";
  btnFullListing.textContent = "View Full Listings";
  btnFullListing.classList.add("btn-full-listing");

  container.appendChild(btnFullListing);
});