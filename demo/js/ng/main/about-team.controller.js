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
        .controller('aboutTeamController', aboutTeamController);

    aboutTeamController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function aboutTeamController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "aboutTeam";
        $scope.pageModule = "about";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
