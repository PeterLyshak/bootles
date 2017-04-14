(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(config);
    
    config.$inject = [
        // '$routeProvider',
        // '$locationProvider',
        // '$httpProvider'
        '$stateProvider',
        'angularAuth0Provider',
        'lockProvider',
        '$urlRouterProvider',
        'jwtOptionsProvider',
        '$templateFactoryProvider'
    ];
    
    function config(
        $stateProvider,
        angularAuth0Provider,
        lockProvider,
        $urlRouterProvider,
        jwtOptionsProvider,
        $templateFactoryProvider
    ) {
        $templateFactoryProvider.shouldUnsafelyUseHttp(true);
        
        // Configuration for angular-jwt
        jwtOptionsProvider.config({
            tokenGetter: function () {
                return localStorage.getItem('id_token');
            }
        });
    
        $stateProvider
            // Index
            .state('index', {
                url: '/',
                templateUrl: 'main/welcome.html',
                controller: 'welcomeController',
                controllerAs: 'vm',
            })
            
            // Auth
            .state('login', {
                url: '/login',
                templateUrl: 'main/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
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
        
        angularAuth0Provider.init({
            clientID: 'vQLN0V90OASSE2w0cNKJRk2YXFF1XXK1',
            domain: 'jackhummah.auth0.com'
        });
  
        lockProvider.init({
            clientID: 'vQLN0V90OASSE2w0cNKJRk2YXFF1XXK1',
            domain: 'jackhummah.auth0.com'
        });
        
        $urlRouterProvider.otherwise('/');
        
    }
})();

