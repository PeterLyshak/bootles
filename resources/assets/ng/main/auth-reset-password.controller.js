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
        .controller('authResetPasswordController', authResetPasswordController);

    authResetPasswordController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function authResetPasswordController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "authResetPassword";
        $scope.pageModule = "auth";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
