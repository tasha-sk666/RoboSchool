import Swiper, { Navigation,  Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.team__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.team__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.team__slider-btn-next',
    prevEl: '.team__slider-btn-prev',
  },
});
