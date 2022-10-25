$(function() {
  'use strict';

  //verification code
  var vcode = $('#vcode');

  function goToNextInput(e) {
    var key = e.which,
      t = $(e.target),
      sib = t.next('input');

    if (key != 9 && (key < 48 || key > 57)) {
      e.preventDefault();
      return false;
    }

    if (key === 9) {
      return true;
    }

    if (!sib || !sib.length) {
      sib = vcode.find('input').eq(0);
    }
    sib.select().focus();
  }

  function onKeyDown(e) {
    var key = e.which;

    if (key === 9 || (key >= 48 && key <= 57)) {
      return true;
    }

    e.preventDefault();
    return false;
  }
  
  function onFocus(e) {
    $(e.target).select();
  }

  vcode.on('keyup', 'input', goToNextInput);
  vcode.on('keydown', 'input', onKeyDown);
  vcode.on('click', 'input', onFocus);
  //END verification code


  var $sli_user_photo = $("#sli-user-photo");
  if ( $sli_user_photo.length ){
    $sli_user_photo.carousel({
      interval: false,
    })
  }

  var $tutorial_slider = $("#tut_sl");
  if ( $tutorial_slider.length ){
    $tutorial_slider.carousel({
      interval: false,
      touch: false,
    })
  }

  $("#mod-user-close").on("click", function (){
    $("#mod-user-photo").modal("hide"); 
  })
  $("#m-modal-close").on("click", function (){
    $("#main-modal").modal("hide"); 
  })
  
  $(".m-modal-close").on("click", function (){
    $(".m-modal").modal("hide"); 
  })

  
  var $slide_panel = $("#slide-panel");
  if ( $slide_panel.length ){
    $(".sld-panel-toogle").on("click", function (){
      $slide_panel.toggleClass("active");
    });
  }


  function filterDropdownList() {

    $('body').on('click', '.input-s_toogle', function() {
      if ( $(this).parent().hasClass("active") ){
        $('.input-s.active').removeClass("active");
      }else{
        $('.input-s.active').removeClass("active");
        $(this).parent().addClass("active");
      }
    });

    $(document).click(function(event) { 
      var $target = $(event.target);
      if(!$target.closest('.input-s.active').length) {
        $('.input-s.active').removeClass("active");
      }        
    });

  	$(".input-s").find("input, radio").on("change", function () {
  	  var $main_parent =  $(this).parents(".input-s");
  	  var $text_block = $main_parent.find(".input-s_t");
  	  var this_html = "";
  	  $main_parent.find("input:checked").each(function(){
  	    this_html += "<span>" + $(this).siblings(".sport-list_txt").html() + "</span>";
  	  })
  	  if ( this_html.length ){
  	    $main_parent.addClass("activated");
  	    $text_block.html(this_html);
  	  }else{
  	    $text_block.html(this_html);
  	    $main_parent.removeClass("activated");
  	  }
  	})

  	$(".input-s").each(function () {
  		var $this = $(this);
  		var $text_block = $this.find(".input-s_t");
  		var this_html = "";
  		$this.find("input:checked").each(function(){
  		  this_html += "<span>" + $(this).siblings(".sport-list_txt").html() + "</span>";
  		})
  		if ( this_html.length ){
  		  $this.addClass("activated");
  		  $text_block.html(this_html);
  		}else{
  		  $text_block.html(this_html);
  		  $this.removeClass("activated");
  		}
  	});

  };

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  var is_mobile = window.mobilecheck();

  var slide_panel_inn = $("#sld-panel_inn");
  if ( !is_mobile && slide_panel_inn.length ){
    slide_panel_inn.mCustomScrollbar({
      theme:"dark"
    });
  }

  var $star_rating = $('.star-rating');
  if ( $star_rating.length ){
    $star_rating.barrating({
      theme: 'css-stars'
    });
  }

  var $reviews_star_rating = $('.reviews_rating');
  if ( $reviews_star_rating.length ){
    $reviews_star_rating.barrating({
      theme: 'css-stars',
      readonly: true
    });
  }

  var $textarea_resize = $('.textarea-resize');
  if ( $textarea_resize.length ){
    autosize($textarea_resize);
  }

  var $date_filter = $('.date-filter');
  if ( $date_filter.length ){
    $date_filter.flatpickr({
      disableMobile: "true"
    });
  }
  var $date_filter = $('.time-filter');
  if ( $date_filter.length ){
    $date_filter.flatpickr({
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
      // disableMobile: "true"
    });
  }

  function reviewsMasonry() {
    var container = document.querySelector('#reviews');
    if (container) {

      var grid_sizer = document.querySelector('#reviews >.reviews_col:first-of-type');

      var msnry = new Masonry( container, {
        columnWidth: grid_sizer,
        percentPosition: true,
      });

      $(window).on( "load", function(){
        msnry.layout()
      });

    };
  };

  function maskPhoneEmail() {
    var $el = $('.mask-phone-email');
    if ( !$el.length ){return}

    window.phone_mask = false;

    $el.on("focus", function () {
      $el.on("input", function () {

        if ( $el.val()[0] == 7 || $el.val()[0] == 8 || $el.val()[0] == "+") {
        	if ( !phone_mask) {
        		if ( $el.val()[0] == 7 || $el.val()[0] == 8) {
        			var this_val = "+";
        			this_val += $el.val();
        			this.value = this_val;
        		}
	        	$('.mask-phone-email').mask('+0 000 000-00-00');
	            phone_mask = true;
        	}
        }else{
      		$el.unmask();
      		phone_mask = false;
        }
      })
    })
  };
  
  function maskPhone() {
    var $el = $('.phone-mask');
    if ( !$el.length ){return}
    $el.mask('+0 000 000-00-00');
  };


  function selectSports() {
    $('body').on('click', '.company_profile_info', function() {
      $(this).toggleClass("active");
    });
  };

  function sendFormFilesToggle() {
    $('body').on('click', '.message-send-files', function() {
      $("#message-send-more").toggleClass("active");
    });
  };
  
  function chatToggleVisibility() {
    $('body').on('click', '.msg-back', function() {
      $(".col-msg-l").toggleClass("active");
      $(".col-msg-r").toggleClass("active");
    });
    $('body').on('click', '.messages-list li', function() {
      $(".col-msg-l").toggleClass("active");
      $(".col-msg-r").toggleClass("active");
    });

  };

  function mobileSettingToogle() {
    $('body').on('click', '.set_ttl-toggle', function() {
      $(".set_pag").slideToggle();
      $(".set_l_b").slideToggle();
    });
  };



  $(document).ready(function(){
	 filterDropdownList();
   maskPhoneEmail();
   maskPhone();
   $('.ttt').tooltip({ boundary: 'window' })
   reviewsMasonry();
   selectSports();
   sendFormFilesToggle();
   chatToggleVisibility();
   mobileSettingToogle();
  });
  // $('.ttt').tooltip('show')
  $(window).on( "load", function(){});
  $(window).on( "resize", function(){});
  $(window).on( "scroll", function() {});

});
