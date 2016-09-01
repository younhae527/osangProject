/* 20150827_수정 */
$(function(){
   $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('#gotop').show();
        } else {
            $('#gotop').hide();
        }
    });
});

/* 통계가이드_20150811_추가 */
$(function(){
  $(".useInfoTitle li").click(function(){
    $(".useInfoTitle li a").removeClass('active');
    $(this).children('a').addClass('active'); 
  }); 
  $(".useInfoTab01").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab01").css('display','block');
  }); 
  $(".useInfoTab02").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab02").css('display','block');
  });
  $(".useInfoTab03").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab03").css('display','block');
  }); 
  $(".useInfoTab04").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab04").css('display','block');
  });
   $(".useInfoTab05").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab05").css('display','block');
  }); 
  $(".useInfoTab06").click(function(){
    $(".useInfoContent .useInfoTab").css('display','none');
    $(".useInfoTab06").css('display','block');
  });
});


/* 20150731_추가 */
$(function() {   
   /* 국가검색 */
   $('.searchCountry').click(function() {
       $('.searchCountryWrap').show();
       $('.subHeaderWrap').hide();
       $('#container').hide();
    });
   $('.searchCloseBtn').click(function() {
       $('.searchCountryWrap').hide();
       $('.subHeaderWrap').show();
       $('#container').show();
    });  
   
   /* 픔목검색 */
   $('.searchProduct').click(function() {
       $('.searchProductWrap').show();
       $('#container').hide();
       $('.subHeaderWrap').hide();
    });
   $('.searchCloseBtn').click(function() {
       $('.searchProductWrap').hide();
        $('#container').show();
       $('.subHeaderWrap').show();
    }); 
    
  /* 업체검색 */
   $('.searchCompany').click(function() {
       $('.searchCompanyWrap').show();
       $('#container').hide();
       $('.subHeaderWrap').hide();
    });
   $('.searchCloseBtn').click(function() {
       $('.searchCompanyWrap').hide();
        $('#container').show();
       $('.subHeaderWrap').show();
    }); 
  
  /* 대륙검색 */
   $('.searchContinent').click(function() {
       $('.searchContinentWrap').show();
       $('#container').hide();
       $('.subHeaderWrap').hide();
    });
   $('.searchCloseBtn').click(function() {
       $('.searchContinentWrap').hide();
        $('#container').show();
       $('.subHeaderWrap').show();
    }); 

   /* 지역검색 */
   $('.searchArea').click(function() {
       $('.searchAreaWrap').show();
       $('#container').hide();
       $('.subHeaderWrap').hide();
    });
   $('.searchCloseBtn').click(function() {
       $('.searchAreaWrap').hide();
        $('#container').show();
       $('.subHeaderWrap').show();
    });
});

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
    $('dl.menuLeft>dd.m2>a').addClass('on');
    $('.rightContentWrap').find('.rightConM2').show();

	
    $('dl.menuLeft>dd.m1>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM1").css('display','block');
    });

	$('dl.menuLeft>dd.m2>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM2").css('display','block');
    });

	$('dl.menuLeft>dd.m3>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM3").css('display','block');
    });

	$('dl.menuLeft>dd.m4>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM4").css('display','block');
    });

	$('dl.menuLeft>dd.m5>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM5").css('display','block');
    });

	$('dl.menuLeft>dd.m6>a').click(function() {
        $('dl.menuLeft>dd>a').removeClass('on');
		$(".rightContentWrap .rightContent").css('display','none');
		$(this).addClass('on');
		$(".rightConM6").css('display','block');
    });
});

/* 우측 하위메뉴 슬라이드 *//* 20150717_수정 */
$ (function() {
	$('.rightContent p > a').click(function() {
		if($(this).attr("class") == "on"){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		}
		if($(this).attr("class") == "on"){
			$(this).parent().next().slideDown("slow");
			$(this).parent().next().siblings('ul').slideUp("slow");
			$(this).parent().next().siblings('ul').prev('p').children('a').removeClass('on');
		}else{
			$(this).parent().next().slideUp("slow");
			$(this).parent().next().siblings('ul').slideUp("slow");
		}
	});
});

