/**
 * Admin Unit Owner Creator Controller
 *
 * @module adminUnitOwners
 * @page adminUnitOwnerCreator
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminUnitOwnerCreatorController', adminUnitOwnerCreatorController);

    adminUnitOwnerCreatorController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminUnitOwnerCreatorController(
        $scope,
        $http,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        $scope.pageModule = "adminUnitOwners";
        $scope.pageName = "adminUnitOwnerCreator";
        $scope.pageTitle = "Create Unit Owner";
        $scope.pageLoading = true;
        $scope.errors = {};
        $scope.messages = {};
    }
        
})();
