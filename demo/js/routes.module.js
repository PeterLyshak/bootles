(function() {
    'use strict'
    
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
                templateUrl: 'partials/welcome.html',
                controller: 'welcomeController'
            }).
            when('/bootstrap', {
                templateUrl: 'partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/bootstrap/:component', {
                templateUrl: 'partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/css', {
                templateUrl: 'partials/css.html',
                controller: 'cssController'
            }).
            when('/components', {
                templateUrl: 'partials/components.html',
                controller: 'componentsController'
            }).
            // when('/portfolio/:phoneId', {
                // templateUrl: 'partials/phone-detail.html',
                // controller: 'PhoneDetailCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
        
    }
})();

