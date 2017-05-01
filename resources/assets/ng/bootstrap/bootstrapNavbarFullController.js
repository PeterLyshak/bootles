/**
|------------------------------------------------------------------------------------
| Component - Tabs Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('bootstrapNavbarFullController', bootstrapNavbarFullController);
        
    bootstrapNavbarFullController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function bootstrapNavbarFullController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.component = $stateParams.component;
        $scope.pageModule = 'bootstrap';
        $scope.pageName = $scope.component ? $scope.component : "buttons";
        $scope.errors = {};
        $scope.messages = {};
        $scope.errors = {};
        $scope.messages = {};
        
        // make code pretty
        if (window.prettyPrint) {
            prettyPrint();
        }
        
        $scope.$watch('$viewContentLoaded', function()
        {
            $('ul.tabs').tabs();
        });
    }
})();
