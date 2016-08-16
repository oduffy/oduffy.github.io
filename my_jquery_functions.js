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

