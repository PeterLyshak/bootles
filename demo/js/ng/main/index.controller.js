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
        .controller('indexController', indexController);

    indexController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        'authService'
    ];

    function indexController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        authService
    ) {
        $scope.pageName = "splash";
        $scope.pageModule = "index";
        $scope.errors = {};
        $scope.messages = {};
        
        /*
        $scope.auth = authService;
        
        $scope.$on("$viewContentLoaded", function() {
            
            authService.async().then(function(response) {
                $scope.auth = authService;
                
                if (authService.check()) {
                    // Authenticated
                    
                    $.get('/req/admin/stats', {}, null, 'json')
                    .done(function(response) {

                        if ((typeof response.statusCode !== 'undefined')
                            && (response.statusCode == 'success')
                        ) {
                            // Success Response
                            
                            if ((typeof response.data !== 'undefined')
                                && (typeof response.data.stats !== 'undefined')
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
                    
                } else {
                    // Guest
                    $('#AdminLoginForm').find('.formSubmit').on('click', function(e) {
                        e.preventDefault();
                        
                        var $this = $(this),
                              $form = $(this.form),
                              formData = $form.serialize(),
                              formAction = $form.prop('action');
                        
                        $this.button('loading');
                        
                        $scope.$apply(function(){
                            $scope.errors = {};
                            $scope.messages = {};
                        });
                        
                        $.post(formAction, formData, null, 'json')
                        .done(function(response) {
                            
                            if ((typeof response.statusCode !== 'undefined')
                                && (response.statusCode == 'success')
                            ) {
                                // Success Response
                                
                                var currentPageTemplate = $route.current.templateUrl;
                                $templateCache.remove(currentPageTemplate);
                                $templateCache.removeAll();
                                $route.reload();
                                
                            } else {
                                // Error response
                                
                                //
                                if ((typeof response.data !== 'undefined')
                                    && (typeof response.data.errors !== 'undefined')
                                ) {
                                    $scope.$apply(function(){
                                        $scope.errors = response.data.errors;
                                    });
                                }
                                
                                if (typeof response.messages !== 'undefined') {
                                    $scope.$apply(function(){
                                        $scope.messages = response.messages;
                                    });
                                }
                                
                                $this.button('reset');
                            }
                        })
                        .fail(function(jqXHR, textStatus, errorThrown) {
                            $this.button('reset');
                        });
                        
                    });
                    
                    $scope.$on("$destroy", function() {
                        $('#AdminLoginForm').find('.formSubmit').off('click');
                    });
                }
            });
        });
        */
    }
        
})();
