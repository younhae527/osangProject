/* jquery */
//<![CDATA[ 
$(window).load(function(){
    var $cs = $('.customSelect').customSelect(); 
    $('input.myClass').prettyCheckable();
});//]]>

/* LNB */

/*$(function(){
	$('.topMenu').bind('click', function() {
		$('.lnb').animate({'left':'0'}, 1000);
	});
	$('.close').bind('click', function() {
		$('.lnb').animate({'left':'-100%'}, 800);
	});	
});
*/

/*$(function(){
    var $win = $(window);
    $win.scroll(function() { $('#header_nav').css('top', $win.scrollTop() + 'px'); });
});
*/

/* education */
$(function(){
	$('.winterArea ul li a').bind('focusin', function() {
		$(this).addClass('on');
	});
	$('.winterArea ul li a').bind('focusout', function() {
		$(this).removeClass('on');
	});
});

//The menu on the left
$(document).ready(function() {
				
	var $menu = $('nav#menu-gnb');
	var $menu2 = $('nav#menu-jnb');	
	
	$menu.mmenu({
		slidingSubmenus: false,
		header		: {
			add			: true,
			update		: true,
			title		: '전체메뉴'
		}
	});
	
	$menu2.mmenu({
		position	: 'right',
		header		: {
			add			: true,
			update		: true,
			title		: '퀵메뉴'
		}
	});
	
});

//The menu on the right
$(document).ready(function() {
	


});

$(document).ready(function() {
	$("select[name='select_v']").change(function() {
		if($(this).val() == "v_1") {
		$('.change01').css('display','block'); 
		$('.change02').css('display','none'); 
		$('.change03').css('display','none');  
		$('.change04').css('display','none');  	
		$('.change05').css('display','none');  			
		} else if($(this).val() == "v_2")  {
		$('.change01').css('display','none'); 
		$('.change02').css('display','block'); 
		$('.change03').css('display','none');  
		$('.change04').css('display','none');  	
		$('.change05').css('display','none');  		
		}else if($(this).val() == "v_3")  {
		$('.change01').css('display','none'); 
		$('.change02').css('display','none'); 
		$('.change03').css('display','block');  
		$('.change04').css('display','none');  	
		$('.change05').css('display','none');  		 
		}else if($(this).val() == "v_4")  {
		$('.change01').css('display','none'); 
		$('.change02').css('display','none'); 
		$('.change03').css('display','none');  
		$('.change04').css('display','block');  	
		$('.change05').css('display','none');  		  
		}else  {
		$('.change01').css('display','none'); 
		$('.change02').css('display','none'); 
		$('.change03').css('display','none');  
		$('.change04').css('display','none');  	
		$('.change05').css('display','block');  		
		}
	});
});

/*  layerPOP */

$(function(){
	$('.popclose').bind('click', function() {
		$('.layerPopup').css('display','none'); 
	});
	/* 본인인증 */	
	$('.icheck').bind('click', function() {
		$('.icheckPop').css('display','block'); 
	});	
		/* 주소찾기 */	
	$('.address').bind('click', function() {
		$('.addressPop').css('display','block'); 
	});	
});


/* 기업 단체 명  */

$(document).ready(function() {
	$("input[name='select_p']").change(function() {
		if($(this).val() == "p_1") {
		$('.centerName').slideToggle(500);
		$('.centerName2').css('display','none'); 			
		} else if($(this).val() == "p_2")  {
		$('.centerName').css('display','none'); 
		$('.centerName2').slideToggle(500);		
		}else  {
		$('.centerName').css('display','none'); 
		$('.centerName2').css('display','none'); 		
		}
	});
});



$(function(){
	$('.vw_gnb').bind('click', function() {
		$('.footer').slideToggle(); 
	});

	$('#mm-blocker').bind('click', function() {
		$('.footer').slideToggle(); 
	});
	$('#mm-blocker').bind('touchend', function(e) {
		$('.footer').slideToggle(); 

});	
});

