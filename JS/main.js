let mobileMenu = document.querySelector('.mobile-menu');

// FILTER
const filter = () => {
  let all = document.querySelector("#all");
  let buy = document.querySelector("#buy");
  let rent = document.querySelector("#rent");
  let buyHouses = document.querySelectorAll(".buy");
  let rentHouses = document.querySelectorAll(".rent");
  
  const buyHouse = () => {
    rentHouses.forEach((rent) => {
      rent.classList.add("hidden");
    });
    buyHouses.forEach((buy) => {
      if (buy.classList.contains("hidden")) {
        buy.classList.remove("hidden");
      }
    });
  }
  const rentHouse = () => {
    buyHouses.forEach((buy) => {
      buy.classList.add("hidden");
    });
    rentHouses.forEach((rent) => {
      if (rent.classList.contains("hidden")) {
        rent.classList.remove("hidden");
      }
    });
  }
  const allHouse = () => {
    buyHouses.forEach((buy) => {
      buy.classList.remove("hidden");
    });
    rentHouses.forEach((rent) => {
      rent.classList.remove("hidden");
    });
  }
  
  buy.addEventListener("click", buyHouse);
  rent.addEventListener("click", rentHouse);
  all.addEventListener("click", allHouse);
}
document.addEventListener("DOMContentLoaded", filter);

// FIX YEAR 
const currentYear = () => {
  let date = new Date();
  let year = document.querySelector(".year");
  year.innerHTML = date.getUTCFullYear().toString();
}
currentYear();

// ANIMATE ON SCROLL SCRIPT
AOS.init({
  delay: 200,
  duration: 800,
  once: true,
});