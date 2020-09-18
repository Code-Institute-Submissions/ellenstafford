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


//        The following code was based upon: "https://teamtreehouse.com/community/how-to-close-toggle-overlay-menu-when-clicking-navigation-item-anchor-link"


$('.navbar-toggler').click(function() {
$('.navbar-collapse').addClass('open').show();
});

// Closes the menu after clicking link

$('.navbar-collapse li').on('click', function(){
  
 $(".navbar-collapse").removeClass('open').hide();
 if($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('show');
  }
});