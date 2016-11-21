
if (typeof jQuery === 'undefined') {
    throw new Error('JavaScript requires jQuery')
}

'use strict';


+function ($) {
    'use strict';

    $.fn.optionMouse = function(options){
      options = $.extend({
            discount: '30',
            not_discount: '39.95',
            of_discount: '24.95',
            url: '#'
            // cookies: true
        }, options);
      
        var modalMouse_element_temp = 0;
        var TEMPLATE = 
            '<div class="_mouse-background">' +
                '<div class="_mouse-container-modal">' +
                    '<div class="_mouse-modal animated pulse">' +
                        '<a href="javascript:;" class="_mouse-modal-close">×</a>'+
                        '<div class="_mouse-header"><p><span>Wait!</span><br/>Join this site with<br/><strong>'+options.discount+'% discount</strong></p></div>'+
                            '<div class="_mouse-content">' +
                                '<span class="_mouse-con-1">for just</span><br/>' +
                                '<span class="_mouse-con-2">'+options.not_discount+'$</span><br/>' +
                                '<span class="_mouse-con-3">'+options.of_discount+'$</span><br/>' +
                                '<p class="_mouse-con-4">per month</p>' +
                                '<a href="'+options.url+'" class="_mouse-con-btn">GET DISCOUNT</a>' +
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';
        
        $("body").append("<style>._mouse-modal,._mouse-modal *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}._mouse-modal{line-height:1.2;font-family:Roboto,sans-serif}._mouse-modal p{margin:0 0 10px}._mouse-modal-close{color:#eee;font-size:36px;line-height:36px;text-decoration:none!important;display:block;text-align:center;width:30px;height:30px;position:absolute;top:-39px;right:-8px}._mouse-modal-close:active,._mouse-modal-close:focus,._mouse-modal-close:hover{color:#686767}._mouse-header{padding:10px 0;color:#fff;background:#6e6e6e;background:-moz-linear-gradient(top,#6e6e6e 0,#343434 100%);background:-webkit-linear-gradient(top,#6e6e6e 0,#343434 100%);background:linear-gradient(to bottom,#6e6e6e 0,#343434 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6e6e6e', endColorstr='#343434', GradientType=0);position:relative}._mouse-header:before{content:'';position:absolute;width:0;height:0;left:50%;margin-left:-25px;border:25px solid transparent;border-top-color:#343434;border-bottom:0;bottom:-25px}._mouse-header p{text-shadow:0 3px 0 rgba(0,0,0,.6);font-size:30px;text-transform:uppercase;color:#fff;line-height:40px}._mouse-header p span{font-size:45px;line-height:45px}._mouse-header p strong{font-size:40px;line-height:40px;color:#8ac53f}._mouse-content{padding:25px 10px}._mouse-content ._mouse-con-1{font-size:45px;text-transform:uppercase;color:#000;line-height:1.1}._mouse-content ._mouse-con-2{font-size:30px;color:#545454;font-weight:300;text-decoration:line-through}._mouse-content ._mouse-con-3{font-size:71px;color:#8ac53f;line-height:72px;text-shadow:0 3px 0 #e5e5e5;font-weight:900}._mouse-content ._mouse-con-4{font-size:22px;color:#000}._mouse-content ._mouse-con-btn{text-transform:uppercase;font-family:inherit;display:inline-block;padding:9px 30px;margin-bottom:0;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;border-radius:4px;background:#8ac53f;color:#fff;text-decoration:none!important;font-size:30px;transition:all .2s ease;-moz-transition:all .2s ease;-webkit-transition:all .2s ease;-ms-transition:all .2s ease;-o-transition:all .2s ease}._mouse-content ._mouse-con-btn.hover,._mouse-content ._mouse-con-btn:active,._mouse-content ._mouse-con-btn:hover{background-color:#73a632}._mouse-content ._mouse-con-btn:active{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);-moz-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}</style>");
        $("body").append("<style>.animated {-webkit-animation-duration: .7s; animation-duration: .7s; -webkit-animation-fill-mode: both;animation-fill-mode: both;} @keyframes pulse {from { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }50% {  -webkit-transform: scale3d(1.05, 1.05, 1.05);  transform: scale3d(1.05, 1.05, 1.05);  } to {  -webkit-transform: scale3d(1, 1, 1);  transform: scale3d(1, 1, 1);  } } @-webkit-keyframes pulse {from { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }50% {  -webkit-transform: scale3d(1.05, 1.05, 1.05);  transform: scale3d(1.05, 1.05, 1.05);  } to {  -webkit-transform: scale3d(1, 1, 1);  transform: scale3d(1, 1, 1);  } } .pulse { -webkit-animation-name: pulse;animation-name: pulse;}</style>");
       

        // if (options.cookies === true) {
        //     $("body").append("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js'></script>");
        // }

        var cookiesSave = function () {
            $('._mouse-background').animate({opacity: 0}, 300, function() {
                $('._mouse-background').remove();
            });
            // $.cookie('_cookieModal', 'open', { expires: 0.1, path: '/' });
            modalMouse_element_temp = 1
        };
        var modalMouse = function () {
            $('body').append(TEMPLATE);

            $('._mouse-background').css({
                'position': 'fixed',
                'z-index': '1040',
                'top': '0px',
                'left': '0px',
                'bottom': '0',
                'right': '0',
                'zoom': '1',
                'width': '100%',
                'height': '100%',
                'margin': '0px',
                'padding': '0px',
                'display': 'block',
                'overflow': 'auto',
                'background': 'rgba(0,0,0,.2)'
            }).on('click', function () {
                cookiesSave();
            });
            $('._mouse-background-modal').css({
                'position': 'fixed',
                'z-index': '1050',
                'top': '0px',
                'left': '0px',
                'bottom': '0',
                'right': '0',
                'zoom': '1',
                'width': '100%',
                'height': '100%',
                'margin': '0px',
                'padding': '0px',
                'display': 'block',
                'overflow-x': 'hidden',
                'overflow-y': 'auto'
            });
            $('._mouse-modal').css({
                'background': '#fff',
                'min-height': '480px',
                'text-align': 'center',
                'border': '8px solid #8ac53f',
                'box-shadow': '0 0 35px 5px rgba(0, 0, 0, 0.22)'
            });
            var _mouse_height = $('._mouse-container-modal').height();
            $('._mouse-container-modal').css({
                'padding': '0px',
                'position': 'absolute',
                'top': '50%',
                'left': '0',
                'right': '0',
                'max-width': '400px',
                'width': '100%',
                'min-height': '460px',
                'margin': '-'+((parseInt(_mouse_height+15)/2))+'px auto 0'
            }).click(function(e) {
                e.stopImmediatePropagation();
            });


            $('._mouse-modal-close').on('click', function () {
                cookiesSave();
            });



        };

        var cookiesFn = function () {

            if (modalMouse_element_temp == 0) {
                modalMouse();
            }

        };
        var Mouse = function(){


            $(this).mouseleave( function(e){
                if (e.clientY <= 0) {
                    if (  modalMouse_element_temp == 0 ) {
                        cookiesFn();
                        modalMouse_element_temp = 1;
                    }
                }
            });

        };

        return this.each(Mouse);

    };
}(jQuery);