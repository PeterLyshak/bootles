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
        .controller('authForgotPasswordController', authForgotPasswordController);

    authForgotPasswordController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function authForgotPasswordController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "authForgotPassword";
        $scope.pageModule = "auth";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
