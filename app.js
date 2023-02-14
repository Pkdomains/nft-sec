// Get the DOM elements for the main navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add an event listener to each navigation link to highlight the active page
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove the "active" class from all navigation links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
    // Add the "active" class to the clicked navigation link
    this.classList.add("active");
  });
});

// Get the DOM element for the "Contact Us" button
const contactButton = document.querySelector(".contact-button");

// Add an event listener to the "Contact Us" button to display a modal popup
contactButton.addEventListener("click", function() {
  const modal = document.querySelector(".modal");
  modal.classList.add("show-modal");
});

// Get the DOM element for the close button within the modal popup
const closeButton = document.querySelector(".close-button");

// Add an event listener to the close button to hide the modal popup
closeButton.addEventListener("click", function() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show-modal");
});
