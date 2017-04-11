(function ($) {
  'use strict';

  //POLYFILLS
  //-----------------------------------------------
  //Request animation frame polyfill
  //http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    return setTimeout(f, 1000 / 60);
  };
  //-----------------------------------------------



  //PRIVATE METHODS
  //-----------------------------------------------
  //get the height of the highest element in a set of elements
  function getMaxHeight(elements) {
    var height = 0,
      heightMax = 0;
    elements.each(function () {
      height = $(this).height();
      if (height > heightMax) {
        heightMax = height;
      }
    });
    return heightMax;
  }

  //return the outer width of an element in percentage 
  function checkElementWidth(element, wrapper) {
    return Math.ceil(100 * element.outerWidth()) / parseFloat(wrapper.css('width'));
  }

  //set height of columns based on higest column in the row
  //do not consider columns with width: 100%
  function autoHeight(elementsArray) {
    var i = 0,
      elementsArrayLength = elementsArray.length,
      heightMax = 0,
      column = '';
    for (i; i < elementsArrayLength; i = i + 1) {
      //set height to auto on each column to prevent calculation errors after first function call
      elementsArray[i].columns.css('height', 'auto');
      //call getMaxHeigh to retrive the highest column in each wrapper
      heightMax = getMaxHeight(elementsArray[i].columns);
      //check if element width is 100%
      //if width is not 100%, then set element height
      elementsArray[i].columns.each(function () {
        column = $(this);
        if (checkElementWidth(column, elementsArray[i].wrapper) < 100) {
          column.height(heightMax);
        } else {
          column.css('height', 'auto');
        }
      });
    }
  }
  //-----------------------------------------------


  //PLUGIN
  //-----------------------------------------------
  $.fn.autoHeight = function (userSettings) {
    //set defaultSettings object and declare all needed variables by the plugin
    var defaultSettings = {
        columnsClass: 'c',
        textZoomCheck: true,
        textZoomCheckFrequency: 333
      },
      settings = '',
      elementsArray = [],
      body = $('body'),
      bodyFontSize = 0,
      bodyFontSizeNow = parseFloat(body.css('font-size').slice(0, -2)); //get font-size of body to prevent double function call on load -> on load bodyFontSizeNow must be equal to bodyFontSize.
    this.settings = $.extend(defaultSettings, userSettings);

    settings = this.settings;


    //-----------------------------------------------
    //INIT PLUGIN
    //-----------------------------------------------
    //get the elements, save this in an object and push to array
    this.each(function (index1) {
      var elementsObj = {};
      elementsObj.wrapper = $(this);
      elementsObj.columns = $(this).children('.' + settings.columnsClass);
      //push to array
      elementsArray.push(elementsObj);
    });

    //event handlers
    //window resize and load
    $(window).on('load resize', function () {
      window.requestAnimationFrame(function () {
        autoHeight(elementsArray);
      });
    });

    //check for text zoom at regular intervals
    if (settings.textZoomCheck) {
      setInterval(function () {
        //when zoom occurs the font-size of the body element changes
        //by watching fort changes on font-size we can detect a zoom event
        bodyFontSize = parseFloat(body.css('font-size').slice(0, -2));
        if (bodyFontSize !== bodyFontSizeNow) {
          window.requestAnimationFrame(function () {
            autoHeight(elementsArray);
          });
          bodyFontSizeNow = bodyFontSize;
        }
      }, settings.textZoomCheckFrequency);
    }

    //custom event for triggering calculation of height
    $(window).on('auto-height:calculate', function () {
      autoHeight(elementsArray);
    });
  };
}(jQuery));

$(document).ready(function () {
  'use strict';
  $('.auto-height').autoHeight({
    columnsClass: 'c',
    textZoomCheck: false,
    textZoomCheckFrequency: 333
  });
});
