'use strict'

const menuIcon = document.querySelector('.header__menu')
if (menuIcon) {
  const menuList = document.querySelector('.header__nav')
  const menuSpan = document.querySelector('.header__menu-span')
  menuIcon.addEventListener("click", function (e) {
    const page = document.querySelector('.page')
    page.classList.toggle('lock');
    menuSpan.classList.toggle('header__menu-span_active');
    menuIcon.classList.toggle('header__menu_active');
    menuList.classList.toggle('header__nav_active');
  })
}

const footerMenuBlock_buy = document.querySelector('.footer__menu-block_buy');
const footerMenuBlock_pay = document.querySelector('.footer__menu-block_pay');
const footerMenuBlock_about = document.querySelector('.footer__menu-block_about');

const footerMenu_pay = document.querySelector('.footer__title_pay');
if (footerMenu_pay) {
  footerMenu_pay.addEventListener("click", function (e) {
    footerMenuBlock_pay.classList.toggle('footer__menu-block_active')
    footerMenuBlock_buy.classList.remove('footer__menu-block_active')
    footerMenuBlock_about.classList.remove('footer__menu-block_active')
  })
}

const footerMenu_buy = document.querySelector('.footer__title_buy');
if (footerMenu_buy) {
  footerMenu_buy.addEventListener("click", function (e) {
    footerMenuBlock_buy.classList.toggle('footer__menu-block_active')
    footerMenuBlock_pay.classList.remove('footer__menu-block_active')
    footerMenuBlock_about.classList.remove('footer__menu-block_active')
  })
}

const footerMenu_about = document.querySelector('.footer__title_about');
if (footerMenu_about) {
  footerMenu_about.addEventListener("click", function (e) {
    footerMenuBlock_about.classList.toggle('footer__menu-block_active')
    footerMenuBlock_pay.classList.remove('footer__menu-block_active')
    footerMenuBlock_buy.classList.remove('footer__menu-block_active')
  })
}