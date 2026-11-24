
// Welcome Message
console.log("Welcome to Sarbjot's Portfolio!");


// Header Shadow on Scroll
window.addEventListener("scroll", function() {

    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    } 
    else {
        header.style.boxShadow = "none";
    }

});


// Typing Effect
let text = document.querySelector(".home-content h2");

let words = [
    "Web Developer",
    "Creative Coder",
    "Frontend Developer"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {

    if (letterIndex < words[wordIndex].length) {

        text.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeEffect, 100);

    } 
    else {

        setTimeout(function() {

            text.textContent = "";

            letterIndex = 0;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            typeEffect();

        }, 1500);

    }

}

text.textContent = "";
typeEffect();

// Anime Girl Cursor Movement

let character = document.querySelector(".home-image img");

window.addEventListener("mousemove", function(event) {

    let moveX = (event.clientX / window.innerWidth - 0.5) * 20;

    let moveY = (event.clientY / window.innerHeight - 0.5) * 20;

    character.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});