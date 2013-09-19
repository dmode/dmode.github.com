/*
 * scrollme plugin - version 0.1.0 - 12.08.2013 
 * Copyright (c) 2013 Oliver Graf
 */

(function ($) {

    $.fn.scrollme = function (options) {
    
        var settings = $.extend({
            // default settings
            duration: 2000
        }, options);
        
        return this.each(function () { 
            $(this).find('a').bind("click", function(event) {
		      event.preventDefault();
		      var target = $(this).attr("href");
		      $('html,body').animate({
			     scrollTop: $(target).offset().top
		      }, settings.duration, function () {
                  location.hash = target;
              });
            });
        });
    };
    
}(jQuery));