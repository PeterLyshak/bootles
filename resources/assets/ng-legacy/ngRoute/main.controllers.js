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
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function componentsController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.component = $routeParams.component;
        $scope.pageModule = 'components';
        $scope.pageName = $scope.component ? $scope.component : "colors";
        $scope.errors = {};
        $scope.messages = {};
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
