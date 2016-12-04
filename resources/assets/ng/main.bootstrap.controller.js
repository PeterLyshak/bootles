/**
|------------------------------------------------------------------------------------
| Bootstrap Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('bootstrapController', bootstrapController);
        
    bootstrapController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function bootstrapController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.component = $stateParams.component;
        $scope.pageModule = 'bootstrap';
        $scope.pageName = $scope.component ? $scope.component : "buttons";
        $scope.errors = {};
        $scope.messages = {};
        
        /*
        Autoscroll on target div upon page init
        $scope.$on('$includeContentLoaded', function () {
            var component = document.getElementById($scope.component);
            
            if (typeof(component) != 'undefined' && component != null) {
                var offsets = component.getBoundingClientRect();
                
                document.body.scrollTop = offsets.top;
            }
        });
        */
    }
})();