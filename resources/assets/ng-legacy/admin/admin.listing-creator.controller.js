/**
 * Admin Listing Creator Controller
 *
 * @module adminListings
 * @page adminListingsCreator
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminListingCreatorController', adminListingCreatorController);

    adminListingCreatorController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminListingCreatorController(
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
        $scope.pageName = "adminListingCreator";
        $scope.pageTitle = "Create Listing";
        $scope.pageLoading = true;
        $scope.errors = {};
        $scope.messages = {};
    }
        
})();
