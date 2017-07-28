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
        .controller('bootstrapTabController', bootstrapTabController);
        
    bootstrapTabController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function bootstrapTabController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.component = $stateParams.component;
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
            $('.customTab > li.active > a').tab('show');
        });
    }
})();
