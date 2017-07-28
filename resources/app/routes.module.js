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
                templateUrl: 'components/index/index.component.html',
                controller: 'welcomeController',
                controllerAs: 'vm',
            })
            
            // Auth
            .state('login', {
                url: '/login',
                templateUrl: 'components/auth/login.component.html',
                controller: 'LoginController',
                controllerAs: 'vm',
            })
            
            // Bootstrap
            .state('bootstrap', {
                url: '/bootstrap',
                templateUrl: 'components/bootstrap/index.component.html',
                controller: 'bootstrapController',
            })
            .state('bootstrapComponent', {
                url: '/bootstrap/:component',
                templateUrl: 'components/bootstrap/index.component.html',
                controller: 'bootstrapController',
            })
            
            // Material
            .state('material', {
                url: '/material',
                templateUrl: 'components/material/index.component.html',
                controller: 'materialController'
            })
            .state('materialComponent', {
                url: '/material/:component',
                templateUrl: 'components/material/index.component.html',
                controller: 'materialController'
            })
            
            // Plugins
            .state('plugins', {
                url: '/plugins',
                templateUrl: 'components/plugins/index.component.html',
                controller: 'pluginsController'
            })
            .state('pluginsPlugin', {
                url: '/plugins/:plugin',
                templateUrl: 'components/plugins/plugins.component.html',
                controller: 'pluginsController'
            })
            
            // Templates
            .state('templates', {
                url: '/templates',
                templateUrl: 'components/templates/index.component.html',
                controller: 'templatesController'
            })
            .state('templatesSub', {
                url: '/templates/:template',
                templateUrl: 'components/templates/index.component.html',
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

