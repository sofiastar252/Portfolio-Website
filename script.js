const dynamicText = document.getElementById("typewriterHeading");
const words = ["Sofia Starinnova", "an engineer", "a designer", 
"an innovator", "a tech enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.innerHTML = 'I am <font color="blue">' + currentChar + '</font>';

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 800);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    typeEffect();
});
