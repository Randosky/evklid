// Бургер

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll('.nav__link');
let closeBurger = menu.querySelector(".close");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop-scroll");
})

closeBurger.addEventListener("click", () => {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// Слайдер

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true
  },
  });

// Табы

let tabsBtn = document.querySelectorAll('.steps__href');
let tabsItem = document.querySelectorAll('.how__list');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('steps__href--active')});
    e.currentTarget.classList.add('steps__href--active');

    tabsItem.forEach(function(element){ element.classList.remove('how__list--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__list--active');
  });
});

// Аккордион

new Accordion('.accordion');

// Поиск

let openSearch = document.querySelector(".nav__href");
let openSearch2 = document.querySelector(".nav__additional");
let search = document.querySelector(".nav__search-div");
let search2 = document.querySelector(".nav__search__additional-div");
let searchClose = document.querySelector(".search__close");
let searchClose2 = document.querySelector(".search__close__additional");

openSearch.addEventListener("click", function () {
  search.classList.toggle("nav__search-div--active");
  document.body.classList.toggle("stop-scroll");
})

openSearch2.addEventListener("click", function () {
  search2.classList.toggle("nav__search-div__additional--active");
  document.body.classList.toggle("stop-scroll");
})

searchClose.addEventListener("click", () => {
  search.classList.toggle("nav__search-div--active");
  document.body.classList.toggle("stop-scroll");
})

searchClose2.addEventListener("click", () => {
  search2.classList.toggle("nav__search-div__additional--active");
  document.body.classList.toggle("stop-scroll");
})