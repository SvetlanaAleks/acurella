const Sliders = (function () {
  "use strict";
  const newsSlider = $(".js-news-slider");
  return {
    initNewsSlider: function () {
      newsSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow:
          '<button class="prev"><i class="fico fico-arrowSlider"></i></button>',
        nextArrow:
          '<button class="next"><i class="fico fico-arrowSlider"></i></button>',
        dotsClass: "slick-dots slick-dots--dark",
      });
    },
    init: function () {
      Sliders.initNewsSlider();
    },
  };
})();

export default Sliders;
