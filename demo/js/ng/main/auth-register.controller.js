/*
|------------------------------------------------------------------------------------------------------
| Auth Module
|------------------------------------------------------------------------------------------------------
|
|
*/

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('authRegisterController', authRegisterController);

    authRegisterController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function authRegisterController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "register";
        $scope.pageModule = "auth";
        $scope.errors = {};
        $scope.messages = {};
        
        var sk = (typeof $routeParams.sk !== 'undefined') ? $routeParams.sk : null;
        
        switch (sk) {
            case 'partner-agent' :
                $scope.user_type = 2;
                break;
            default:
                sk = 'user';
                $scope.user_type = 1;
                break;
        }
        
    }
        
})();
