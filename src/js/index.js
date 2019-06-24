$(function () {


    $(".nav-box ul li").hover(function () {
        $(this).children("ul").stop(true,true).slideToggle();
      })
    


// 滚动

 $(document).scroll(function() {
            var scroH = $(document).scrollTop(); 
        console.log(scroH);
    var contentH = $("#banner").offset().top; 
    console.log(contentH);
  
 
 
    // 滚动高度
            
           
                if (contentH<=scroH) {
                    $('.header').addClass("active")

                }else{
                    $('.header').removeClass("active")
                   
                }
                
          
                
              

             
     
        });


})