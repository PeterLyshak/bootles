/**
|------------------------------------------------------------------------------------
| Global Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('globalController', globalController);
        
    globalController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function globalController($scope, $location, $route, $routeParams, $templateCache, $http) {
        console.log("Global Controller Init");
    }
})();


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
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function welcomeController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.pageName = 'welcome';
        $scope.pageModule = 'index';
        $scope.errors = {};
        $scope.messages = {};
        
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


/**
|------------------------------------------------------------------------------------
| CSS Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('cssController', cssController);
        
    cssController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function cssController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.pageName = "css";
        $scope.pageModule = 'css';
        $scope.errors = {};
        $scope.messages = {};
    }
})();


/**
|------------------------------------------------------------------------------------
| Bootstrap Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('bootstrapController', bootstrapController);
        
    bootstrapController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function bootstrapController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.component = $routeParams.component;
        $scope.pageModule = 'bootstrap';
        $scope.pageName = $scope.component ? $scope.component : "buttons";
        $scope.errors = {};
        $scope.messages = {};
        
        $scope.colors = {
            red: [
                { code: 'red', hex: '#F44336', name: 'red', textColor: 'text-light' },
                { code: 'red-50', hex: '#FFEBEE', name: 'red-50', textColor: 'text-dark' },
                { code: 'red-100', hex: '#FFCDD2', name: 'red-100', textColor: 'text-dark' },
                { code: 'red-200', hex: '#EF9A9A', name: 'red-200', textColor: 'text-dark' },
                { code: 'red-300', hex: '#E57373', name: 'red-300', textColor: 'text-dark' },
                { code: 'red-400', hex: '#EF5350', name: 'red-400', textColor: 'text-light' },
                { code: 'red-500', hex: '#EF5350', name: 'red-500', textColor: 'text-light' },
                { code: 'red-600', hex: '#EF5350', name: 'red-600', textColor: 'text-light' },
                { code: 'red-700', hex: '#EF5350', name: 'red-700', textColor: 'text-light' },
                { code: 'red-800', hex: '#EF5350', name: 'red-800', textColor: 'text-light' },
                { code: 'red-900', hex: '#EF5350', name: 'red-900', textColor: 'text-light' },
                { code: 'red-a100', hex: '#EF5350', name: 'red-a100', textColor: 'text-dark' },
                { code: 'red-a200', hex: '#EF5350', name: 'red-a200', textColor: 'text-light' },
                { code: 'red-a400', hex: '#EF5350', name: 'red-a400', textColor: 'text-light' },
                { code: 'red-a700', hex: '#EF5350', name: 'red-a700', textColor: 'text-light' },
            ],
            
            pink: [
                { code: 'pink', hex: '#E91E63', name: 'pink', textColor: 'text-light' },
                { code: 'pink-50', hex: '#FCE4EC', name: 'pink-50', textColor: 'text-dark' },
                { code: 'pink-100', hex: '#F8BBD0', name: 'pink-100', textColor: 'text-dark' },
                { code: 'pink-200', hex: '#F48FB1', name: 'pink-200', textColor: 'text-dark' },
                { code: 'pink-300', hex: '#F06292', name: 'pink-300', textColor: 'text-light' },
                { code: 'pink-400', hex: '#EC407A', name: 'pink-400', textColor: 'text-light' },
                { code: 'pink-500', hex: '#E91E63', name: 'pink-500', textColor: 'text-light' },
                { code: 'pink-600', hex: '#D81B60', name: 'pink-600', textColor: 'text-light' },
                { code: 'pink-700', hex: '#C2185B', name: 'pink-700', textColor: 'text-light' },
                { code: 'pink-800', hex: '#AD1457', name: 'pink-800', textColor: 'text-light' },
                { code: 'pink-900', hex: '#880E4F', name: 'pink-900', textColor: 'text-light' },
                { code: 'pink-a100', hex: '#FF80AB', name: 'pink-a100', textColor: 'text-dark' },
                { code: 'pink-a200', hex: '#FF4081', name: 'pink-a200', textColor: 'text-light' },
                { code: 'pink-a400', hex: '#F50057', name: 'pink-a400', textColor: 'text-light' },
                { code: 'pink-a700', hex: '#C51162', name: 'pink-a700', textColor: 'text-light' },
            ],
            
            purple: [
                { code: 'purple', hex: '#9C27B0', name: 'purple', textColor: 'text-light' },
                { code: 'purple-50', hex: '#F3E5F5', name: 'purple-50', textColor: 'text-dark' },
                { code: 'purple-100', hex: '#E1BEE7', name: 'purple-100', textColor: 'text-dark' },
                { code: 'purple-200', hex: '#CE93D8', name: 'purple-200', textColor: 'text-dark' },
                { code: 'purple-300', hex: '#BA68C8', name: 'purple-300', textColor: 'text-light' },
                { code: 'purple-400', hex: '#AB47BC', name: 'purple-400', textColor: 'text-light' },
                { code: 'purple-500', hex: '#9C27B0', name: 'purple-500', textColor: 'text-light' },
                { code: 'purple-600', hex: '#8E24AA', name: 'purple-600', textColor: 'text-light' },
                { code: 'purple-700', hex: '#7B1FA2', name: 'purple-700', textColor: 'text-light' },
                { code: 'purple-800', hex: '#6A1B9A', name: 'purple-800', textColor: 'text-light' },
                { code: 'purple-900', hex: '#4A148C', name: 'purple-900', textColor: 'text-light' },
                { code: 'purple-a100', hex: '#EA80FC', name: 'purple-a100', textColor: 'text-dark' },
                { code: 'purple-a200', hex: '#E040FB', name: 'purple-a200', textColor: 'text-light' },
                { code: 'purple-a400', hex: '#D500F9', name: 'purple-a400', textColor: 'text-light' },
                { code: 'purple-a700', hex: '#AA00FF', name: 'purple-a700', textColor: 'text-light' },
            ],
            
            deepPurple: [
                { code: 'deepPurple', hex: '#673AB7', name: 'deepPurple', textColor: 'text-light' },
                { code: 'deepPurple-50', hex: '#EDE7F6', name: 'deepPurple-50', textColor: 'text-dark' },
                { code: 'deepPurple-100', hex: '#D1C4E9', name: 'deepPurple-100', textColor: 'text-dark' },
                { code: 'deepPurple-200', hex: '#B39DDB', name: 'deepPurple-200', textColor: 'text-dark' },
                { code: 'deepPurple-300', hex: '#9575CD', name: 'deepPurple-300', textColor: 'text-light' },
                { code: 'deepPurple-400', hex: '#7E57C2', name: 'deepPurple-400', textColor: 'text-light' },
                { code: 'deepPurple-500', hex: '#673AB7', name: 'deepPurple-500', textColor: 'text-light' },
                { code: 'deepPurple-600', hex: '#5E35B1', name: 'deepPurple-600', textColor: 'text-light' },
                { code: 'deepPurple-700', hex: '#512DA8', name: 'deepPurple-700', textColor: 'text-light' },
                { code: 'deepPurple-800', hex: '#4527A0', name: 'deepPurple-800', textColor: 'text-light' },
                { code: 'deepPurple-900', hex: '#311B92', name: 'deepPurple-900', textColor: 'text-light' },
                { code: 'deepPurple-a100', hex: '#B388FF', name: 'deepPurple-a100', textColor: 'text-dark' },
                { code: 'deepPurple-a200', hex: '#7C4DFF', name: 'deepPurple-a200', textColor: 'text-light' },
                { code: 'deepPurple-a400', hex: '#651FFF', name: 'deepPurple-a400', textColor: 'text-light' },
                { code: 'deepPurple-a700', hex: '#6200EA', name: 'deepPurple-a700', textColor: 'text-light' },
            ],
            
            indigo: [
                { code: 'indigo', hex: '#3F51B5', name: 'indigo', textColor: 'text-light' },
                { code: 'indigo-50', hex: '#E8EAF6', name: 'indigo-50', textColor: 'text-dark' },
                { code: 'indigo-100', hex: '#C5CAE9', name: 'indigo-100', textColor: 'text-dark' },
                { code: 'indigo-200', hex: '#9FA8DA', name: 'indigo-200', textColor: 'text-dark' },
                { code: 'indigo-300', hex: '#7986CB', name: 'indigo-300', textColor: 'text-light' },
                { code: 'indigo-400', hex: '#5C6BC0', name: 'indigo-400', textColor: 'text-light' },
                { code: 'indigo-500', hex: '#3F51B5', name: 'indigo-500', textColor: 'text-light' },
                { code: 'indigo-600', hex: '#3949AB', name: 'indigo-600', textColor: 'text-light' },
                { code: 'indigo-700', hex: '#303F9F', name: 'indigo-700', textColor: 'text-light' },
                { code: 'indigo-800', hex: '#283593', name: 'indigo-800', textColor: 'text-light' },
                { code: 'indigo-900', hex: '#1A237E', name: 'indigo-900', textColor: 'text-light' },
                { code: 'indigo-a100', hex: '#8C9EFF', name: 'indigo-a100', textColor: 'text-dark' },
                { code: 'indigo-a200', hex: '#536DFE', name: 'indigo-a200', textColor: 'text-light' },
                { code: 'indigo-a400', hex: '#3D5AFE', name: 'indigo-a400', textColor: 'text-light' },
                { code: 'indigo-a700', hex: '#304FFE', name: 'indigo-a700', textColor: 'text-light' },
            ],
            
            blue: [
                { code: 'blue', hex: '#2196F3', name: 'blue', textColor: 'text-light' },
                { code: 'blue-50', hex: '#E3F2FD', name: 'blue-50', textColor: 'text-dark' },
                { code: 'blue-100', hex: '#BBDEFB', name: 'blue-100', textColor: 'text-dark' },
                { code: 'blue-200', hex: '#90CAF9', name: 'blue-200', textColor: 'text-dark' },
                { code: 'blue-300', hex: '#64B5F6', name: 'blue-300', textColor: 'text-dark' },
                { code: 'blue-400', hex: '#42A5F5', name: 'blue-400', textColor: 'text-dark' },
                { code: 'blue-500', hex: '#2196F3', name: 'blue-500', textColor: 'text-light' },
                { code: 'blue-600', hex: '#1E88E5', name: 'blue-600', textColor: 'text-light' },
                { code: 'blue-700', hex: '#1976D2', name: 'blue-700', textColor: 'text-light' },
                { code: 'blue-800', hex: '#1565C0', name: 'blue-800', textColor: 'text-light' },
                { code: 'blue-900', hex: '#0D47A1', name: 'blue-900', textColor: 'text-light' },
                { code: 'blue-a100', hex: '#82B1FF', name: 'blue-a100', textColor: 'text-dark' },
                { code: 'blue-a200', hex: '#448AFF', name: 'blue-a200', textColor: 'text-light' },
                { code: 'blue-a400', hex: '#2979FF', name: 'blue-a400', textColor: 'text-light' },
                { code: 'blue-a700', hex: '#2962FF', name: 'blue-a700', textColor: 'text-light' },
            ],
            
            lightBlue: [
                { code: 'lightBlue', hex: '#03A9F4', name: 'lightBlue', textColor: 'text-dark' },
                { code: 'lightBlue-50', hex: '#E1F5FE', name: 'lightBlue-50', textColor: 'text-dark' },
                { code: 'lightBlue-100', hex: '#B3E5FC', name: 'lightBlue-100', textColor: 'text-dark' },
                { code: 'lightBlue-200', hex: '#81D4FA', name: 'lightBlue-200', textColor: 'text-dark' },
                { code: 'lightBlue-300', hex: '#4FC3F7', name: 'lightBlue-300', textColor: 'text-dark' },
                { code: 'lightBlue-400', hex: '#29B6F6', name: 'lightBlue-400', textColor: 'text-dark' },
                { code: 'lightBlue-500', hex: '#03A9F4', name: 'lightBlue-500', textColor: 'text-dark' },
                { code: 'lightBlue-600', hex: '#039BE5', name: 'lightBlue-600', textColor: 'text-light' },
                { code: 'lightBlue-700', hex: '#0288D1', name: 'lightBlue-700', textColor: 'text-light' },
                { code: 'lightBlue-800', hex: '#0277BD', name: 'lightBlue-800', textColor: 'text-light' },
                { code: 'lightBlue-900', hex: '#01579B', name: 'lightBlue-900', textColor: 'text-light' },
                { code: 'lightBlue-a100', hex: '#80D8FF', name: 'lightBlue-a100', textColor: 'text-dark' },
                { code: 'lightBlue-a200', hex: '#40C4FF', name: 'lightBlue-a200', textColor: 'text-dark' },
                { code: 'lightBlue-a400', hex: '#00B0FF', name: 'lightBlue-a400', textColor: 'text-dark' },
                { code: 'lightBlue-a700', hex: '#0091EA', name: 'lightBlue-a700', textColor: 'text-light' },
            ],
            
            cyan: [
                { code: 'cyan', hex: '#00BCD4', name: 'cyan', textColor: 'text-dark' },
                { code: 'cyan-50', hex: '#E0F7FA', name: 'cyan-50', textColor: 'text-dark' },
                { code: 'cyan-100', hex: '#B2EBF2', name: 'cyan-100', textColor: 'text-dark' },
                { code: 'cyan-200', hex: '#80DEEA', name: 'cyan-200', textColor: 'text-dark' },
                { code: 'cyan-300', hex: '#4DD0E1', name: 'cyan-300', textColor: 'text-dark' },
                { code: 'cyan-400', hex: '#26C6DA', name: 'cyan-400', textColor: 'text-dark' },
                { code: 'cyan-500', hex: '#00BCD4', name: 'cyan-500', textColor: 'text-dark' },
                { code: 'cyan-600', hex: '#00ACC1', name: 'cyan-600', textColor: 'text-dark' },
                { code: 'cyan-700', hex: '#0097A7', name: 'cyan-700', textColor: 'text-light' },
                { code: 'cyan-800', hex: '#00838F', name: 'cyan-800', textColor: 'text-light' },
                { code: 'cyan-900', hex: '#006064', name: 'cyan-900', textColor: 'text-light' },
                { code: 'cyan-a100', hex: '#84FFFF', name: 'cyan-a100', textColor: 'text-dark' },
                { code: 'cyan-a200', hex: '#18FFFF', name: 'cyan-a200', textColor: 'text-dark' },
                { code: 'cyan-a400', hex: '#00E5FF', name: 'cyan-a400', textColor: 'text-dark' },
                { code: 'cyan-a700', hex: '#00B8D4', name: 'cyan-a700', textColor: 'text-dark' },
            ],
            
            teal: [
                { code: 'teal', hex: '#009688', name: 'teal', textColor: 'text-light' },
                { code: 'teal-50', hex: '#E0F2F1', name: 'teal-50', textColor: 'text-dark' },
                { code: 'teal-100', hex: '#B2DFDB', name: 'teal-100', textColor: 'text-dark' },
                { code: 'teal-200', hex: '#80CBC4', name: 'teal-200', textColor: 'text-dark' },
                { code: 'teal-300', hex: '#4DB6AC', name: 'teal-300', textColor: 'text-dark' },
                { code: 'teal-400', hex: '#26A69A', name: 'teal-400', textColor: 'text-dark' },
                { code: 'teal-500', hex: '#009688', name: 'teal-500', textColor: 'text-light' },
                { code: 'teal-600', hex: '#00897B', name: 'teal-600', textColor: 'text-light' },
                { code: 'teal-700', hex: '#00796B', name: 'teal-700', textColor: 'text-light' },
                { code: 'teal-800', hex: '#00695C', name: 'teal-800', textColor: 'text-light' },
                { code: 'teal-900', hex: '#004D40', name: 'teal-900', textColor: 'text-light' },
                { code: 'teal-a100', hex: '#A7FFEB', name: 'teal-a100', textColor: 'text-dark' },
                { code: 'teal-a200', hex: '#64FFDA', name: 'teal-a200', textColor: 'text-dark' },
                { code: 'teal-a400', hex: '#1DE9B6', name: 'teal-a400', textColor: 'text-dark' },
                { code: 'teal-a700', hex: '#00BFA5', name: 'teal-a700', textColor: 'text-dark' },
            ],
            
            green: [
                { code: 'green', hex: '#4CAF50', name: 'green', textColor: 'text-dark' },
                { code: 'green-50', hex: '#E8F5E9', name: 'green-50', textColor: 'text-dark' },
                { code: 'green-100', hex: '#C8E6C9', name: 'green-100', textColor: 'text-dark' },
                { code: 'green-200', hex: '#A5D6A7', name: 'green-200', textColor: 'text-dark' },
                { code: 'green-300', hex: '#81C784', name: 'green-300', textColor: 'text-dark' },
                { code: 'green-400', hex: '#66BB6A', name: 'green-400', textColor: 'text-dark' },
                { code: 'green-500', hex: '#4CAF50', name: 'green-500', textColor: 'text-dark' },
                { code: 'green-600', hex: '#43A047', name: 'green-600', textColor: 'text-light' },
                { code: 'green-700', hex: '#388E3C', name: 'green-700', textColor: 'text-light' },
                { code: 'green-800', hex: '#2E7D32', name: 'green-800', textColor: 'text-light' },
                { code: 'green-900', hex: '#1B5E20', name: 'green-900', textColor: 'text-light' },
                { code: 'green-a100', hex: '#B9F6CA', name: 'green-a100', textColor: 'text-dark' },
                { code: 'green-a200', hex: '#69F0AE', name: 'green-a200', textColor: 'text-dark' },
                { code: 'green-a400', hex: '#00E676', name: 'green-a400', textColor: 'text-dark' },
                { code: 'green-a700', hex: '#00C853', name: 'green-a700', textColor: 'text-dark' },
            ],
            
            lightGreen: [
                { code: 'lightGreen', hex: '#8BC34A', name: 'lightGreen', textColor: 'text-dark' },
                { code: 'lightGreen-50', hex: '#F1F8E9', name: 'lightGreen-50', textColor: 'text-dark' },
                { code: 'lightGreen-100', hex: '#DCEDC8', name: 'lightGreen-100', textColor: 'text-dark' },
                { code: 'lightGreen-200', hex: '#C5E1A5', name: 'lightGreen-200', textColor: 'text-dark' },
                { code: 'lightGreen-300', hex: '#AED581', name: 'lightGreen-300', textColor: 'text-dark' },
                { code: 'lightGreen-400', hex: '#9CCC65', name: 'lightGreen-400', textColor: 'text-dark' },
                { code: 'lightGreen-500', hex: '#8BC34A', name: 'lightGreen-500', textColor: 'text-dark' },
                { code: 'lightGreen-600', hex: '#7CB342', name: 'lightGreen-600', textColor: 'text-dark' },
                { code: 'lightGreen-700', hex: '#689F38', name: 'lightGreen-700', textColor: 'text-light' },
                { code: 'lightGreen-800', hex: '#558B2F', name: 'lightGreen-800', textColor: 'text-light' },
                { code: 'lightGreen-900', hex: '#33691E', name: 'lightGreen-900', textColor: 'text-light' },
                { code: 'lightGreen-a100', hex: '#CCFF90', name: 'lightGreen-a100', textColor: 'text-dark' },
                { code: 'lightGreen-a200', hex: '#B2FF59', name: 'lightGreen-a200', textColor: 'text-dark' },
                { code: 'lightGreen-a400', hex: '#76FF03', name: 'lightGreen-a400', textColor: 'text-dark' },
                { code: 'lightGreen-a700', hex: '#64DD17', name: 'lightGreen-a700', textColor: 'text-dark' },
            ],
            
            lime: [
                { code: 'lime', hex: '#CDDC39', name: 'lime', textColor: 'text-dark' },
                { code: 'lime-50', hex: '#F9FBE7', name: 'lime-50', textColor: 'text-dark' },
                { code: 'lime-100', hex: '#F0F4C3', name: 'lime-100', textColor: 'text-dark' },
                { code: 'lime-200', hex: '#E6EE9C', name: 'lime-200', textColor: 'text-dark' },
                { code: 'lime-300', hex: '#DCE775', name: 'lime-300', textColor: 'text-dark' },
                { code: 'lime-400', hex: '#D4E157', name: 'lime-400', textColor: 'text-dark' },
                { code: 'lime-500', hex: '#CDDC39', name: 'lime-500', textColor: 'text-dark' },
                { code: 'lime-600', hex: '#C0CA33', name: 'lime-600', textColor: 'text-dark' },
                { code: 'lime-700', hex: '#AFB42B', name: 'lime-700', textColor: 'text-dark' },
                { code: 'lime-800', hex: '#9E9D24', name: 'lime-800', textColor: 'text-dark' },
                { code: 'lime-900', hex: '#827717', name: 'lime-900', textColor: 'text-light' },
                { code: 'lime-a100', hex: '#F4FF81', name: 'lime-a100', textColor: 'text-dark' },
                { code: 'lime-a200', hex: '#EEFF41', name: 'lime-a200', textColor: 'text-dark' },
                { code: 'lime-a400', hex: '#C6FF00', name: 'lime-a400', textColor: 'text-dark' },
                { code: 'lime-a700', hex: '#AEEA00', name: 'lime-a700', textColor: 'text-dark' },
            ],
            
            yellow: [
                { code: 'yellow', hex: '#FFEB3B', name: 'yellow', textColor: 'text-dark' },
                { code: 'yellow-50', hex: '#FFFDE7', name: 'yellow-50', textColor: 'text-dark' },
                { code: 'yellow-100', hex: '#FFF9C4', name: 'yellow-100', textColor: 'text-dark' },
                { code: 'yellow-200', hex: '#FFF59D', name: 'yellow-200', textColor: 'text-dark' },
                { code: 'yellow-300', hex: '#FFF176', name: 'yellow-300', textColor: 'text-dark' },
                { code: 'yellow-400', hex: '#FFEE58', name: 'yellow-400', textColor: 'text-dark' },
                { code: 'yellow-500', hex: '#FFEB3B', name: 'yellow-500', textColor: 'text-dark' },
                { code: 'yellow-600', hex: '#FDD835', name: 'yellow-600', textColor: 'text-dark' },
                { code: 'yellow-700', hex: '#FBC02D', name: 'yellow-700', textColor: 'text-dark' },
                { code: 'yellow-800', hex: '#F9A825', name: 'yellow-800', textColor: 'text-dark' },
                { code: 'yellow-900', hex: '#F57F17', name: 'yellow-900', textColor: 'text-dark' },
                { code: 'yellow-a100', hex: '#FFFF8D', name: 'yellow-a100', textColor: 'text-dark' },
                { code: 'yellow-a200', hex: '#FFFF00', name: 'yellow-a200', textColor: 'text-dark' },
                { code: 'yellow-a400', hex: '#FFEA00', name: 'yellow-a400', textColor: 'text-dark' },
                { code: 'yellow-a700', hex: '#FFD600', name: 'yellow-a700', textColor: 'text-dark' },
            ],
            
            amber: [
                { code: 'amber', hex: '#FFC107', name: 'amber', textColor: 'text-dark' },
                { code: 'amber-50', hex: '#FFF8E1', name: 'amber-50', textColor: 'text-dark' },
                { code: 'amber-100', hex: '#FFECB3', name: 'amber-100', textColor: 'text-dark' },
                { code: 'amber-200', hex: '#FFE082', name: 'amber-200', textColor: 'text-dark' },
                { code: 'amber-300', hex: '#FFD54F', name: 'amber-300', textColor: 'text-dark' },
                { code: 'amber-400', hex: '#FFCA28', name: 'amber-400', textColor: 'text-dark' },
                { code: 'amber-500', hex: '#FFC107', name: 'amber-500', textColor: 'text-dark' },
                { code: 'amber-600', hex: '#FFB300', name: 'amber-600', textColor: 'text-dark' },
                { code: 'amber-700', hex: '#FFA000', name: 'amber-700', textColor: 'text-dark' },
                { code: 'amber-800', hex: '#FF8F00', name: 'amber-800', textColor: 'text-dark' },
                { code: 'amber-900', hex: '#FF6F00', name: 'amber-900', textColor: 'text-dark' },
                { code: 'amber-a100', hex: '#FFE57F', name: 'amber-a100', textColor: 'text-dark' },
                { code: 'amber-a200', hex: '#FFD740', name: 'amber-a200', textColor: 'text-dark' },
                { code: 'amber-a400', hex: '#FFC400', name: 'amber-a400', textColor: 'text-dark' },
                { code: 'amber-a700', hex: '#FFAB00', name: 'amber-a700', textColor: 'text-dark' },
            ],
            
            orange: [
                { code: 'orange', hex: '#FF9800', name: 'orange', textColor: 'text-dark' },
                { code: 'orange-50', hex: '#FFF3E0', name: 'orange-50', textColor: 'text-dark' },
                { code: 'orange-100', hex: '#FFE0B2', name: 'orange-100', textColor: 'text-dark' },
                { code: 'orange-200', hex: '#FFCC80', name: 'orange-200', textColor: 'text-dark' },
                { code: 'orange-300', hex: '#FFB74D', name: 'orange-300', textColor: 'text-dark' },
                { code: 'orange-400', hex: '#FFA726', name: 'orange-400', textColor: 'text-dark' },
                { code: 'orange-500', hex: '#FF9800', name: 'orange-500', textColor: 'text-dark' },
                { code: 'orange-600', hex: '#FB8C00', name: 'orange-600', textColor: 'text-dark' },
                { code: 'orange-700', hex: '#F57C00', name: 'orange-700', textColor: 'text-dark' },
                { code: 'orange-800', hex: '#EF6C00', name: 'orange-800', textColor: 'text-light' },
                { code: 'orange-900', hex: '#E65100', name: 'orange-900', textColor: 'text-light' },
                { code: 'orange-a100', hex: '#FFD180', name: 'orange-a100', textColor: 'text-dark' },
                { code: 'orange-a200', hex: '#FFAB40', name: 'orange-a200', textColor: 'text-dark' },
                { code: 'orange-a400', hex: '#FF9100', name: 'orange-a400', textColor: 'text-dark' },
                { code: 'orange-a700', hex: '#FF6D00', name: 'orange-a700', textColor: 'text-dark' },
            ],
            
            deepOrange: [
                { code: 'deepOrange', hex: '#FF5722', name: 'deepOrange', textColor: 'text-light' },
                { code: 'deepOrange-50', hex: '#FBE9E7', name: 'deepOrange-50', textColor: 'text-dark' },
                { code: 'deepOrange-100', hex: '#FFCCBC', name: 'deepOrange-100', textColor: 'text-dark' },
                { code: 'deepOrange-200', hex: '#FFAB91', name: 'deepOrange-200', textColor: 'text-dark' },
                { code: 'deepOrange-300', hex: '#FF8A65', name: 'deepOrange-300', textColor: 'text-dark' },
                { code: 'deepOrange-400', hex: '#FF7043', name: 'deepOrange-400', textColor: 'text-dark' },
                { code: 'deepOrange-500', hex: '#FF5722', name: 'deepOrange-500', textColor: 'text-light' },
                { code: 'deepOrange-600', hex: '#F4511E', name: 'deepOrange-600', textColor: 'text-light' },
                { code: 'deepOrange-700', hex: '#E64A19', name: 'deepOrange-700', textColor: 'text-light' },
                { code: 'deepOrange-800', hex: '#D84315', name: 'deepOrange-800', textColor: 'text-light' },
                { code: 'deepOrange-900', hex: '#BF360C', name: 'deepOrange-900', textColor: 'text-light' },
                { code: 'deepOrange-a100', hex: '#FF9E80', name: 'deepOrange-a100', textColor: 'text-dark' },
                { code: 'deepOrange-a200', hex: '#FF6E40', name: 'deepOrange-a200', textColor: 'text-dark' },
                { code: 'deepOrange-a400', hex: '#FF3D00', name: 'deepOrange-a400', textColor: 'text-light' },
                { code: 'deepOrange-a700', hex: '#DD2C00', name: 'deepOrange-a700', textColor: 'text-light' },
            ],
            
            brown: [
                { code: 'brown', hex: '#795548', name: 'brown', textColor: 'text-light' },
                { code: 'brown-50', hex: '#EFEBE9', name: 'brown-50', textColor: 'text-dark' },
                { code: 'brown-100', hex: '#D7CCC8', name: 'brown-100', textColor: 'text-dark' },
                { code: 'brown-200', hex: '#BCAAA4', name: 'brown-200', textColor: 'text-dark' },
                { code: 'brown-300', hex: '#A1887F', name: 'brown-300', textColor: 'text-light' },
                { code: 'brown-400', hex: '#8D6E63', name: 'brown-400', textColor: 'text-light' },
                { code: 'brown-500', hex: '#795548', name: 'brown-500', textColor: 'text-light' },
                { code: 'brown-600', hex: '#6D4C41', name: 'brown-600', textColor: 'text-light' },
                { code: 'brown-700', hex: '#5D4037', name: 'brown-700', textColor: 'text-light' },
                { code: 'brown-800', hex: '#4E342E', name: 'brown-800', textColor: 'text-light' },
                { code: 'brown-900', hex: '#3E2723', name: 'brown-900', textColor: 'text-light' },
            ],
            
            blueGrey: [
                { code: 'blueGrey', hex: '#607D8B', name: 'blueGrey', textColor: 'text-light' },
                { code: 'blueGrey-50', hex: '#ECEFF1', name: 'blueGrey-50', textColor: 'text-dark' },
                { code: 'blueGrey-100', hex: '#CFD8DC', name: 'blueGrey-100', textColor: 'text-dark' },
                { code: 'blueGrey-200', hex: '#B0BEC5', name: 'blueGrey-200', textColor: 'text-dark' },
                { code: 'blueGrey-300', hex: '#90A4AE', name: 'blueGrey-300', textColor: 'text-dark' },
                { code: 'blueGrey-400', hex: '#78909C', name: 'blueGrey-400', textColor: 'text-light' },
                { code: 'blueGrey-500', hex: '#607D8B', name: 'blueGrey-500', textColor: 'text-light' },
                { code: 'blueGrey-600', hex: '#546E7A', name: 'blueGrey-600', textColor: 'text-light' },
                { code: 'blueGrey-700', hex: '#455A64', name: 'blueGrey-700', textColor: 'text-light' },
                { code: 'blueGrey-800', hex: '#37474F', name: 'blueGrey-800', textColor: 'text-light' },
                { code: 'blueGrey-900', hex: '#263238', name: 'blueGrey-900', textColor: 'text-light' },
            ],
            
            grey: [
                { code: 'grey', hex: '#9E9E9E', name: 'grey', textColor: 'text-dark' },
                { code: 'grey-50', hex: '#FAFAFA', name: 'grey-50', textColor: 'text-dark' },
                { code: 'grey-100', hex: '#F5F5F5', name: 'grey-100', textColor: 'text-dark' },
                { code: 'grey-200', hex: '#EEEEEE', name: 'grey-200', textColor: 'text-dark' },
                { code: 'grey-300', hex: '#E0E0E0', name: 'grey-300', textColor: 'text-dark' },
                { code: 'grey-400', hex: '#BDBDBD', name: 'grey-400', textColor: 'text-dark' },
                { code: 'grey-500', hex: '#9E9E9E', name: 'grey-500', textColor: 'text-dark' },
                { code: 'grey-600', hex: '#757575', name: 'grey-600', textColor: 'text-light' },
                { code: 'grey-700', hex: '#616161', name: 'grey-700', textColor: 'text-light' },
                { code: 'grey-800', hex: '#424242', name: 'grey-800', textColor: 'text-light' },
                { code: 'grey-900', hex: '#212121', name: 'grey-900', textColor: 'text-light' },
            ],
        };
        
        /*
        Autoscroll on target div upon page init
        $scope.$on('$includeContentLoaded', function () {
            var component = document.getElementById($scope.component);
            
            if (typeof(component) != 'undefined' && component != null) {
                var offsets = component.getBoundingClientRect();
                
                document.body.scrollTop = offsets.top;
            }
        });
        */
    }
})();


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
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function pluginsController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.pageName = "plugins";
        $scope.pageModule = 'plugins';
        $scope.plugin = $routeParams.plugin;
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
