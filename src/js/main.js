import layout from "./global/layout";
import "select2/dist/js/select2.full";
import Sliders from "./modules/Sliders";
import Popup from "./modules/Popup";
import Controls from "./modules/Controls";
import Menu from "./modules/Menu";

$(function () {
  Sliders.init();
  Popup.init();
  Controls.init();
  Menu.init();
  const selectPlaceholder = {
    ru: "Продукт",
    en: "Product",
  };

  layout.layoutHandler({
    afterResize: (layout) => {
      $(".js-select--product").select2({
        minimumResultsForSearch: Infinity,
        placeholder: selectPlaceholder[locale],
      });
    },
  });

  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
  });

  $(".js-select--product").select2({
    minimumResultsForSearch: Infinity,
    placeholder: selectPlaceholder[locale],
  });
});
