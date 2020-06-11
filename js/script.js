/* ---------------------------------
------------------------------------
Preloader
-----------------------------------*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

$(document).ready(function () {

    $('.header').height(($window).height());

});
$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

})
    function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.2048, 55.2708),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


    