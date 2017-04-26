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
        .controller('componentTabsController', componentTabsController);
        
    componentTabsController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function componentTabsController($scope, $location, $stateParams, $templateCache, $http) {
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
