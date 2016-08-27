/**
 * Admin User Creator Controller
 *
 * @module adminUsers
 * @page adminUserCreator
 *
 */

(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('adminUserCreatorController', adminUserCreatorController);

    adminUserCreatorController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$timeout',
        'authService'
    ];

    function adminUserCreatorController(
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
        $scope.pageName = "adminUserCreator";
        $scope.pageTitle = "Create User";
        $scope.pageLoading = true;
        $scope.errors = {};
        $scope.messages = {};
        $scope.csrf_token = $('meta[name="_token"]').prop('content');
        
        $scope.userType = {
            'id' : 1
        };
        
        $scope.$on("$viewContentLoaded", function() {
            console.log('view content loaded');
            authService.async().then(function(response) {
            $scope.auth = authService;
            
            if (authService.check()) {
            
                if ((typeof authService.user !== 'undefined') &&
                    (authService.user.user.is_admin)
                ) {
                    
                    $scope.pageLoading = false;
                    
                    $('#adminUserCreatorForm')
                    .find('.formSubmit')
                    .on('click', function(e) {
                        e.preventDefault();
                        
                        var $this = $(this),
                              $form = $(this.form),
                              formData = $form.serialize(),
                              formAction = $form.prop('action');
                      
                        var $modal = $('#modalDefault');
                        
                        $this.button('loading');
                        
                        $scope.$apply(function(){
                            $scope.errors = {};
                            $scope.messages = {};
                        });
                        
                        
                        /*
                        beforeSend: function(xhr) {
                            return xhr.setRequestHeader('X-XSRF-Token', Cookies.get('XSRF-TOKEN'));
                        }
                        */
                        
                        $.post(formAction, formData, null, 'json')
                        .done(function(response) {
                        
                            if ((typeof response.statusCode !== 'undefined') &&
                                (response.statusCode == 'success')
                            ) {
                                
                                if (typeof response.messages !== 'undefined') {
                                    $modal.find('.modal-title').text(response.messages.title);
                                    $modal.find('.modal-body').text(response.messages.message);
                                    $modal.modal('show');
                                }
                                
                                var currentPageTemplate = $route.current.templateUrl;
                                $templateCache.remove(currentPageTemplate);
                                // $templateCache.removeAll();
                                $route.reload();
                            } else {
                                
                                if ((typeof response.data !== 'undefined') &&
                                    (typeof response.data.errors !== 'undefined')
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
                                
                                if (typeof response.messages !== 'undefined') {
                                    $modal.find('.modal-title').text(response.messages.title);
                                    $modal.find('.modal-body').text(response.messages.message);
                                    $modal.modal('show');
                                }
                            }

                            $this.button('reset');
                        })
                        .fail(function(jqXHR, textStatus, errorThrown) {
                            $this.button('reset');
                        });
                    });
                    
                }
                
            } else {
                $location.path('/').replace();
            }
        });
        });
        
        
        
        
    }
        
})();
