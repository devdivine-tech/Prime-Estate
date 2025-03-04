// DESKTOP FUNCTIONS ALLOWED TO RUN
const desktopFuction = () => {
  let menu = document.querySelector(".menu");
  if (window.innerWidth >= 985) {
    menu.classList.remove("hidden");
    listOpt();
  };
};
desktopFuction();