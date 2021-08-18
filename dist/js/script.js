// DOM
const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('body')
const btns = document.querySelectorAll('[data-btn]')
const cards = Array.from(document.querySelectorAll('[data-card]'))


const hamSource = {
    false: "./assets/icon-hamburger.svg",
    true: "./assets/icon-close.svg",
};

// FUNCTIONS

function handleHam() {
    hamburger.classList.toggle('open')
    body.classList.toggle('open')
    let isOpen = hamburger.classList.contains("open");

    hamburger.src = hamSource[isOpen]
}

function handleFlip(e) {
    let name = e.currentTarget.dataset.btn;
    let target = cards.find(card => card.dataset.card === name)
    
    target.classList.toggle('flipped')
}

//EVENT LISTENERS

hamburger?.addEventListener('click', handleHam)
btns?.forEach(btn => btn.addEventListener('click', handleFlip))