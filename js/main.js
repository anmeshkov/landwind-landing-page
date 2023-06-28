// MOBILE NAV
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavButtonIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav-wrapper');

mobileNavButtonIcon.addEventListener('click', function () {
    mobileNavButtonIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scrol');
});