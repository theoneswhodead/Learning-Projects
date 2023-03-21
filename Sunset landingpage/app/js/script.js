const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__nav ul');
const header = document.querySelector('.header__headline-div');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('active');
    console.log('asd');
})