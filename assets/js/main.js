/* menu */
$("#toggler").on("click", () => {
  $("#menu").toggleClass("nav_left_active");
});

/* modal */

$('#modal_open, #overlay, #modal_close').click(() => {
  $('#modal, #overlay').toggleClass('d-none');  
});

/* swiper */

const swiperProduct = new Swiper('.swiperProduct', {
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperMain = new Swiper('.swiperMain', {
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
