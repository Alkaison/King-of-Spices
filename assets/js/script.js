'use strict';

// NavBar Scroll Toggle 
window.addEventListener("scroll", () => {
    var header = document.querySelector(".nav-main");
    header.classList.toggle("active", window.scrollY > 20);
});

// HumBurger Menu 
const mainMenu = document.querySelector(".nav-ul");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu_items = document.querySelectorAll(".nav-ul li a");

menu_items.forEach((item) => {
    if (window.innerWidth < 800) {
        item.addEventListener("click", close);
    }
});

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show()
{
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close()
{
    mainMenu.style.top = "-100vh";
}

// Alert message for Menu Items
function show_alert(){
    alert("No Feature Added!!!");
}
