var elixir = require('laravel-elixir');

elixir.config.production == true;
elixir.config.sourcemaps = true;

if (elixir.config.production == true) {
    process.env.NODE_ENV = 'production';
}

require('laravel-elixir-ngtemplatecache');

/**
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your Laravel application. By default, we are compiling the Sass
| file for our application, as well as publishing vendor resources.
|
*/

elixir(function(mix) {
    
    mix.ngTemplateCache('/**/*.html', 'demo/js', 'resources/assets/ng-templates', {
        templateCache: {
            standalone: true
        },
        htmlmin: {
            collapseWhitespace: true,
            removeComments: true
        }
    });
    
  
    // Mix ReactJS via Browserify
    mix.browserify([
        '../ng/app.module.js',
        '../ng/routes.module.js',
        '../ng/main.controllers.js',
        '../ng/component.colors.controller.js',
        '../ng/plugin.swiper.controller.js',
    ], 'demo/js/app.ng.js');
    
    mix.styles([
		'../../../vendor/bootstrap/bootstrap-3.3.7/css/bootstrap.css',
		'../../../vendor/bootstrap-social/bootstrap-social-5.0.0/bootstrap-social.css',
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/css/ripples.css',
        '../../../vendor/bootstrap-slider/bootstrap-slider-7.1.1/dist/css/bootstrap-slider.css',
		'../../../vendor/animate.css/animate.css-3.5.2/animate.css',
		'../../../vendor/font-awesome/Font-Awesome-4.6.3/css/font-awesome.css',
		'../../../vendor/flag-icon-css/flag-icon-css-2.3.1/css/flag-icon.css',
		'../../../vendor/jquery-ui/jquery-ui-1.12.0.custom/jquery-ui.css',
		'../../../vendor/swiper/Swiper-3.3.1/dist/css/swiper.css',
		'../../../vendor/glidejs/glidejs-2.0.9/dist/css/glide.core.css',
		'../../../vendor/jquery-raty/raty-2.7.0/lib/jquery.raty.css',
		'../../../vendor/jquery-select2/select2-3.5.4/select2.css',
		'../../../vendor/jquery-select2-bootstrap/select2-bootstrap-css-1.4.6/select2-bootstrap.css',
		'../../../vendor/datatables/DataTables-1.10.12/media/css/jquery.dataTables.min.css',
	], 'dist/css/bootles.min.css');
    
    mix.sass([
        'bootles-ext.scss',
    ], 'dist/css/bootles-ext.min.css');
    
    /*
    mix.sass([
        'bootles-theme-base.scss',
    ], 'dist/css/bootles-theme-base.min.css');
    */
    
    // Mix jQuery core and plugins
    mix.scripts([
        // Standalone / Vanilla
        '../../../vendor/lodash/lodash-4.14.1/dist/lodash.js', // Lo-Dash
        '../../../vendor/json2/json2.js', // JSON2
        '../../../vendor/modernizr/Modernizr-2.8.3/modernizr.js', // JSON2
        '../../../vendor/moment/moment-2.14.1/min/moment.min.js', // Moment
        '../../../vendor/moment-range/moment-range-2.2.0/dist/moment-range.js', // Moment Range
        '../../../vendor/wow/wow-1.1.2/dist/wow.js', // WOW
        
        // jQuery Core
        '../../../vendor/jquery/jquery-1.12.0.js', // jQuery
        '../../../vendor/jquery/jquery-migrate-1.3.0.min.js', // jQuery Migrate
        '../../../vendor/jquery-ui/jquery-ui-1.12.0.custom/jquery-ui.js', // jQuery UI
        '../../../vendor/jquery-file-upload/jQuery-File-Upload-9.12.5/js/vendor/jquery.ui.widget.js', // jQuery UI Widget
        '../../../vendor/jquery-ui-touch-punch/jquery-ui-touch-punch-0.2.3/jquery.ui.touch-punch.js', // jQuery UI Touch Punch
        '../../../vendor/jquery-pp/jquerypp-2.0.2/dist/global/jquerypp.js', // jQuery PP
        
        // jQuery Utilities
        '../../../vendor/jquery-whenLive/whenLive-3.1.0/jquery.whenlive.custom.js', // WhenLive
        '../../../vendor/jquery-serializeObject/jQuery.serializeObject-2.0.3/jquery.serializeObject.js', // Serialize Object
        '../../../vendor/handlebars/handlebars-4.0.5/handlebars-v4.0.5.js', // Handlebars
        
        // Bootstrap
		'../../../vendor/bootstrap/bootstrap-3.3.7/js/bootstrap.js', // Bootstrap Core
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/js/material.js', // Bootstrap Material
		'../../../vendor/bootstrap-material-design/bootstrap-material-design-0.3.0/dist/js/ripples.js', // Bootstrap Material Ripples
        '../../../vendor/bootstrap-slider/bootstrap-slider-7.1.1/dist/bootstrap-slider.js', // Bootstrap Slider
        
        // jQuery Presentation
        '../../../vendor/jquery-lazyload/jquery_lazyload-1.9.7/jquery.lazyload.js', // Lazyload
        '../../../vendor/jquery-lazyload/jquery_lazyload-1.9.7/jquery.scrollstop.js', // Lazyload Scrollstop
        '../../../vendor/swiper/Swiper-3.3.1/dist/js/swiper.jquery.js', // Swiper Carousel
        '../../../vendor/glidejs/glidejs-2.0.9/dist/glide.js', // Swiper Carousel
        '../../../vendor/sticky-kit/sticky-kit-1.1.2/jquery.sticky-kit.js', // Sticky Kit
        
        // jQuery Forms
        '../../../vendor/jquery-spinner/jquery.spinner-0.2.1/dist/js/jquery.spinner.js', // Spinner
        '../../../vendor/jquery-select2/select2-3.5.4/select2.js', // Select2
        '../../../vendor/jquery-select2/select2-placecomplete/jquery.placecomplete.js', // Placecomplete
        '../../../vendor/jquery-raty/raty-2.7.0/lib/jquery.raty.js', // Raty
        '../../../vendor/jquery-mask/jQuery-Mask-Plugin-1.14.0/dist/jquery.mask.js', // Mask
        
        // jQuery File Upload
        '../../../vendor/jquery-file-upload/jQuery-File-Upload-9.12.5/js/jquery.iframe-transport.js', // Iframe Transport
        '../../../vendor/jquery-file-upload/jQuery-File-Upload-9.12.5/js/jquery.fileupload.js', // Core
        '../../../vendor/jquery-file-upload/jQuery-File-Upload-9.12.5/js/jquery.fileupload-process.js', // Process
        
        // Datatables
        '../../../vendor/datatables/DataTables-1.10.12/media/js/jquery.dataTables.js', // Datatables Core
        '../../../vendor/datatables/DataTables-1.10.12/media/js/dataTables.bootstrap.js', // Datatables Bootstrap
        
        // Bootles
        '../../../resources/assets/js/bootles-ext.js',
        '../../../resources/assets/js/drawer.js',
	], 'dist/js/bootles.min.js');
});
