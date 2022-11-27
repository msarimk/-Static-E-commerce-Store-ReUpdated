// For Sticky Navbar

document.addEventListener("DOMContentLoaded", function(){
   window.addEventListener('scroll', function() {
       if (window.scrollY > 123) {
         document.getElementById('navbar_top').classList.add('fixed-top');
      
         // add padding top to show content behind navbar
         navbar_height = document.querySelector('.navbar').offsetHeight;
         document.body.style.paddingTop = navbar_height + 'px';
       } else {
         document.getElementById('navbar_top').classList.remove('fixed-top');
          // remove padding top from body
         document.body.style.paddingTop = '0';
       } 
   });
 }); 
 
// For Navbar Color Chnage & Hover After Scroll

$(document).ready(function(){
   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 123) {
        $("#navbar_top").css("background-color" , "#212529" );
        $(".nv").css("color" ,  "#C7C8C9" );
        $(".ac").css("color" ,  "white" );
        $(".navbar-toggler").css("color" , "#C7C8C9" )
        $(".navbar-toggler").css("border-color" , "#C7C8C9" )
        $(document).ready(function() {
         $('.nv').hover(function(){
               $(this).css({"color":"white"});
            }, 
            function(){
               $(this).css({"color":"#C7C8C9"});
            }
         );
      });  
      }


      else{
         $("#navbar_top").css("background-color" , "#fff");  	
         $(".nv").css("color" ,  "#6e6e6e" );
         $(".ac").css("color" ,  "#181818" );
         $(".navbar-toggler").css("color" , "#6e6e6e" )
         $(".navbar-toggler").css("border-color" , "#6e6e6e" )
         $(document).ready(function() {
            $('.nv').hover(function(){
                  $(this).css({"color":"#494949"});
               }, 
               function () {
                  $(this).css({"color":"#6e6e6e"});
               }
            );
         });
         }

   })
 })

// For Loader

$(document).ready(function(){
   setTimeout(function(){
    $(".load").fadeOut()
    $(".start").fadeOut()
    $("#navbar_top").show()
   },1000)
})




//  For Categories Like Button


$(".wishlist1").click(function(){
   $(".wishlist1").css("color", "red",  )
 
})

  $(".wishlist2").click(function(){
   $(".wishlist2").css("color", "red " );

})
$(".wishlist3").click(function(){
   $(".wishlist3").css("color", "red " );

})
$(".wishlist4").click(function(){
   $(".wishlist4").css("color", "red " );

})
$(".wishlist5").click(function(){
   $(".wishlist5").css("color", "red " );

})
$(".wishlist6").click(function(){
   $(".wishlist6").css("color", "red " );

})


// Contact Page Work


$(document).ready(function(){
   $(".contact100-btn-show").click(function(){
      document.getElementById("contact100-btn-show").style.display = "none";
   })
})

$(document).ready(function(){
   $(".contact100-btn-hide").click(function(){
      document.getElementById("contact100-btn-show").style.display = "block";
   })
})



// Page Scrolling Effect

// function reveal() {
//    var reveals = document.querySelectorAll(".reveal");
 
//    for (var i = 0; i < reveals.length; i++) {
//      var windowHeight = window.innerHeight;
//      var elementTop = reveals[i].getBoundingClientRect().top;
//      var elementVisible = 150;
 
//      if (elementTop < windowHeight - elementVisible) {
//        reveals[i].classList.add("active");
//      } else {
//        reveals[i].classList.remove("active");
//      }
//    }
//  }
 
//  window.addEventListener("scroll", reveal);
 


