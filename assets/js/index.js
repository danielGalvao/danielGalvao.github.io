/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function(){

    $(".post-content").fitVids();

    // Calculates Reading Time
    $('.post-content').readingTime({
      readingTimeTarget: '.post-reading-time',
      wordCountTarget: '.post-word-count',
    });

    // Creates Captions from Alt tags
    $(".post-content img").each(function() {
      // Let's put a caption if there is one
      if($(this).attr("alt") && !$(this).hasClass("emoji")) {
        $(this).wrap('<figure class="image"></figure>')
          .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
      }
    });

  });

  // Test cycle
  setTimeout(function(){
    TweenMax.staggerFrom('.custom-links a', 1, {
        opacity: 0,
        backgroundColor: red,
        cycle: {
          x: [30, -30]
        }
      }, .2);
  },5000);

}(jQuery));
