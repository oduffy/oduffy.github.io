$(function() {

$('.dropdown-toggle').click(function(){
 $(this).next('.dropdown-menu').toggle();
});

$(document).click(function(e) {
 var target = e.target;
 if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
   $('.dropdown-menu').hide();
 }
});

});

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat:51.500152, lng: -0.126236},
      zoom: 9
  });
}
