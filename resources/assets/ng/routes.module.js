(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(config);
    
    // config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            // Index
            .state('index', {
                url: '/',
                templateUrl: 'main/welcome.html',
                controller: 'welcomeController',
            })
            
            
            // Bootstrap
            .state('bootstrap', {
                url: '/bootstrap',
                templateUrl: 'main/bootstrap.html',
                controller: 'bootstrapController',
            })
            .state('bootstrapComponent', {
                url: '/bootstrap/:component',
                templateUrl: 'main/bootstrap.html',
                controller: 'bootstrapController',
            })
            
            // Components
            .state('components', {
                url: '/components',
                templateUrl: 'main/components.html',
                controller: 'componentsController'
            })
            .state('componentsComponent', {
                url: '/components/:component',
                templateUrl: 'main/components.html',
                controller: 'componentsController'
            })
            
            // Plugins
            .state('plugins', {
                url: '/plugins',
                templateUrl: 'main/plugins.html',
                controller: 'pluginsController'
            })
            .state('pluginsPlugin', {
                url: '/plugins/:plugin',
                templateUrl: 'main/plugins.html',
                controller: 'pluginsController'
            })
            
    }
})();

