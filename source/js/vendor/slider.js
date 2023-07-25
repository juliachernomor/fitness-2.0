import swiper from './swiper';

const createNewSlider1 = () => {
  new swiper('.swiper--1', {
    navigation: {
      nextEl: '.trainer__swiper-next',
      prevEl: '.trainer__swiper-prev',
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
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
  });
};

const createNewSlider2 = () => {
  new swiper('.swiper--2', {
      slidesPerView: 1,
        navigation: {
          nextEl:'.reviews__swiper-next',
          prevEl:'.reviews__swiper-prev',
        },
        breakpoints: {
              1200: {
                slidesPerView: 1,
              }
      }});
    }

export {createNewSlider1, createNewSlider2};

