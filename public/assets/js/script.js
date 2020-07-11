/* eslint-disable linebreak-style */
$(document).ready(() => {
  $('#demo-carousel-auto').carousel();
  setInterval(() => {
    $('#demo-carousel-auto').carousel('next');
  }, 1500);
});
