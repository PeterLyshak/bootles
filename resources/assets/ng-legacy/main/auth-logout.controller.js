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
        .controller('authLogoutController', authLogoutController);

    authLogoutController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function authLogoutController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.auth = authService;
        $scope.pageName = "authLogout";
        $scope.pageModule = "auth";
    
        $templateCache.removeAll();
        $route.reload();
    
        $timeout(function () {
            //DOM has finished rendering
            $scope.$apply(function(){
                // authService.user = null;
                
                $location.path('/').replace();
            });
        }, 10);
        
    }
        
})();

