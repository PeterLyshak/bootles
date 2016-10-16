/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';
    
    $(document)
    .on('show.bs.tab.data-api', '.nav-outline [data-toggle="tab"]', function(e) {
        // get active tab
        var $self = $(this);
        var $parentLi = $self.parent('li');
        var $navOutline = $self.closest('.nav-outline');
        var $navProgressBar = $navOutline.find('.progress-bar');
        var paddingLeft = parseInt($self.css('padding-left').replace("px", ""));
        
        if ($parentLi.parent().hasClass('dropdown-menu')) {
            $parentLi = $parentLi.closest('.dropdown');
        }
        
        updateIndicator($parentLi, true);
    });
    
    $('.nav-outline').whenLive(function(el) {
        var $navOutline = $(el);
        
        if ($navOutline.length) {
            var $activeItem = $navOutline.find('> .nav > li.active');
        
            updateIndicator($activeItem, false);
            
            $navOutline.on('resize', function(e) {
                var $this = $(this);
                var $thisActiveItem = $this.find('> .nav > li.active');
        
                updateIndicator($thisActiveItem, false);
            });
        }
    });
    
    function updateIndicator($activeItem, isAnimated) {
        var $navOutline = $activeItem.closest('.nav-outline');
        
        $navOutline.removeClass('unanimated');
        
        if (isAnimated) {
            $navOutline.addClass('unanimated');
        }
        
        var $navProgressBar = $navOutline.find('.progress-bar');
        var paddingLeft = parseInt($activeItem.find('> a').css('padding-left').replace("px", ""));
        
        if ($activeItem.has('dropdown')) {
            //paddingLeft = parseInt($activeItem.find('> .dropdown-toggle').css('padding-left').replace("px", ""));
        }
        
        var itemWidth = $activeItem.outerWidth();
        var itemPosition = $activeItem.position();
        
        $navProgressBar.css({
            width: itemWidth,
            left: itemPosition.left - paddingLeft,
        });
    }

}(jQuery);
