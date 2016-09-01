/* 메인01 메뉴 오버 */
$(function(){
    $('.menuList li').bind('mouseenter focusin',function ()  {
        $(this).children('.textBg').css('display','block');
    });  
    $('.menuList li').bind('mouseleave focusout',function ()  {
        $(this).children('.textBg').css('display','none');
    });             
});

$(function(){
	$('.menuList li.on').bind('mouseenter focusin',function ()  {
        $(this).children('.textBg').css('display','block');
    }); 
     $('.menuList li.on').bind('mouseleave focusout',function ()  {
        $(this).children('.textBg').css('display','block');
    });   
    $('.menuList li.on').children('.textBg').css('display','block');           
});

/* 메인01 상단 메뉴 아이콘 열고 닫기 */
$(function(){
	$('.openRnb').bind('click',function ()  { 
		$('.rnb').animate({'left':'0'}, 500);
	});
	$('.rnbClose').bind('click',function ()  {
		$('.rnb').animate({'left':'-400px'}, 500); 
	});	
});