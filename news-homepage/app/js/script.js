
const body = document.querySelector('body');
const hamburger = document.querySelector('.header__img');
const ul = document.querySelector('ul');

let toggle = true;

hamburger.addEventListener('click', () => {

    ul.classList.toggle('hide');

    if(toggle) {
        hamburger.src="/assets/images/icon-menu-close.svg";
        body.style.background="#807E89";
        body.style.filter="saturate(33%)"
        body.style.transition="background 250ms ease-in-out";
        
        toggle = false;

    } else {
        hamburger.src="/assets/images/icon-menu.svg";
        body.style.background="#fff";
        body.style.filter="saturate(100%)"
        body.style.transition="background 250ms ease-in-out";

        toggle = true;
    }

});