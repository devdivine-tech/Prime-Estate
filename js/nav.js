// MAIN MENU 
const menuToggle = () => {
  let menuIcon  = document.querySelector(".menu-icon");
  let menu = document.querySelector(".menu");
  const toggle = () => {
    if (menu.id === "translateX100") {
      menu.id = "translateX0";
      menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      menu.id = "translateX100";
      menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  }
  
  menuIcon.addEventListener("click", toggle)
}