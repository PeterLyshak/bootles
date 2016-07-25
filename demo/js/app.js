var myApp = angular.module('myApp', ['ngRoute', 'myAppControllers'], function($compileProvider) {
        // 
});

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/welcome.html',
                controller: 'IndexCtrl'
            }).
            when('/bootstrap', {
                templateUrl: 'partials/bootstrap.html',
                controller: 'BootstrapCtrl'
            }).
            when('/bootstrap/:component', {
                templateUrl: 'partials/bootstrap.html',
                controller: 'BootstrapCtrl'
            }).
            when('/css', {
                templateUrl: 'partials/css.html',
                controller: 'CssCtrl'
            }).
            when('/components', {
                templateUrl: 'partials/components.html',
                controller: 'ComponentsCtrl'
            }).
            when('/form', {
                templateUrl: 'partials/form.html',
                controller: 'FormCtrl'
            }).
            when('/form-pep', {
                templateUrl: 'partials/form-pep.html',
                controller: 'FormPepCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            }).
            // when('/portfolio/:phoneId', {
                // templateUrl: 'partials/phone-detail.html',
                // controller: 'PhoneDetailCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
    }]);
		