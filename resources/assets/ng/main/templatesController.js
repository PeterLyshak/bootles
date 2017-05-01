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
        .controller('templatesController', templatesController);
        
    templatesController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function templatesController($scope, $location,$stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.pageName = "templates";
        $scope.pageModule = 'templates';
        $scope.template = $stateParams.template;
        $scope.pageName = $scope.template;
        $scope.errors = {};
        $scope.messages = {};
        
        $scope.$on('$includeContentLoaded', function () {
            var template = document.getElementById($scope.template);
            
            if (typeof(template) !== 'undefined' && template !== null) {
                var offsets = template.getBoundingClientRect();
                
                document.body.scrollTop = offsets.top;
            }
        });
    }
})();
