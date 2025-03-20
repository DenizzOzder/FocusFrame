document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMenu = document.getElementById("close-menu");

    // Menü açma
    burgerMenu.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    // Menü kapatma
    closeMenu.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });
});