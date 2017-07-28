/* ========================================================================
 * Bootstrap: drawer.js v3.3.7
 * http://getbootstrap.com/javascript/#drawers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DRAWER CLASS DEFINITION
  // ======================

  var Drawer = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.drawer-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.drawer-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.drawer')
        }, this))
    }
  }

  Drawer.VERSION  = '3.3.7'

  Drawer.TRANSITION_DURATION = 300
  Drawer.BACKDROP_TRANSITION_DURATION = 150

  Drawer.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Drawer.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Drawer.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.drawer', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('drawer-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.drawer', '[data-dismiss="drawer"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.drawer', function () {
      that.$element.one('mouseup.dismiss.bs.drawer', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move drawers dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.drawer', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for drawer to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Drawer.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Drawer.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.drawer')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.drawer')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.drawer')
      .off('mouseup.dismiss.bs.drawer')

    this.$dialog.off('mousedown.dismiss.bs.drawer')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideDrawer, this))
        .emulateTransitionEnd(Drawer.TRANSITION_DURATION) :
      this.hideDrawer()
  }

  Drawer.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.drawer') // guard against infinite focus loop
      .on('focusin.bs.drawer', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Drawer.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.drawer', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.drawer')
    }
  }

  Drawer.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.drawer', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.drawer')
    }
  }

  Drawer.prototype.hideDrawer = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('drawer-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.drawer')
    })
  }

  Drawer.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Drawer.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('drawer-backdrop ' + animate)
        .appendTo(this.$element)

      this.$element.on('click.dismiss.bs.drawer', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        // if (e.target !== e.currentTarget) return
        if (e.target !== this.$backdrop[0]) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Drawer.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Drawer.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing drawers

  Drawer.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Drawer.prototype.adjustDialog = function () {
    var drawerIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && drawerIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !drawerIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Drawer.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Drawer.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Drawer.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Drawer.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Drawer.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'drawer-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // DRAWER PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.drawer')
      var options = $.extend({}, Drawer.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.drawer', (data = new Drawer(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.drawer

  $.fn.drawer             = Plugin
  $.fn.drawer.Constructor = Drawer


  // DRAWER NO CONFLICT
  // =================

  $.fn.drawer.noConflict = function () {
    $.fn.drawer = old
    return this
  }


  // DRAWER DATA-API
  // ==============

  $(document).on('click.bs.drawer.data-api', '[data-toggle="drawer"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.drawer') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.drawer', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if drawer will actually get shown
      $target.one('hidden.bs.drawer', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
