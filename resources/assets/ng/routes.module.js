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
            
            // Material
            .state('material', {
                url: '/material',
                templateUrl: 'main/material.html',
                controller: 'materialController'
            })
            .state('materialComponent', {
                url: '/material/:component',
                templateUrl: 'main/material.html',
                controller: 'materialController'
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
            
            // Templates
            .state('templates', {
                url: '/templates',
                templateUrl: 'main/templates.html',
                controller: 'templatesController'
            })
            .state('templatesSub', {
                url: '/templates/:template',
                templateUrl: 'main/templates.html',
                controller: 'templatesController'
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

