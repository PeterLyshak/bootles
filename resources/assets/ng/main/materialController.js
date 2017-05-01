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
        .controller('materialController', materialController);
        
    materialController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function materialController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.component = $stateParams.component;
        $scope.pageModule = 'material';
        $scope.pageName = $scope.component ? $scope.component : "colors";
        $scope.errors = {};
        $scope.messages = {};
    }
})();
