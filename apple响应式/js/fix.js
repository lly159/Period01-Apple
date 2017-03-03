$(function(){        
        //获取要定位元素距离浏览器顶部的距离
        var navH = $(".mainGrayCenterSopportBox").offset().top;
        //滚动条事件
        $(window).scroll(function(){
                //获取滚动条的滑动距离
                var scroH = $(this).scrollTop();
                //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
                if(scroH >=  navH){
                        $(".mainGrayCenterSopportBox").css({"position":"fixed","top":0,"left":0,"background":"#ffffff","border-bottom":"1px solid #e2e2e2"});
                        $(".mainGrayCenterSopport").css({"width":"1000"+"px","margin":"0 auto","border":"none"});
                }
                else if(scroH < navH){
                        $(".mainGrayCenterSopportBox").css({"position":"static","margin":"0 auto","background":"transparent","border":"none"});
                        $(".mainGrayCenterSopport").css({"width":"100%","border-bottom":"1px solid #999"});
                }
        })
})