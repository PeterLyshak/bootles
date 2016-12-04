/*
|------------------------------------------------------------------------------------------------------
| Dashboard Module
|------------------------------------------------------------------------------------------------------
|
|
*/

/**
 * Dashboard Controller
 *
 * @module adminIndex
 * @page adminDashboard
 *
 */

/*
|------------------------------------------------------------------------------------------------------
| Index Module
|------------------------------------------------------------------------------------------------------
|
|
*/

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminIndexController', adminIndexController);

    adminIndexController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        'authService'
    ];

    function adminIndexController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        authService
    ) {
        $scope.pageLoading = true;
        $scope.pageModule = "adminDashboard";
        $scope.pageName = "adminDashboard";
        $scope.errors = {};
        $scope.messages = {};
        
        authService.async().then(function(response) {
            
            $scope.auth = authService;
            
            if (authService.check()) {
                
                if ((typeof authService.user !== 'undefined') &&
                    (authService.user.user.is_admin)
                ) {
                        
                    $scope.pageLoading = false;

                    $scope.$on("$viewContentLoaded", function() {
                       
                        /*
                        $.get('/req/admin/stats', {}, null, 'json')
                        .done(function(response) {

                            if ((typeof response.statusCode !== 'undefined') &&
                                (response.statusCode == 'success')
                            ) {
                                // Success Response
                                
                                if ((typeof response.data !== 'undefined') &&
                                    (typeof response.data.stats !== 'undefined')
                                ) {
                                    
                                    $scope.$apply(function() {
                                        $scope.stats = response.data.stats;
                                        $scope.totalUsers = response.data.stats.totalUsers;
                                        $scope.totalUnitOwners = response.data.stats.totalUnitOwners;
                                        $scope.totalListings = response.data.stats.totalListings;
                                    });
                                    
                                }
                            } else {
                                
                                if (typeof response.messages !== 'undefined') {
                                    var $modal = $('#ModalDefault');
                                    $modal.find('.modal-title').text(response.messages.title);
                                    $modal.find('.modal-body').text(response.messages.message);
                                    $modal.modal('show');
                                }
                                
                            }
                            
                        });
                        */
                        
                    }); // $scope.$on("$viewContentLoaded")
                        
                } else {
                    $location.path('/').replace();
                }
                
            } else {
                // Clear the current search
                $location.search({});

                // Set the current search values
                $location.search({
                    reroute: "admin"
                });
                
                $location.path('/login').replace();
            }
        });
    }
        
})();


