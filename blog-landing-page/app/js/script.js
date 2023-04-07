let buttons = document.querySelectorAll('.header__nav-menu_button');
let menuItems = document.querySelectorAll('.header__nav-menu_items');

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

