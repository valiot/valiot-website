$(document).ready(function () {
  jQuery(document).ready(function($) {
    $('.walkThrough-slider').unslider({
      autoplay: false,
      infinite: true,
      nav: true,
      arrows: {
        prev: '<a class="unslider-arrow prev"><img src="/img/arrow-left.svg" alt="" /></a>',
        next: '<a class="unslider-arrow next"><img src="/img/arrow-right.svg" alt="" /></a>'
      }
    });
  });
});
