$(document).ready(function() {

//LOGO ANIMATION

  var logoHover = $('.home-logo');
  //create the query list
  var mediaQuery = window.matchMedia('(min-width: 680px)');
  // Define the callback function for the event listener
  function handleWidthChange(mq) {
    if (mq.matches) {
      logoHover.hover(
        function(evt) {
          event.stopPropagation();
          $('.name-left').css('margin-right', '70px');
          $('.name-right').css('margin-left', '70px');
          $('.logo').css('width', '68px');
        }, function(evt) {
          event.stopPropagation();
          $('.name-left').css('margin-right', '');
          $('.name-right').css('margin-left', '');
          $('.logo').css('width', '');
        }
      );
    } else {
      logoHover.off();
    }
  }
  // Add the callback function as a listener to the query list
  mediaQuery.addListener(handleWidthChange);
  // Run the change handler
  handleWidthChange(mediaQuery);

//HAMBURGER ACTION

  var hamburger = $('.hamburger');
  var nav = $('.nav');

  hamburger.click(function(evt) {
    event.stopPropagation();
    hamburger.toggleClass('is-active');
    nav.toggleClass('open-nav');
  });
});