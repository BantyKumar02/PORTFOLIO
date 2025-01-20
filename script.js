const texts = [
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "Full-Stack Developer"
];

const textElement = document.querySelector(".typewriter-text");
const typingSpeed = 100;  // Speed of typing in milliseconds
const pauseAfterTyping = 1500;  // Pause after completing a word
const erasingSpeed = 50;  // Speed of erasing in milliseconds

let textIndex = 0;  // Current word index
let charIndex = 0;  // Current character index

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        // Add the next character to the text
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Pause before erasing
        setTimeout(eraseText, pauseAfterTyping);
    }
}

function eraseText() {
    if (charIndex > 0) {
        // Remove the last character from the text
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        // Move to the next word
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start the typing effect when the page loads
window.addEventListener("load", typeWriter);
