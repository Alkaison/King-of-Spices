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
