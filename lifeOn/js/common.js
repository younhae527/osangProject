/* Main Header Script : Visual
$(function(){
    $('.visual').bxSlider({
        auto: true,
        autoControls: false,
        pager: false,
        controls: false,
        pause:3000
    });
});
*/
/* Main Header Script : Banner */
$(function(){
    $('.headerBanner').bxSlider({
        auto: true,
        autoControls: false,
        pager: true,
        controls: false
    });
});

/* Main Title Script : MY늘곁애*/
$(function(){
	$('.neulneulTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.textWrapTitleBold.clr0d4d94').css('visibility', 'visible');
        $('.textWrapTitleBold.clrfade7d').css('visibility', 'visible');
    });
	$('.infoTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.textWrapTitleBold.clrb4ef67').css('visibility', 'visible');
    });
	$('.productTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.textWrapTitleBold.clr00968a').css('visibility', 'visible');
    });
	$('.promotionTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.promotionBtitle').css('visibility', 'visible');
        $('.promotionTitle').css('visibility', 'visible');
    });
    $('.customerTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.customerBtitle').css('visibility', 'visible');
        $('.customerTitle').css('visibility', 'visible');
    });
    $('.myneulTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.myneulBtitle').css('visibility', 'visible');
        $('.myneulTitle').css('visibility', 'visible');
    });
});

/* navi event */
$(document).ready(function () {
    $(window).scroll(function() {
        var sclTop = $(this).scrollTop();

        if (sclTop < 350)
        {
            $('.subGnbArea').css('display','none');
        }
        if (sclTop > 350)
        {
            $('.subGnbArea').css('display','block');
        }
        if (sclTop < 600)
        { 
            $('#navi ul').removeClass('coloR');
            $('.gnbArea').css('display','block');
            $('.mainGnbArea').css('display','none');
            $('#navi ul li a').removeClass('on');
            $('#navi ul li.n2 a').removeClass('on');
        }
        if (sclTop > 600)
        { 
            $('.textWrapTitleBold.clr0d4d94').css('visibility', 'visible');
            $('.textWrapTitleBold.clrfade7d').css('visibility', 'visible');

            $('#navi ul').removeClass('coloR');
            $('.gnbArea').css('display','block');
            $('.mainGnbArea').css('display','none');
            $('#navi ul li a').removeClass('on');
            $('#navi ul li.n2 a').addClass('on');
        }
        if (sclTop > 1230)
        { 
			$('.textWrapTitleBold.clrb4ef67').css('visibility', 'visible');

			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
			$('.mainGnbArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n3 a').addClass('on');        
        }
        if (sclTop > 2000)
        { 
			$('.textWrapTitleBold.clr00968a').css('visibility', 'visible');

			$('#navi ul').addClass('coloR');
			$('.gnbArea').css('display','none');
			$('.mainGnbArea').css('display','block');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n4 a').addClass('on');        
        }
        if (sclTop > 3100)
        {
			$('.textWrapTitleBold.clr139da9').css('visibility', 'visible');
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.mainGnbArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n5 a').addClass('on');        
        }
        if (sclTop > 3900)
        { 
			$('.textWrapTitleBold.clrfec02c').css('visibility', 'visible');
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.mainGnbArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n6 a').addClass('on');        
        }
        if (sclTop > 4700)
        { 
			$('.textWrapTitleBold.clrffe065').css('visibility', 'visible');
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.mainGnbArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n7 a').addClass('on');        
        }
    });
});

/* section Event */

$(function(){
    $('#section_01').bind('mouseenter focusin',function ()  {   
    });     
    $('#section_02').bind('mouseenter focusin',function ()  { 
    });
    $('#section_03').bind('mouseenter focusin',function ()  {   
        //$('.obJ21').animate({'top':'145px'}, 1000); 
    });   
    $('#section_04').bind('mouseenter focusin',function ()  {   
       // $('.obJ31').animate({'bottom':'0'}, 1000); 
        //$('.obJ32').animate({ left: '-150', top:'-480' }, 2000);
        //$('.obJ33').animate({ left: '415', top:'240' }, 1000); 
        //$('.obJ34').fadeIn(3000);
        //$('.obJ35').animate({ top:'275', left: '750' }, 2000);            
    });
    $('#section_05').bind('mouseenter focusin',function ()  {   
   
    });  
    $('#section_06').bind('mouseenter focusin',function ()  {   
        //$('.obJ53').animate({rotate: '360deg', scale: '1.25'}, 1000);       
    });   
    $('#section_07').bind('mouseenter focusin',function ()  {       
    });                          
});

/* 전체메뉴 레이어 팝업 */
$(function(){
    $('.gnbArea > a').click(function(){
        $('#dim').css('display', 'block');
        $('#allMenu').css('display', 'block');
    });
    $('.allMenu__menuWrap__btn-allMenu').click(function(){
        $('#dim').css('display', 'none');
        $('#allMenu').css('display', 'none');
    });
});