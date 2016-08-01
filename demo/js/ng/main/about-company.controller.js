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
        .controller('aboutCompanyController', aboutCompanyController);

    aboutCompanyController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function aboutCompanyController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        
        $scope.pageName = "aboutCompany";
        $scope.pageModule = "about";
        $scope.errors = {};
        $scope.messages = {};
        
    }
        
})();
