console.log('linked!');

const toggleButtons = document.querySelectorAll(".btn");

toggleButtons.forEach((toggleButtons) => {
    toggleButtons.addEventListener("click", function (event) {
        event.stopPropagation(); 
        this.nextElementSibling.classList.toggle("expanded");
    });
});

const secondButton = document.querySelector('.btn-two');
secondButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdown = document.querySelector('.second-level')
    dropdown.classList.toggle('expansion');
});