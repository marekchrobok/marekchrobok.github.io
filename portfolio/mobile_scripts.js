    
    

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

    //Skrypt odpowiedzialny za kontrolowanie pozycji top divu HamburgerToggle
    (function($) {          
      $(document).ready(function(){                    
      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 100) {
              $(".HamburgerToggle").css({ top: '6%' });
          } else {
              $(".HamburgerToggle").css({ top: '20%' });
          }
          });
      });
  })(jQuery);



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
      