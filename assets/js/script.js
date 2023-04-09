'use strict';

// NavBar Scroll Toggle 
window.addEventListener("scroll", () => {
    var header = document.querySelector(".nav-main");
    header.classList.toggle("active", window.scrollY > 20);
});

// Reset Form Input Fields 
function resetForm() {
    form.reset();
}

// Book A Table Form 
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Thanks for reserving your seats, soon you will receive a message on your Phone Number & Mail ID for the confirmations!");
        resetForm();
    } else {
        alert("Please fill out all required fields!");
    }
});
