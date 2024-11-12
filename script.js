// Get the navbar
const navbar = document.getElementById("navbar");

// Add the scroll event listener
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled"); // Add the scrolled class when the page is scrolled
    } else {
        navbar.classList.remove("scrolled"); // Remove when at the top of the page
    }
});

// Mobile menu toggle for hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
