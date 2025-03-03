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

// LIST MENU || MOBILE VIEWS
const listMenu = () => {
  let dropMenu = document.querySelectorAll(".drop-down");
  let opts = document.querySelectorAll(".opt");
  
  const openListingMenu = () => {
    opts.forEach( (opt, index) => {
      index === 0 ? opt.classList.toggle("hidden") : opt.classList.add("hidden");
    });
  }
  const openAboutMenu = () => {
    opts.forEach( (opt, index) => {
      index === 1 ? opt.classList.toggle("hidden") : opt.classList.add("hidden");
    });
  }
  
  dropMenu.forEach( (i, index) =>  {
    index === 0 ? i.addEventListener("mouseover", openListingMenu) : i.addEventListener("mouseover", openAboutMenu);
  });
};

// LIST MENU || DESKTOP VIEWS
const listOpt = () => {
  let ul = document.querySelectorAll(".menu-list .opt");
  let a = document.querySelectorAll(".menu-list .list-opt");
  
  const toggleListing = () => {
    ul.forEach((ul, index) => {
      index === 0 ? ul.classList.toggle("hidden") : ul.classList.add("hidden");
    });
  };
  const toggleAbout = () => {
    ul.forEach((ul, index) => {
      index === 1 ? ul.classList.toggle("hidden") : ul.classList.add("hidden");
    });
  };
  
  a.forEach((a, index) => {
    index === 0 ? a.addEventListener("mouseover", toggleListing) : a.addEventListener("mouseover", toggleAbout);
  });
};