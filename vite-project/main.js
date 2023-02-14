const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');


navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-extended', false)
    : navToggle.setAttribute('aria-extended', true)
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})