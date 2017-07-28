/*
|------------------------------------------------------------------------------------------------------
| Search Module
|------------------------------------------------------------------------------------------------------
|
|
*/

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('searchGeneralController', searchGeneralController);

    searchGeneralController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'AuthService'
    ];
    
    function searchGeneralController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        AuthService
    ) {
        $scope.pageName = "searchGeneral";
        $scope.pageModule = "search";
        $scope.errors = {};
        $scope.messages = {};
        $scope.searching = true;
        $scope.data = {};
        $scope.hasData = !angular.equals({}, $scope.data);
    }
        
})();
