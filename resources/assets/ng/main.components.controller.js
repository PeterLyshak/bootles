/**
|------------------------------------------------------------------------------------
| Components Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('componentsController', componentsController);
        
    componentsController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function componentsController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.component = $stateParams.component;
        $scope.pageModule = 'components';
        $scope.pageName = $scope.component ? $scope.component : "colors";
        $scope.errors = {};
        $scope.messages = {};
    }
})();
