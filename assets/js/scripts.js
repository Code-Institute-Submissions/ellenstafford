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