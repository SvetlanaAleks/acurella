import "select2/dist/js/select2.full";
import "slick-carousel";
import Sliders from "./modules/Sliders";

$(function () {
  Sliders.init();
  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
  });

  $(".js-select--product").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Продукт",
  });
});
