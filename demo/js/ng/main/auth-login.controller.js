/*
|------------------------------------------------------------------------------------------------------
| Auth Module
|------------------------------------------------------------------------------------------------------
|
|
*/

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('authLoginController', authLoginController);

    authLoginController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];
    
    function authLoginController(
        $scope,
        $location,
        $route,
        $routeParams, 
        $templateCache,
        $timeout,
        authService
    ) {
        $scope.pageName = "login";
        $scope.pageModule = "auth";
        $scope.errors = {};
        $scope.messages = {};

        $scope.reroute = (typeof $routeParams.reroute !== 'undefined') ? $routeParams.reroute : null;
        
        $scope.$on("$viewContentLoaded", function() {
            
            $('#authLoginForm').find('.formSubmit').on('click', function(e) {
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
                    
                    if ((typeof response.status !== 'undefined') &&
                        (response.status == 'success')
                    ) {
                        // Success Response
                        
                        // remove all template cache
                        $templateCache.removeAll();
                        
                        $timeout(function () {
                            //DOM has finished rendering
                            $scope.$apply(function(){
                                
                                authService.update(response.returning.token);
                                
                                $scope.auth = authService;
                                
                                // Clear the current search
                                $location.search({});
                                    
                                // authService.user = null;
                                if ($scope.reroute) {
                                    $location.path($scope.reroute).replace();
                                } else {
                                    $location.path('/').replace();
                                }
                            });
                        }, 10);
                        
                        /*
                        var currentPageTemplate = $route.current.templateUrl;
                        $templateCache.remove(currentPageTemplate);
                        $templateCache.removeAll();
                        $route.reload();
                        */
                        
                    } else {
                        // Error response
                        
                        if ((typeof response.returning !== 'undefined') &&
                            (typeof response.returning.errors !== 'undefined')
                        ) {
                            $scope.$apply(function(){
                                $scope.errors = response.returning.errors;
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
        });
        
        $scope.$on("$destroy", function() {
            $('#authLoginForm').find('.formSubmit').off('click');
        });
    }
        
})();
