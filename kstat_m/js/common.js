<!-- 
// 주소창 자동 닫힘 
window.addEventListener("load", function(){ 
setTimeout(loaded, 100); 

}, false); 

function loaded(){ 
window.scrollTo(0, 1); 
} 
//-->

/* 상단 메뉴 스크립트 */
$(document).ready(function() {

    var $menu = $('nav#menu-gnb');
    var $menu2 = $('nav#menu-jnb'); 
    
    $menu.mmenu({
        slidingSubmenus: false,
        header      : {
            add         : true,
            update      : true,
            title       : 'family site'
        }
    });
    
    $menu2.mmenu({
     position    : 'right',
     header      : {
         add         : true,
         update      : true,
         title       : '메뉴'
     }
    });
    
});



/* 우측슬라이드 */
$(function(){
    $('dl>dd.m1>a').siblings('.rightContent').show();
    $('dl>dd>a').click(function() {
        $('dl>dd>a').removeClass('on');
        $('dl>dd>a').siblings('.rightContent').hide();
        $(this).addClass('on'); 
        $(this).siblings('.rightContent').show();
    });
});

/* 국가메인 상단 슬라이드 */
$(function(){
    $('.bxslider').bxSlider({
      auto: false,
      autoControls: false,
      pager: false
    });
});

/* 국가메인 하단 탭 */
$(function(){
    $(".tabTitle li").eq(0).find("a").addClass("on");
    $(".tabConAll .tab").eq(0).show();
    $(".tabTitle li").click(function(){
        var _tab = $(this).find("a").attr("href");
    $(".tabConAll .tab" + _tab).show().siblings().hide();
    $(this).find("a").addClass("on");
    $(this).siblings().find("a").removeClass("on");
    });
});

/* 레이어팝업스크립트 */
$ (function() {   
   $(".btnLayer").bind('click focusin',function() {
       $('.layerDim').css('display','block');
       $('.layerPop').css('display','block');
    });
   $(".btnLayerClose").bind('click focusin',function() {
       $('.layerDim').css('display','none');
       $('.layerPop').css('display','none');
    });  
});

    