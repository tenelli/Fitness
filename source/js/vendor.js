// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* global Swiper */

const trainersSwiper = document.querySelector('.trainers__swiper');

const checkTrainersSwiper = () => {
  if (trainersSwiper) {
    const swiper = new Swiper('.trainers__swiper', {
      direction: 'horizontal',
      loop: true,
      allowTouchMove: true,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
    });
  }
};

const reviewsSwiper = document.querySelector('.reviews__swiper');

const checkReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper('.reviews__swiper', {
      direction: 'horizontal',
      loop: false,
      autoHeight: true,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
};


export {checkTrainersSwiper, checkReviewsSwiper};
