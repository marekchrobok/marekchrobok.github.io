

//Skrypt, który zmienia obrazki hamburgera na close i z powrotem, oraz pokazuje/chowa div HamburgerToggle
$(document).ready(function(){
        
  // Zmienna, dzięki której wiemy, jaki obrazek jest obecnie wyświetlany. h - hamburger, c - close
  var image_tracker = 'h';

      $('.Hamburger, .HamburgerScroll').on('click',function(){

        $('.HamburgerToggle').fadeToggle(600);

          if(image_tracker=='h'){
            document.getElementById('Ham1').src = 'portfolio/close.png';
            document.getElementById('Ham2').src = 'portfolio/close.png';
            image_tracker = 'c'
          }else{
            document.getElementById('Ham1').src = 'portfolio/hamburger.png';
            document.getElementById('Ham2').src = 'portfolio/hamburger.png';
            image_tracker = 'h'
          }
      })
})

    
    // Skrypt, który odpowiada za kontrolę divów typu sticky
    var stickyHeaders = (function() {

        var $window = $(window),
            $stickies;
      
        var load = function(stickies) {
      
          if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {
      
            $stickies = stickies.each(function() {
      
              var $thisSticky = $(this).wrap('<div class="followWrap" />');
        
              $thisSticky
                  .data('originalPosition', $thisSticky.offset().top)
                  .data('originalHeight', $thisSticky.outerHeight())
                    .parent()
                    .height($thisSticky.outerHeight()); 			  
            });
      
            $window.off("scroll.stickies").on("scroll.stickies", function() {
                _whenScrolling();		
            });
          }
        };
      
        var _whenScrolling = function() {
      
          $stickies.each(function(i) {			
      
            var $thisSticky = $(this),
                $stickyPosition = $thisSticky.data('originalPosition');
      
            if ($stickyPosition <= $window.scrollTop()) {        
              
              var $nextSticky = $stickies.eq(i + 1),
                  $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
      
              $thisSticky.addClass("fixed");
      
              if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
      
                $thisSticky.addClass("fixed").css("top", $nextStickyPosition); /* Było ustawione na relative, popraw, jeśli coś się popsuje */
              }
      
            } else {
              
              var $prevSticky = $stickies.eq(i - 1);
      
              $thisSticky.removeClass("fixed");
      
              if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
      
                $prevSticky.removeClass("relative").removeAttr("style");
              }
            }
          });
        };
      
        return {
          load: load
        };
      })();
      
      $(function() {
        stickyHeaders.load($(".Sticky"));
    });


    //Skrypt odpowiedzialny za pokazywanie/chowanie divu HamburgerScroll
    (function($) {          
      $(document).ready(function(){                    
      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 100) {
              $('.HamburgerScroll').fadeIn(500);
          } else {
              $('.HamburgerScroll').fadeOut(250);
          }
          });
      });
    })(jQuery);
      