/* 국가메인 상단 슬라이드 */
$(function(){
     slider = $('.bxslider').bxSlider({
      auto: false,
      autoControls: false,
      pager: false,
      
       /* 한국,일본,칠레,러시아,싱가포르.태국,말레이시아,인도네시아일 경우 .type2 display:block; 그 외일 경우 .type1 display:block; */
      /*onSliderLoad: function(){
        // do funky JS stuff here
        //alert('Slider has finished loading. Click OK to continue!');
      },
      onSlideAfter: function(){
        // do mind-blowing JS stuff here
        //alert('A slide has finished transitioning. Bravo. Click OK to continue!');
      }*/
    });
    /*slider.goToSlide(0);*/
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
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}/* 20150727_추가 */

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

/* 서브슬라이드 */
$ (function() {   
   $('.tabContent .button03').click(function() {
      $(this).children('a').toggleClass('on');
      $(this).parent().parent().find('.selectWrap').toggleClass('on').slideToggle(500);
   });
});

/* 서브공통 탭 */
$(function(){
  $(".tab_type1 li").click(function(){
    $(".tab_type1 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab01").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab01").css('display','block');
  });  
  $(".conTab02").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab02").css('display','block');
  });    
  $(".conTab03").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab03").css('display','block');
  }); 

  $(".tab_type2 li").click(function(){
    $(".tab_type2 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab01").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab01").css('display','block');
  });  
  $(".conTab02").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab02").css('display','block');
  });    
  $(".conTab03").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab03").css('display','block');
  });  
  $(".conTab04").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab04").css('display','block');
  }); 

  $(".tab_type3 li").click(function(){
    $(".tab_type3 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab01").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab01").css('display','block');
  });  
  $(".conTab02").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab02").css('display','block');
  });    
  $(".conTab03").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab03").css('display','block');
  });  
  $(".conTab04").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab04").css('display','block');
  }); 
  $(".conTab05").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab05").css('display','block');
  });  
  $(".conTab06").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab06").css('display','block');
  });    
  $(".conTab07").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab07").css('display','block');
  });

 /* 20150728_추가 */
  $(".tab_type4 li").click(function(){
    $(".tab_type4 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab01").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab01").css('display','block');
  });  
  $(".conTab02").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab02").css('display','block');
  });   

  $(".tab_type5 li").click(function(){
    $(".tab_type5 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab01").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab01").css('display','block');
  });  
  $(".conTab02").click(function(){
    $(".tabConContent .conTab").css('display','none');
    $(".conTab02").css('display','block');
  });    
});

/* 검색 예외 탭 */ /* 20150801_수정 */
$(function(){ 

  $(".tab_type11 li").click(function(){
    $(".tab_type11 li a").removeClass('active');
    $(this).children('a').addClass('active');
    $(this).children('a').find('span').addClass('on');  
    }); 
  $(".conTab11").click(function(){
    $(".tabcon_type4 .conTab_01").css('display','none');
    $(".conTab11").css('display','block');
  });  
  $(".conTab12").click(function(){
    $(".tabcon_type4 .conTab_01").css('display','none');
    $(".conTab12").css('display','block');
  });    
  $(".conTab13").click(function(){
    $(".tabcon_type4 .conTab_01").css('display','none');
    $(".conTab13").css('display','block');
  }); 

});



/* 리스트/그래프버튼 클릭시 이벤트 */
$ (function() { 
  $('.button01>a').addClass('on');
  $('.tableWrap').css('display','block');  
  $(".button02>a").bind('click focusin',function() {
    $(this).addClass('on');
    $('.graphWrap').css('display','block');
    $('.tableWrap').css('display','none');
    $('.button01>a').removeClass('on');  
  });
  $(".button01>a").bind('click focusin',function() {
    $(this).addClass('on');
    $('.tableWrap').css('display','block');
    $('.graphWrap').css('display','none');
    $('.button02>a').removeClass('on');
  });  
});

/* 해외통계 테이블 안 더보기 버튼레이어팝업 */
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$ (function() {   
 $(".numMore").bind('click focusin',function() {
     $('.layerDim').css('display','block');
     $('.numMorePop').center().css('display','block');
  });
 $(".btnLayerClose").bind('click focusin',function() {
     $('.layerDim').css('display','none');
     $('.numMorePop').css('display','none');
  });  
});

/* 테이블 짝홀수 배경색 변경 */
$(document).ready(function(){
  $('table.table_subType1 tr:odd').css("backgroundColor","#f9f9f9");         // odd 짝수
  $('table.table_subType1 tr:even').css("backgroundColor","#fff");   // even 홀수
}); 

/* subTopBottom */
$(document).ready(function () {
    $('#gotop').css('position', 'absolute');
    $(window).scroll(function() {
        var sclTop = $(this).scrollTop();
        if (sclTop > 200)
        {
            $('#gotop').css('position', 'fixed').css('bottom', '20px');        
        }
        else 
        {$('#gotop').css('position','absolute').css('bottom','20px');}
  
    });
});

/* 그래프 슬라이드 */
$ (function() {   
   $('.table_subType1 td a.downCellSlideBtn').click(function() {
      $(this).toggleClass('on');
      $('.downCellSlide').slideToggle(200);
   });
});

/* 20150721_추가 */
/* 국내통계 탭슬라이드 */
$(document).ready(function(){

  var Lindex = $('.tab_type3 li').find('.on').parent('li').index() + 1;
  var maxL = $('.tab_type3 li').length - 3;
  if(Lindex > maxL){
    Lindex = maxL;
  }

  $("#s_menu").touchSlider({
    roll : false,
    view : 1,
    page : Lindex,
    btn_prev : $(".rotator_btn").find(".rotator_prev"),
    btn_next : $(".rotator_btn").find(".rotator_next")
  });
  $('.tab_type3 a').bind('click', function(){
    $(this).parents('.tab_type3').find('a').removeClass('on');
    $(this).addClass('on');
  });
  if($('.subConWrap #s_menu li:first-child').css('left') == '0px'){
    $('.rotator_prev').addClass('none');
  } else {
    $('.rotator_prev').removeClass('none');
  }
  if($('.subConWrap #s_menu li:last-child').prev().prev().css('left') == '0px'){
    $('.rotator_next').addClass('none');
  } else {
    $('.rotator_next').removeClass('none');
  }
});






