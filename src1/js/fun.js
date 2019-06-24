function setTime() {
    var span = document.querySelector('.my_module')
     .querySelectorAll("span");
        // window.sessionStorage.setItem('')
        // var date121=new Date();
        // date121.setTime(date121.getTime()+30*60*1000);
        
        // window.localStorage.setItem="key=3; expires="+date121.toGMTString(); 



   var time = 3700;
   var itemId = setInterval(function () {
     time--;
 
     if (time < 0) {
       clearInterval(itemId);
       return;
     }
     var h = Math.floor(time / 3600);
     var m = Math.floor(time % 3600 / 60);
     var s = time % 60;
     span[0].innerText = Math.floor(h / 10);
     span[1].innerText = h % 10;
     span[3].innerText = Math.floor(m / 10);
     span[4].innerText = m % 10;
     span[6].innerText = Math.floor(s / 10);
     span[7].innerText = s % 10;
   }, 1000);


//    function setCookie(key,val,iDay) {
//     //key：键名；val：键值；iDay：失效时间
//     var now = new Date();
//     now.setDate(now.getDate() + iDay);
//     document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';//设置一个站点内的文件可以共享此cookie
// }



//设置date为当前时间+30分
  //  localStorage.setItem(key,value);
// date.setTime(date.getTime()+30*60*1000); //设置date为当前时间+30分
//将date赋值给expires





// nihao


// window.onload = function(){
//   // 拿到标签
//   let div = document.querySelector("div");
//   // 页面刷新提取之前的cookie值
//   div.style.left = (cookie.getitem("left") || 50) + "px";
//   div.style.top  = (cookie.getitem("top") || 50) + "px";
//   // 鼠标按下事件
//   div.onmousedown = function(e){
//       // 计算指针与div的相对位置
//       let distanceX = e.clientX - div.offsetLeft;
//       let distanceY = e.clientY - div.offsetTop;
//       // 鼠标在页面中滑动
//       document.onmousemove = function(event){
//           div.style.left = event.clientX - distanceX + "px";
//           div.style.top  = event.clientY - distanceY  + "px";
//       }                
//   }
//   // 鼠标松开，结束滑动事件
//   div.onmouseup = function(){
//       document.onmousemove = null;
//       // 把图片的最新位置存到cookie
//       cookie.setitem("left",div.offsetLeft);
//       cookie.setitem("top",div.offsetTop);
//   }
// }


}