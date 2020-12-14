

document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
    const menuBurger = document.querySelector(".mobile__burger");
    const menuCloseBtn = document.querySelector(".menu__mobile-close");
    const menu = document.querySelector(".menu__mobile");
    const menuLinks = document.querySelectorAll(".menu__frame-link");


    menuBurger.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const section = document.getElementById("section-" + link.dataset.target);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    })

    function openMenu() {
        menu.classList.add("is-active");
    }

    function closeMenu() {
        menu.classList.remove("is-active");
    }
}

