const navToggle = document.querySelector('.nav--toggle');
const nav = document.querySelector('.navbar__links');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('navbar--visible');
    console.log('yes')
})

console.log('lol')