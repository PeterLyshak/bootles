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
        .controller('aboutLeadershipController', aboutLeadershipController);

    aboutLeadershipController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function aboutLeadershipController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "aboutLeadership";
        $scope.pageModule = "about";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
