const menuButton = document.querySelector(".navbar__menu");
const mobileMenu = document.querySelector(".navbar__mobile");

menuButton.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "×" : "☰";

});