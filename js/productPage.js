const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const heading = document.querySelector(".heading");
const h1 = heading.querySelector("h1");
const locations = heading.querySelector(".location");
const about = heading.querySelector(".about");
const bedrooms = heading.querySelector(".bedrooms");
const bathrooms = heading.querySelector(".bathrooms");
const sqrt = heading.querySelector(".sqrt");
const contactAgent = heading.querySelector(".contact-agent");
const price = heading.querySelector(".price");
const images = document.querySelector(".images");
const description = document.querySelector(".description");
const overview = description.querySelector(".overview");
const overview_h2 = description.querySelector(".overview h2");
const overview_p = description.querySelector("p");
const details = description.querySelector(".details");
const details_h3 = description.querySelector(".details h3");
const details_lis = description.querySelectorAll(".details li");
const amenities = description.querySelector(".amenities");
const amenities_h3 = description.querySelector(".amenities h3");
const amenities_lis = description.querySelectorAll(".amenities li");
const agent = document.querySelector(".agent");
const agent_h2 = document.querySelector(".agent h2");
const agent_a = document.querySelector(".agent a");


const product = products.find(product => product.id === id);

if (product) {
  h1.textContent = product.name;
  product.gallery.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = product.name;
    
    images.appendChild(img);
  });
  locations.textContent = product.location;
  bedrooms.innerHTML = `<i class="fa-solid fa-bed"></i> ${product.bedrooms}`;
  bathrooms.innerHTML = `<i class="fa-solid fa-bath"></i> ${product.bathrooms}`;
  sqrt.innerHTML = `<i class="fa-solid fa-ruler-combined"></i> ${product.sqrt}`;
  contactAgent.innerHTML = `<i class="fa-solid fa-phone-volume"></i> Contact Agent`;
  contactAgent.href = "tel:+2348169383907";
  price.textContent = product.price;
  overview_h2.textContent = "Overview";
  overview_p.innerHTML = product.fullDescription;
  details_h3.textContent = "Property Details";
  details_lis.forEach((li, index) => {
    switch (index) {
      case 0:
        li.innerHTML = `Property Type: <span> ${product.category}</span>`;
        break;
      case 1:
        li.innerHTML = `Bathrooms: <span> ${product.bathrooms}</span>`;
        break;
      case 2:
        li.innerHTML = `Bedrooms: <span> ${product.bedrooms}</span>`;
        break;
      default:
        li.innerHTML = `Status: <span> ${product.statusAvailable}</span>`;
    };
  });
  amenities_h3.textContent = "Amenities";
  amenities_lis.forEach((li, index) => {
    switch (index) {
      case 0:
        li.innerHTML = `<strong><i class="fa-solid fa-bolt"></i> Power Supply: </strong>
        ${product.amenities.power}`;
        break;
      case 1:
        li.innerHTML = `<strong><i class="fa-solid fa-shield-halved"></i> Security: </strong>
        ${product.amenities.security}`;
        break;
      case 2:
        li.innerHTML = `<strong><i class="fa-solid fa-faucet-drip"></i> Water: </strong>
        ${product.amenities.water}`;
        break;
      case 3:
        li.innerHTML = `<strong><i class="fa-solid fa-wifi"></i> Connectivity: </strong>
        ${product.amenities.connectivity}`;
        break;
      case 4:
        li.innerHTML = `<strong><i class="fa-solid fa-house-signal"></i> Technology: </strong>
        ${product.amenities.technology}`;
        break;
      case 5:
        li.innerHTML = `<strong><i class="fa-solid fa-car-side"></i> Parking: </strong>
        ${product.amenities.parking}`;
        break;
      case 6:
        li.innerHTML = `<strong><i class="fa-solid fa-kitchen-set"></i> Kitchen: </strong>
        ${product.amenities.kitchen}`;
        break;
      default:
        li.innerHTML = `<strong><i class="fa-solid fa-tree"></i> Recreation: </strong>
        ${product.amenities.recreation}`;
    };
  });
  agent_h2.textContent = "Interested in This product? Get in touch with a Real Estate Expert";
  agent_a.href = "tel:+2348169383907";
  agent_a.innerHTML = `<i class="fa-solid fa-phone"></i> Contact Agent`;
  agent_a.addEventListener("mouseover", ( ) => {
    agent_a.innerHTML = `<i class="fa-solid fa-phone-volume"></i> Contact Agent`;
  });
  agent_a.addEventListener("mouseout", ( ) => {
    agent_a.innerHTML = `<i class="fa-solid fa-phone"></i> Contact Agent`;
  });
} else {
  h1.textContent = "NO DETAILED PRODUCT";
};