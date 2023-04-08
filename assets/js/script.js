'use strict';

// NavBar Scroll Toggle 
window.addEventListener("scroll", () => {
    var header = document.querySelector(".nav-main");
    header.classList.toggle("active", window.scrollY > 100);
});
