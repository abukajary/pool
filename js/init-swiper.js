"use strict";

var swiperPool = new Swiper(".pool-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  initialSlide: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const poolSliderBtnPrev = document.querySelector(".slide-prev");
const poolSliderBtnNext = document.querySelector(".slide-next");
poolSliderBtnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  swiperPool.slidePrev();
});
poolSliderBtnNext.addEventListener("click", (e) => {
  e.preventDefault();
  swiperPool.slideNext();
});

var swiper = new Swiper(".goods-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    483: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1218: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
