const swiper = new Swiper('.reviews-swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.reviews-slider-button-next',
    prevEl: '.reviews-slider-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
});
