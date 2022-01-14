// Header que muda de cor no scroll

const header = document.getElementById("js-header");

function fixedMenu() {
  if (window.pageYOffset > 72) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}

document.addEventListener("scroll", fixedMenu);
