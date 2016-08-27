/**
 * Admin Unit Owners Manager Controller
 *
 * @module adminUnitOwners
 * @page adminUnitOwnersManager
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminUnitOwnersManagerController', adminUnitOwnersManagerController);

    adminUnitOwnersManagerController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminUnitOwnersManagerController(
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
        $scope.pageName = "adminUnitOwnersManager";
        $scope.pageTitle = "Manage Unit Owners";
        $scope.pageLoading = true;
        $scope.errors = {};
        $scope.messages = {};
    }
        
})();
