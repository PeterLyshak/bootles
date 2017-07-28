/**
|------------------------------------------------------------------------------------
| Material - Tabs Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('materialTabsController', materialTabsController);
        
    materialTabsController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function materialTabsController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.component = $stateParams.component;
        $scope.componentName = "tabs";
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
