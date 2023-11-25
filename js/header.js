function toggleMenu() {
    var burgerBtn = document.getElementById('burgerBtn');
    var menuWrapper = document.getElementById('header-wrapper');
    var headerList = document.getElementById('header-list');
    if (burgerBtn.classList.contains("burger-menu-btn") || burgerBtn.classList.contains("burger-menu-btn-open")) {
        burgerBtn.classList.remove('burger-menu-btn');
        burgerBtn.classList.remove('burger-menu-btn-open');
        burgerBtn.classList.toggle('burger-menu-btn-close');
        menuWrapper.classList.remove("header__wrapper_close");
        menuWrapper.classList.add("header__wrapper_show");
        headerList.classList.replace("header__list", "header__list_show");
    }
    else {
        burgerBtn.classList.remove('burger-menu-btn-close');
        burgerBtn.classList.toggle('burger-menu-btn-open');
        menuWrapper.classList.remove("header__wrapper_show");
        menuWrapper.classList.add("header__wrapper_close");
        headerList.classList.replace("header__list_show", "header__list");

    }
}