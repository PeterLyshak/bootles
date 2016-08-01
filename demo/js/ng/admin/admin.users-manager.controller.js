/**
 * Admin Users Manager Controller
 *
 * @module adminUsers
 * @page adminUsersManager
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminUsersManagerController', adminUsersManagerController);

    adminUsersManagerController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminUsersManagerController(
        $scope,
        $http,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        $scope.pageModule = "adminUsers";
        $scope.pageName = "adminUsersManager";
        $scope.pageTitle = "Manage Users";
        $scope.pageLoading = true;
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
                        
                        $('#adminUsersManagerDatatable').DataTable({
                            "lengthMenu": [[20, 50,-1], [20, 50, "All"]],
                            "lengthChange" : false,
                            "processing": true,
                            "serverSide": true,
                            "info" : false,
                            "ajax": {
                                "url": '/admin-req/datatables/users',
                                "type": "GET",
                                "data": function ( d ) {
                                    // d.filter = $filter.filter(':checked').val();
                                    // d.filter = $filter.is(':checked').val();
                                    // d.csrf_token = $.cookie('csrf_token_cookie');
                                    // d.account_id = $self.data('account-id');
                                },
                                "dataSrc": function ( json ) {
                                    if (typeof json.data !== "undefined") {
                                        return json.data;
                                    }
                                    else return [];
                                }
                            },
                            "columns": [
                                //{ "data": "actions", "sortable" : false },
                                { "data": "render" }
                            ],
                            "language" : {
                                "emptyTable" : '<p class="text-muted text-center">No user yet.</p>'
                            }
                        });
                        
                        /*
                        $('#pageletProfileFollowersPane #datatableAccountFollowers').whenLive(function(el){
                            // prepare variables, data
                            var $self = $(el),
                                $pagelet = $self.closest('#pageletProfileFollowersPane'),
                                $display = $pagelet.find('input[name="display[datatableAccountFollowers]"]:radio'),
                                $filter = $pagelet.find('input[name="filter[datatableAccountFollowers]"]:radio'),
                                $dataUrl = $self.data('url');
                            
                            // remove residual datatable container
                            if ($self.closest('.dataTables_wrapper.dt-bootstrap').length > 0) {
                                $self.closest('.row').siblings().remove();
                                $self.unwrap().unwrap().unwrap();
                            }
                            
                            // initialize datatable
                            window.taco.datatableAccountFollowers = $self.DataTable({
                                "lengthMenu": [[20, 50,-1], [20, 50, "All"]],
                                "lengthChange" : false,
                                "processing": true,
                                "serverSide": true,
                                "info" : false,
                                "ajax": {
                                    "url": $dataUrl,
                                    "type": "GET",
                                    "data": function ( d ) {
                                        d.filter = $filter.filter(':checked').val();
                                        // d.filter = $filter.is(':checked').val();
                                        // d.csrf_token = $.cookie('csrf_token_cookie');
                                        // d.account_id = $self.data('account-id');
                                    },
                                    "dataSrc": function ( json ) {
                                        if (typeof json.data !== "undefined") {
                                            return json.data;
                                        }
                                        else return [];
                                    }
                                },
                                "columns": [
                                    //{ "data": "actions", "sortable" : false },
                                    { "data": "render" }
                                ],
                                "language" : {
                                    "emptyTable" : '<p class="text-muted text-center">No one here yet.</p>'
                                }
                            });
                            
                            $filter
                            .on('change', function(e){
                                // redraw datatable
                                window.taco.datatableAccountFollowers.draw(false);
                            });
                            
                            $display
                            .off('change.taco.pageletProfileFollowersPane.datatableAccountFollowers.display')
                            .on('change.taco.pageletProfileFollowersPane.datatableAccountFollowers.display', function(e){
                                // prevent browser's default behavior
                                e.preventDefault();
                                
                                // get display type value
                                var display_type = $display.filter(':checked').val() || "list";
                                
                                // check display type
                                if (display_type == "list") {
                                    // list display type
                                    $self.addClass('row-list');
                                }
                                else {
                                    // grid display type
                                    $self.removeClass('row-list');
                                }
                            })
                            .filter(':checked').trigger('change.taco.pageletProfileFollowersPane.datatableAccountFollowers.display');
                            
                        });
                        */
                        
                    });
                    
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
                
                // $location.path('/').replace();
            }
        });
    }
        
})();
