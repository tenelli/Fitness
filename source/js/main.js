import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './vendor/swiper.js';
import {checkTrainersSwiper, checkReviewsSwiper} from './vendor.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {


  // Utils
  // ---------------------------------

  iosVhFix();
  checkTrainersSwiper();
  checkReviewsSwiper();

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

let formName = document.querySelector('[data-name-input]');
let formPhone = document.querySelector('[data-tel-input]');
let form = document.querySelector('[data-form]');
let isStorageSupport = true;
let userNameStorage = '';
let userPhoneStorage = '';

if (form) {
  try {
    userNameStorage = localStorage.getItem('formName');
    userPhoneStorage = localStorage.getItem('formPhone');
  } catch (err) {
    isStorageSupport = false;
  }
}

if (userNameStorage) {
  formName.value = userNameStorage;
  formPhone.value = userPhoneStorage;
}

function checkFillInputField(evt) {
  if (!formName || !formPhone) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('formName', formName.value);
      localStorage.setItem('formPhone', formPhone.value);
    }
  }
}

form.addEventListener('submit', checkFillInputField);

// если нужен запрет ввода, а не сообщение валидации

/* formPhone.addEventListener('keyup', function () {
    formPhone.value = formPhone.value.replace(/[A-Za-zА-Яа-яёЁ]/g, '');
  });
*/

const trainersBlock = document.querySelector('.trainers__block');
if (trainersBlock) {
  trainersBlock.classList.remove('trainers__block--no-js');
}

const trainersButton = document.querySelectorAll('.trainers__button');
if (trainersButton) {
  trainersButton.forEach((button) => {
    button.classList.remove('trainers__button--no-js');
  });
}


const reviewsBlock = document.querySelector('.reviews__block');
if (reviewsBlock) {
  reviewsBlock.classList.remove('reviews__block--no-js');
}

const reviewsButton = document.querySelectorAll('.reviews__button');
if (reviewsButton) {
  reviewsButton.forEach((button) => {
    button.classList.remove('reviews__button--no-js');
  });
}


let gymButton = document.querySelector('.gym__button');
let iframe = document.querySelector('iframe');

if (gymButton && iframe) {
  gymButton.addEventListener('click', () => {
    iframe.classList.add('active');
    iframe.src += '?autoplay=1';

    window.addEventListener('load', () => {
      iframe.src -= '&autoplay=1';
    });
  });
}
