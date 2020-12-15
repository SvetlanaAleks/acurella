import "slick-carousel";
const Sliders = (function () {
  "use strict";
  const newsSlider = $(".js-news-slider");
  const headerSlider = $(".js-header-slider");
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
        responsive: [
          {
            breakpoint: 891,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      });
    },
    initHeaderSlider: function () {
      headerSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots slick-dots--light",
        fade: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 641,
            settings: {
              dots: false,
            },
          },
        ],
      });
    },
    init: function () {
      Sliders.initNewsSlider();
      Sliders.initHeaderSlider();
    },
  };
})();

export default Sliders;
