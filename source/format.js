$(document).ready(function () {
    var desiredHeight = $(window).height() - $("header").outerHeight() - $("footer").outerHeight() - 99;
    $('main').css("min-height", desiredHeight + "px");
    console.log(desiredHeight);
});