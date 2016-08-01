/**
 * Admin Listings Manager Controller
 *
 * @module adminListings
 * @page adminListingsManager
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminListingsManagerController', adminListingsManagerController);

    adminListingsManagerController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminListingsManagerController(
        $scope,
        $http,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        $scope.pageModule = "adminListings";
        $scope.pageName = "adminListingsManager";
        $scope.pageTitle = "Manage Listings";
        $scope.pageLoading = true;
        $scope.errors = {};
        $scope.messages = {};
    }
        
})();
