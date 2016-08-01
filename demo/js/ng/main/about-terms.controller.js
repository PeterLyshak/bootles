/*
|------------------------------------------------------------------------------------------------------
| About Module
|------------------------------------------------------------------------------------------------------
|
|
*/

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('aboutTermsController', aboutTermsController);

    aboutTermsController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function aboutTermsController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "aboutTerms";
        $scope.pageModule = "about";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
