$(function () {
    
                let iw = $(".imglist li").outerWidth();
           
                //把其他图放到右边
                $(".imglist li").css("left", iw);
                $(".imglist li").eq(0).css("left", 0);
                let imglist = $(".imglist li");
                let num = 0;
                let length = $(".imglist li").length
                let oList = $(".list");
    
                //渲染出list
                imglist.each(function (index, value) {
                    oList.append(`<li>${index}</li>`);
                })
                oList.children().first().addClass("listfocus");
    
    
                //设置定时器，每3秒换一张图片
                let times = setInterval( time , 3000);
    
                //鼠标移到清除定时器
               $("#banner").mouseenter(function(){
                    clearInterval(times);
                })
                //鼠标移出
                $("#banner").mouseleave(function(){
                    times = setInterval( time, 3000);
                })
    
                //下一张
                $(".next").click(function(){
                    
                    
                    imglist.eq(num).stop(true.true).animate({"left":-iw},1000);
                    ++num;
                    num = num > length - 1 ? 0 : num;
                    imglist.eq(num).css("left",iw);
                    imglist.eq(num).stop(true.true).animate({"left":0},1000);
                    listfocus(num);
                   
                })
                //上一张
                $(".pre").click(function(){
                    imglist.eq(num).stop(true.true).animate({"left":iw},1000);
                    --num;
                    num = num < 0 ? length-1 : num;
                    imglist.eq(num).css("left",-iw);
                    imglist.eq(num).stop(true.true).animate({"left":0},1000);
                    listfocus(num);
                })
                //点击list
                oList.on("click","li",function(){
                    let i = $(this).index();
                    if(i != num){
                        listfocus(i);
                        imglist.eq(i).stop(true,true).hide().css("left",0).fadeIn(1000).show();
                        imglist.eq(num).stop(true,true).fadeOut(500,function(){ 
                            $(this).css("left",-iw).fadeIn();
                        });
                        num = i;
                    }
                })
    
    
                //封装焦点跟随
                function listfocus(num){
                    oList.children().eq(num).addClass("listfocus").siblings().removeClass("listfocus");
                }
                //定时器
                function time(){
                    imglist.eq(num).animate({
                        "left": -iw
                    }, 1000);
                    num = ++num > length - 1 ? 0 : num;
                 
                    imglist.eq(num).css("left", iw)
                    imglist.eq(num).animate({
                        "left": 0
                    }, 1000);
    
                    listfocus(num);
                }
    
            })