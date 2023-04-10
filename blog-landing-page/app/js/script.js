let buttons = document.querySelectorAll('.header__nav-menu_button');
let menuItems = document.querySelectorAll('.header__nav-menu_items');
let hamburger = document.querySelector('.header__nav-hamburger');
let navContainer = document.querySelector('.header__nav-container');
let navLogin = document.querySelector('.header__nav-login');

document.addEventListener('click', (e) => {

    if (!e.target.matches('.header__nav-menu_button')) {

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
    }
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        menuItems[index].classList.add('active');
    });
});

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active'); 
    navLogin.classList.toggle('active');
})

