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

// Dropdown header list

const menu = document.querySelector(".header__item");
const dropdown = document.querySelector(".header__js-dropdown");

function openDropdown() {
  dropdown.classList.toggle("active");
}

menu.addEventListener("mouseover", openDropdown);
dropdown.addEventListener("mouseleave", openDropdown);

// Tabs

const navTab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".banco-completo__card");

navTab.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    navTab.forEach((itemNav) => {
      itemNav.classList.remove("tab--active");
    });

    nav.classList.add("tab--active");

    tabContent.forEach((tab) => {
      tab.classList.remove("banco-completo__card--active");
    });

    tabContent[index].classList.add("banco-completo__card--active");
  });
});
