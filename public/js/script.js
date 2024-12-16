let navlinks = document.querySelector(".nav-link");
let hambergerMenu = document.querySelector(".hamberger-menu");

hambergerMenu.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  console.log("hello");
});
