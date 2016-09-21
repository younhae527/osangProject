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

/* Main Title Script : MY늘곁애
$(function(){
	$('.neulneulTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.neulneulBtitle').animate({ left: '16px', top:'9px' }, 1000);
        $('.neulneulTitle').animate({ right: '16px', bottom:'12px' }, 1000);
    });
	$('.infoTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.infoBtitle').animate({ left: '16px', top:'7px' }, 1000);
        $('.infoTitle').animate({ right: '16px', bottom:'14px' }, 1000);
    });
	$('.productTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.productBtitle').animate({ left: '16px', top:'9px' }, 1000);
        $('.productTitle').animate({ right: '16px', bottom:'12px' }, 1000);
    });
	$('.promotionTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.promotionBtitle').animate({ left: '16px', top:'7px' }, 1000);
        $('.promotionTitle').animate({ right: '16px', bottom:'14px' }, 1000);
    });
    $('.customerTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.customerBtitle').animate({ left: '16px', top:'7px' }, 1000);
        $('.customerTitle').animate({ right: '16px', bottom:'14px' }, 1000);
    });
    $('.myneulTitleWrap').bind('mouseenter focusin',function ()  { 
        $('.myneulBtitle').animate({ left: '18px', top:'7px' }, 1000);
        $('.myneulTitle').animate({ right: '17px', bottom:'14px' }, 1000);
    });
});
*/
/* navi event
$(document).ready(function () {
    $(window).scroll(function() {
        var sclTop = $(this).scrollTop();
        if (sclTop < 600)
        { 
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.gnbGrayArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n2 a').removeClass('on');        
        }
        if (sclTop > 600)
        { 
	       $('.neulneulBtitle').animate({ left: '16px', top:'9px' }, 1000);
	       $('.neulneulTitle').animate({ right: '16px', bottom:'12px' }, 1000);

	       $('#navi ul').removeClass('coloR');
	       $('.gnbArea').css('display','block');
	       $('.gnbGrayArea').css('display','none');
	       $('#navi ul li a').removeClass('on');
	       $('#navi ul li.n2 a').addClass('on');        
        }
        if (sclTop > 1230)
        { 
			$('.infoBtitle').animate({ left: '16px', top:'7px' }, 1000);
			$('.infoTitle').animate({ right: '16px', bottom:'14px' }, 1000);

			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
			$('.gnbGrayArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n3 a').addClass('on');        
        }
        if (sclTop > 2000)
        { 
			$('.productBtitle').animate({ left: '16px', top:'9px' }, 1000);
			$('.productTitle').animate({ right: '16px', bottom:'12px' }, 1000);

			$('#navi ul').addClass('coloR');
			$('.gnbArea').css('display','none');
			$('.gnbGrayArea').css('display','block');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n4 a').addClass('on');        
        }
        if (sclTop > 3100)
        { 
			$('.promotionBtitle').animate({ left: '16px', top:'7px' }, 1000);
			$('.promotionTitle').animate({ right: '16px', bottom:'14px' }, 1000);
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.gnbGrayArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n5 a').addClass('on');        
        }
        if (sclTop > 3900)
        { 
			$('.customerBtitle').animate({ left: '16px', top:'7px' }, 1000);
			$('.customerTitle').animate({ right: '16px', bottom:'14px' }, 1000);
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.gnbGrayArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n6 a').addClass('on');        
        }
        if (sclTop > 4700)
        { 
			$('.myneulBtitle').animate({ left: '18px', top:'7px' }, 1000);
			$('.myneulTitle').animate({ right: '17px', bottom:'14px' }, 1000);
			
			$('#navi ul').removeClass('coloR');
			$('.gnbArea').css('display','block');
	        $('.gnbGrayArea').css('display','none');
			$('#navi ul li a').removeClass('on');
			$('#navi ul li.n7 a').addClass('on');        
        }  
  
    });
});
*/
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
