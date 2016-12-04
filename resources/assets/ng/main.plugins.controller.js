/**
|------------------------------------------------------------------------------------
| Plugins Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('pluginsController', pluginsController);
        
    pluginsController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function pluginsController($scope, $location,$stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.pageName = "plugins";
        $scope.pageModule = 'plugins';
        $scope.plugin = $stateParams.plugin;
        $scope.pageName = $scope.plugin;
        $scope.errors = {};
        $scope.messages = {};
        
        $scope.$on('$includeContentLoaded', function () {
            var plugin = document.getElementById($scope.plugin);
            
            if (typeof(plugin) !== 'undefined' && plugin !== null) {
                var offsets = plugin.getBoundingClientRect();
                
                document.body.scrollTop = offsets.top;
            }
        });
    }
})();
