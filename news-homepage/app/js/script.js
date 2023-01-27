
console.log('script');
const body = document.querySelector('body');
const hamburger = document.querySelector('.header__img');
const ul = document.querySelector('ul');

console.log(hamburger);
let toggle = true;
hamburger.addEventListener('click', () => {
    console.log('asd');
    ul.classList.toggle('hide');
    if(toggle) {
        hamburger.src="/assets/images/icon-menu-close.svg";
        body.style.background="#807E89";
        body.style.transition="background 250ms ease-in-out";
        toggle = false;
    } else{
        hamburger.src="/assets/images/icon-menu.svg";
        body.style.background="#fff";
        body.style.transition="background 250ms ease-in-out"
        toggle = true;
    }

})