//Automatically set height of grid elements based on highest grid elements inside of row.
//Set class ".auto-height" on .row  in order to activate
//!!!do not use class .auto-height if the row' children contains accordions or elements with changing heights
/*
$(document).ready(function () {
    var body = $("body"),
        rTime,
        timeOut = false,
        delta = 10,
        tb = $(".toggle-btn"),
        h,
        w,
        hMax,
        fSize,
        fSizeNow = parseFloat(body.css("font-size").slice(0, -2)),
        th;


    SetHeightOfGridElements(h, hMax, w, th);

    $(window).resize(function () {
        rTime = new Date();
        if (timeOut === false) {
            timeOut = true;
            setTimeout(resizeEnd, delta);
        }
    });

    $(".access-focus").bind("focus blur", function () {
        setTimeout(function () {
            SetHeightOfGridElements(h, hMax, w, th);
        }, 20);
    });

    setInterval(function () {
        fSize = parseFloat(body.css("font-size").slice(0, -2));
        if (fSize !== fSizeNow) {
            SetHeightOfGridElements(h, hMax, w, th);
            fSizeNow = fSize;
        }
    }, 100);

    tb.click(function () {
        SetHeightOfGridElements(h, hMax, w, th);
    });

    function resizeEnd() {
        if (new Date() - rTime < delta) {
            setTimeout(resizeEnd, delta);
        } else {
            timeOut = false;
            SetHeightOfGridElements(h, hMax, w, th);
        }
    }

    function SetHeightOfGridElements(h, hMax, w, th) {
        $(".auto-height").each(function () {
            th = $(this).children();
            th.css("height", "auto");
            h = 0;
            hMax = 0;
            th.each(function () {
                h = $(this).height();
                if (h > hMax) {
                    hMax = h; 
                }
            });

            th.each(function () {
                th = $(this);
                w = Math.ceil(100 * th.outerWidth()) / parseFloat(th.parent().css('width'));
                if (w === 100) {
                    th.css("height", "auto");
                } else if (w < 100) {
                    th.height(hMax);
                }
            });

        });
    }
});
*/

(function ($) {
  'use strict';
  $.fn.autoHeight = function () {
    
  };
}(jQuery))

$(document).ready(function () {
  'use strict';
  $('.auto-height').autoHeight();
});
