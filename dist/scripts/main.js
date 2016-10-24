$(document).ready(function () {

  var listItem = $('.works__list__item');

  thumb = $('.thumbnail');

  listItem.on('click', function () {

    var filter = $(this).text();

    listItem.removeClass('works__list__item--active');
    $(this).toggleClass('works__list__item--active');

    if (filter == 'All') {
      thumb.show();
    } else {
      thumb.hide();
      thumb.filter("." + filter).show();
    }
  });
});