(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    
    function config($routeProvider, $locationProvider, $httpProvider) {
        // $httpProvider.defaults.headers.common['X-PJAX'] = true;
        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // $locationProvider.html5Mode(true);
        
        $routeProvider.
            when('/', {
                templateUrl: 'main/welcome.html',
                controller: 'welcomeController'
            }).
            when('/bootstrap', {
                templateUrl: 'main/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/bootstrap/:component', {
                templateUrl: 'main/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/css', {
                templateUrl: 'main/css.html',
                controller: 'cssController'
            }).
            when('/plugins/:plugin', {
                templateUrl: 'main/plugins.html',
                controller: 'pluginsController'
            }).
            // when('/portfolio/:phoneId', {
                // templateUrl: 'demo/partials/phone-detail.html',
                // controller: 'PhoneDetailCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
        
    }
})();

