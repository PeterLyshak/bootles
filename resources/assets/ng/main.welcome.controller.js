/**
|------------------------------------------------------------------------------------
| Welcome Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('welcomeController', welcomeController);
        
    welcomeController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function welcomeController(
        $scope,
        $location,
        $stateParams,
        $templateCache,
        $http
    ) {
        $scope.$stateParams = $stateParams;
        $scope.pageName = 'welcome';
        $scope.pageModule = 'index';
        $scope.errors = {};
        $scope.messages = {};
        
        /*
        $scope.$route = $route;
        $scope.$location = $location;
        
        
        */
        // $http.get('phones/phones.json').success(function(data) {
            // $scope.phones = data;
        // });
        
        // $.get('libs/sequence/sequencejs-options.modern-slide-in.js');

        // $scope.orderProp = 'age';
        
        /*
        var sk = (typeof $routeParams.sk !== 'undefined') ? $routeParams.sk : null;
        
        switch (sk) {
            case 'business' :
                $scope.userType = 2;
                break;
                
            default :
                $scope.userType = 1;
                break;
        }
        */
    }
})();


