// MAIN MENU 
const menuFuction = () => {
  let menuIcon  = document.querySelector(".menu-icon");
  let menu = document.querySelector(".menu");
  const openMenu = () => {
    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) {
      menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  }
  
  menuIcon.addEventListener("click", openMenu);
}
menuFuction();

// LIST MENU
const listMenu = () => {
  let dropListMenu = document.querySelectorAll(".drop-down");
  let opt1 = document.querySelector(".opt1")
  let opt2 = document.querySelector(".opt2")
  console.log(opt1.classList);
  
  const openListMenu1 = () => {
    opt1.classList.toggle("hidden");
    
    dropListMenu.forEach((list, index) => {
      if (index === 0) {
        if (!opt1.classList.contains("hidden")) {
        list.classList.remove("fa-chevron-down");
        list.classList.add("fa-chevron-up");
      } else {
        list.classList.add("fa-chevron-down");
        list.classList.remove("fa-chevron-up");
      };
      }
    });
  }
  const openListMenu2 = () => {
    opt2.classList.toggle("hidden");
    
    dropListMenu.forEach((list2, index) => {
      if (index === 1) {
        if (!opt2.classList.contains("hidden")) {
        list2.classList.remove("fa-chevron-down");
        list2.classList.add("fa-chevron-up");
      } else {
        list2.classList.add("fa-chevron-down");
        list2.classList.remove("fa-chevron-up");
      };
      }
    });
  }
  
  dropListMenu.forEach((dropMenu, index) => {
    if (index === 0) {
      dropMenu.addEventListener("click", openListMenu1);
    } else {
      dropMenu.addEventListener("click", openListMenu2);
    }
  });
}
listMenu();


AOS.init({
  delay: 300,
  duration: 800,
});
