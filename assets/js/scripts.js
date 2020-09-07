//        The following code was
//        based upon:
//        "https://www.codeply.com/go/62Roy6RDOa"

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar, .navbar-brand').addClass('affix');
  } else {
    $('.navbar, .navbar-brand').removeClass('affix');
  }
});


//        The following code was
//        based upon:
//        "https://teamtreehouse.com/community/how-to-close-toggle-overlay-menu-when-clicking-navigation-item-anchor-link"

//  Closes the navbar fullscreen overlay menu when 
//  a navlink is clicked.

$('.navbar-toggler').click(function() {
  $(this).toggleClass('active');
  $('.navbar-collapse').toggleClass('open').show();
 });


// Closes the menu after clicking link

$('.navbar-collapse li').on('click', function(){
   $(".navbar-collapse").hide();
   $(".navbar-toggler").removeClass("active");
});
