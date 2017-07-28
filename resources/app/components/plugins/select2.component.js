/**
|------------------------------------------------------------------------------------
| Plugin - Select2 Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('pluginSelect2Controller', pluginSelect2Controller);

    pluginSelect2Controller.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function pluginSelect2Controller($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.pageName = "select2";
        $scope.pageModule = 'plugins';
        $scope.plugin = $stateParams.plugin;
        $scope.errors = {};
        $scope.messages = {};
        
        // make code pretty
        if (window.prettyPrint) {
            prettyPrint();
        }
    }
})();
