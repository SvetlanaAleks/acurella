import "select2/dist/js/select2.full";

$(function () {
  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
  });

  $(".js-select--product").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Продукт",
  });
});
