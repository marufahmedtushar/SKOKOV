/**
 *
 *  sticky2 navigation
 *
 */

let nav = $(".naav");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".blogpage").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    nav.addClass("sticky2");
  } else {
    nav.removeClass("sticky2");
  }
});