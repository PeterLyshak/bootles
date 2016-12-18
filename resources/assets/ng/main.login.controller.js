/**
|------------------------------------------------------------------------------------
| Login Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('LoginController', LoginController);
        
    LoginController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
        'authService',
    ];
    
    function LoginController(
        $scope,
        $location,
        $stateParams,
        $templateCache,
        $http,
        authService
    ) {
        
        var vm = this;
        
        $scope.$stateParams = $stateParams;
        $scope.pageModule = 'auth';
        $scope.pageName = 'login';
        $scope.errors = {};
        $scope.messages = {};
        
        vm.authService = authService;
        
        vm.login = function () {
            authService.login(vm.username, vm.password, function (err) {
                if (err) {
                    console.log("something went wrong: " + err.message);
                }
            });
        };

        vm.register = function () {
            authService.register(vm.username, vm.password, function (err) {
                if (err) {
                    console.log("something went wrong: " + err.message);
                }
            });
        };

        vm.facebookLogin = function () {
            authService.facebookLogin(function (err) {
                if (err) {
                    console.log("something went wrong: " + err.message);
                }
          });
        };
    }
})();


