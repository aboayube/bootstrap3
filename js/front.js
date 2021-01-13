/*global alert,prompt*/
$(document).ready(function (){
    
    $('html').niceScroll();
   $('.carousel').carousel({
       //تحكم بسرعة الكارسور
       interval:5000
                           }); 
    
    //show color option div when click on the gear
    $('.gear-x').click(function(){
       $('.coloroption').fadeToggle(2000);
        
    });
    //change theme Color on click
    //eq(0) اول عنصر من القائم
    //eq(1) ثاني عنص
   
   $('.coloroption ul li').eq(0).css("backgroundColor","red").end();
      $('.coloroption ul li').eq(1).css("backgroundColor","pink").end();
      $('.coloroption ul li').eq(2).css("backgroundColor","deeppink").end();
      $('.coloroption ul li').eq(3).css("backgroundColor","yellow").end();
      $('.coloroption ul li').eq(3).css("backgroundColor","blue").end();
    $('.coloroption ul li').click(function(){
         $("link[href*='thema']").attr("href",$(this).attr('data-value'));
  
        //    console.log( $("link[href*='thema']"))  ;
    });
         $(document).ready(function() {
             //shiw the scroll
            $('body').css('overflow',"auto");
        $('.overlay h2').fadeOut(1000,function(){
            $(this).parent().fadeOut(1000,function(){
                $(this).remove();
                
            });
        });
      });
    var scroll=$('.scroll-top');
    $(document).scroll(function(){
        if($(this).scrollTop()>=700){
            scroll.show();
        }else{
            scroll.hide();
        }
        scroll.click(function(){
           $('html,body').animate({scrollTop:0},600); 
        });
    });
});