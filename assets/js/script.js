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
    item.addEventListener("click",close);
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

// Book A Table Form 
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Thanks for reserving your seats, soon you will receive a message on your Phone Number & Mail ID for the confirmations!");
        form.reset();
    } else {
        alert("Please fill out all required fields!");
    }
});
