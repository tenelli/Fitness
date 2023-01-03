import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './vendor/swiper.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

function isEnterKey(evt) {
  return evt.key === 'Enter';
}

let tabs = document.querySelectorAll('[data-tab]');
let options = document.querySelectorAll('[data-option]');

if (tabs && options) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', ()=> {
      tabs.forEach((elem) => {
        elem.classList.remove('is-active');
        tab.classList.add('is-active');
      });
    });
  });

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', ()=> {
      options.forEach((option) => {
        option.classList.add('is-hidden');
        options[i].classList.remove('is-hidden');
      });
    });

    tabs[i].addEventListener('focusin', ()=> {
      tabs[i].addEventListener('keydown', (evt)=> {
        if (isEnterKey(evt)) {
          options.forEach((option) => {
            option.classList.add('is-hidden');
            options[i].classList.remove('is-hidden');
          });
          tabs.forEach((elem) => {
            elem.classList.remove('is-active');
            tabs[i].classList.add('is-active');
          });
        }
      });
    });
  }
}


/* global Swiper */
/* eslint no-undef: "error" */

const swiper1 = new Swiper('.trainers__swiper', {
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
});


const swiper2 = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});

