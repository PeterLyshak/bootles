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
        .controller('aboutHowItWorksController', aboutHowItWorksController);

    aboutHowItWorksController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function aboutHowItWorksController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "aboutHowItWorks";
        $scope.pageModule = "about";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
