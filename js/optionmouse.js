
if (typeof jQuery === 'undefined') {
    throw new Error('JavaScript requires jQuery')
}

'use strict';


+function ($) {
    'use strict';

    $.fn.optionMouse = function(options){
        options = $.extend({
            template:
            '<div class="_mouse-background">' +
                '<div class="_mouse-container-modal">' +
                    '<div class="_mouse-modal animated pulse">' +
                        '<a href="javascript:;" class="_mouse-modal-close">X</a>'+
                    '</div>' +
                '</div>' +
            '</div>',
            cookies: true
        }, options);
        var modalMouse_element_temp = 0;

        $("body").append("<style>.animated {-webkit-animation-duration: .7s; animation-duration: .7s; -webkit-animation-fill-mode: both;animation-fill-mode: both;} @keyframes pulse {from { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }50% {  -webkit-transform: scale3d(1.05, 1.05, 1.05);  transform: scale3d(1.05, 1.05, 1.05);  } to {  -webkit-transform: scale3d(1, 1, 1);  transform: scale3d(1, 1, 1);  } } @-webkit-keyframes pulse {from { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }50% {  -webkit-transform: scale3d(1.05, 1.05, 1.05);  transform: scale3d(1.05, 1.05, 1.05);  } to {  -webkit-transform: scale3d(1, 1, 1);  transform: scale3d(1, 1, 1);  } } .pulse { -webkit-animation-name: pulse;animation-name: pulse;}</style>");
        if (options.cookies === true) {
            $("body").append("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js'></script>");
        }

        var cookiesSave = function () {
            $('._mouse-background').animate({opacity: 0}, 300, function() {
                $('._mouse-background').remove();
            });
            $.cookie('_cookieModal', 'open', { expires: 0.1, path: '/' });
            modalMouse_element_temp = 0
        };
        var modalMouse = function () {

            $('body').append(options.template);


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
                'background': 'rgba(0,0,0,.4)'
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
            $('._mouse-container-modal').css({
                'padding': '10px',
                'position': 'absolute',
                'top': '50%',
                'left': '0',
                'right': '0',
                'max-width': '780px',
                'width': '100%',
                'min-height': '460px',
                'margin': '-230px auto 0'
            }).click(function(e) {
                e.stopImmediatePropagation();
            });
            $('._mouse-modal').css({
                'background': '#fff',
                'height': '440px',
                'text-align': 'center'
            });
            $('._mouse-modal-close').on('click', function () {
                cookiesSave();
            });
        };

        var cookiesFn = function () {

            if (!$.cookie('_cookieModal')) {
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

$(document).optionMouse();