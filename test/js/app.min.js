/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});


/* Бургер */


/* Фиксированная шапк*/


$(document).ready(function(){
	$(window).on("scroll",function(){
	  var wn = $(window).scrollTop();
		if(wn > 100){
		 $(".burger").css("background","#99BAED");
		}
		else{
		 $(".burger").css("background","inherit");
		}

      if(wn > 100){
         $(".sss").css("background-color","#fff");
        }
        else{
         $(".sss").css("background-color","#99BAED");
        }
	 });
  });


 /* Фиксированная шапка */

 $(function(){
	$nav = $('.mobile');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h){
			$nav.addClass('fixed');
		} else {

			$nav.removeClass('fixed');
		}
	});
});

/* Фиксированная шапк*/
