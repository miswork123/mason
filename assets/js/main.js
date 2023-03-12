//menu mobile
let menuIcon = document.querySelector('.burger');
let menuMobile = document.querySelector('.wrap-menu__mobile');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuMobile.classList.toggle('show');

    if (menuMobile.classList.contains('show')) {
        document.querySelector('html').classList.add('hidden');
    }else {
        document.querySelector('html').classList.remove('hidden');
    }
});