(function() {
    'use strict';
    
    angular.module('myApp', ['ngRoute']);
})();
(function() {
    'use strict';
    
    angular
        .module('myApp')
        .config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    
    function config($routeProvider, $locationProvider, $httpProvider) {
        // $httpProvider.defaults.headers.common['X-PJAX'] = true;
        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // $locationProvider.html5Mode(true);
        
        $routeProvider.
            when('/', {
                templateUrl: 'demo/partials/welcome.html',
                controller: 'welcomeController'
            }).
            when('/bootstrap', {
                templateUrl: 'demo/partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/bootstrap/:component', {
                templateUrl: 'demo/partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/css', {
                templateUrl: 'demo/partials/css.html',
                controller: 'cssController'
            }).
            when('/plugins/:plugin', {
                templateUrl: 'demo/partials/plugins.html',
                controller: 'pluginsController'
            }).
            // when('/portfolio/:phoneId', {
                // templateUrl: 'demo/partials/phone-detail.html',
                // controller: 'PhoneDetailCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
        
    }
})();


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
        .controller('pluginSwiperController', pluginSwiperController);
        
    pluginSwiperController.$inject = [
        '$scope',
        '$location',
        '$route',
        '$routeParams',
        '$templateCache',
        '$http',
    ];
    
    function pluginSwiperController($scope, $location, $route, $routeParams, $templateCache, $http) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.pageName = "swiper";
        $scope.pageModule = 'plugins';
        $scope.plugin = $routeParams.plugin;
        $scope.errors = {};
        $scope.messages = {};
        
        // make code pretty
        if (window.prettyPrint) {
            prettyPrint();
        }
    
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
        });
        
        /*
        $scope.$on('$includeContentLoaded', function () {
            var plugin = document.getElementById($scope.plugin);
            
            if (typeof(plugin) != 'undefined' && plugin != null) {
                var offsets = plugin.getBoundingClientRect();
                
                console.log(offsets);
                document.body.scrollTop = offsets.top;
            }
        });
        
        $scope.peptasiaIcons = [
            { ascii: '&#57345;', unicode: 'e001', name: 'Disney Resort', icon: 'peptasia-disney-resort' },
            { ascii: '&#57346;', unicode: 'e002', name: 'California Adventure', icon: 'peptasia-california-adventure' },
            { ascii: '&#57347;', unicode: 'e003', name: 'Disney Paris', icon: 'peptasia-disney-paris' },
            { ascii: '&#57348;', unicode: 'e004', name: 'Shanghai Disney Resort', icon: 'peptasia-shanghai-disney-resort' },
            { ascii: '&#57349;', unicode: 'e005', name: 'Hong Kong Disney', icon: 'peptasia-hongkong-disney' },
            { ascii: '&#57350;', unicode: 'e006', name: 'Tokyo Disney', icon: 'peptasia-tokyo-disney' },
            { ascii: '&#57351;', unicode: 'e007', name: 'Aulani Resort Hawaii', icon: 'peptasia-aulani-resort-hawaii' },
            { ascii: '&#57352;', unicode: 'e008', name: 'Adventure by Disney', icon: 'peptasia-adventure-by-disney' },
            { ascii: '&#57353;', unicode: 'e009', name: 'Disney Park Generic Castle', icon: 'peptasia-disney-park-generic-castle' },
            { ascii: '&#57354;', unicode: 'e00a', name: 'Leadership', icon: 'peptasia-leadership' },
            { ascii: '&#57355;', unicode: 'e00b', name: 'Selection / Training', icon: 'peptasia-selection-training' },
            { ascii: '&#57356;', unicode: 'e00c', name: 'Quality Service', icon: 'peptasia-quality-service' },
            { ascii: '&#57357;', unicode: 'e00d', name: 'Brand Royalty', icon: 'peptasia-brand-royalty' },
            { ascii: '&#57358;', unicode: 'e00e', name: 'Creativity/Innovate', icon: 'peptasia-creativity-innovate' },
            { ascii: '&#57359;', unicode: 'e00f', name: 'Business Excellence', icon: 'peptasia-business-excellence' },
            { ascii: '&#57360;', unicode: 'e010', name: 'Medical Excellence', icon: 'peptasia-medical-excellence' },
            { ascii: '&#57361;', unicode: 'e011', name: 'Catalogs',  icon: 'peptasia-catalogs' },
            { ascii: '&#57362;', unicode: 'e012', name: 'Disney Park',  icon: 'peptasia-disney-park' },
            { ascii: '&#57363;', unicode: 'e013', name: 'Disneyland Resort',  icon: 'peptasia-disneyland-resort' },
            { ascii: '&#57364;', unicode: 'e014', name: 'City Hall Services DLR/HKDL',  icon: 'peptasia-city-hall-services' },
            { ascii: '&#57365;', unicode: 'e015', name: 'HKDL Magic Access & Member Services',  icon: 'peptasia-hkdl-magic-access' },
            { ascii: '&#57366;', unicode: 'e016', name: 'Downtown Disney',  icon: 'peptasia-downtown-disney' },
            { ascii: '&#57408;', unicode: 'e040', name: 'All Parks and & Resorts',  icon: 'peptasia-all-parks-and-resorts' },
            { ascii: '&#57409;', unicode: 'e041', name: 'Magic Kingdom',  icon: 'peptasia-magic-kingdom' },
            { ascii: '&#57410;', unicode: 'e042', name: 'EPCOT',  icon: 'peptasia-epcot' },
            { ascii: '&#57411;', unicode: 'e043', name: 'Animal Kingdom',  icon: 'peptasia-animal-kingdom' },
            { ascii: '&#57412;', unicode: 'e044', name: 'Hollywood Studios',  icon: 'peptasia-hollywood-studios' },
            { ascii: '&#57413;', unicode: 'e045', name: 'Typhoon Lagoon',  icon: 'peptasia-typhoon-lagoon' },
            { ascii: '&#57414;', unicode: 'e046', name: 'Blizzard Beach',  icon: 'peptasia-blizzard-beach' },
            { ascii: '&#57415;', unicode: 'e047', name: 'Disney Springs', icon: 'peptasia-disney-springs' },
            { ascii: '&#57416;', unicode: 'e048', name: 'ESPN Wide World of Sports',  icon: 'peptasia-espn-wide-world-sports' },
            { ascii: '&#57417;', unicode: 'e049', name: 'Resorts',  icon: 'peptasia-resorts' },
            { ascii: '&#57418;', unicode: 'e04a', name: 'Disney Beach Resorts',  icon: 'peptasia-disney-beach-resorts' },
            { ascii: '&#57419;', unicode: 'e04b', name: 'Disney Boardwalk',  icon: 'peptasia-disney-boardwalk' },
            { ascii: '&#57420;', unicode: 'e04c', name: 'All Categories',  icon: 'peptasia-all-categories' },
            { ascii: '&#57421;', unicode: 'e04d', name: 'Cirque Du Soleil La Nouba',  icon: 'peptasia-cirque-du-soleil-la-nouba' },
            { ascii: '&#57472;', unicode: 'e080', name: 'Disney Cruise Line',  icon: 'peptasia-disney-cruise-line' },
            { ascii: '&#57473;', unicode: 'e081', name: 'DCL Our Ships',  icon: 'peptasia-dcl-our-ships' },
            { ascii: '&#57474;', unicode: 'e082', name: 'DCL Destinations',  icon: 'peptasia-dcl-destinations' },
            { ascii: '&#57475;', unicode: 'e083', name: 'DCL Onboard Fun',  icon: 'peptasia-dcl-onboard-fun' },
            { ascii: '&#57476;', unicode: 'e084', name: 'DCL New Cruisers', icon: 'peptasia-dcl-new-cruisers' },
            { ascii: '&#57477;', unicode: 'e085', name: 'DCL Port Adventures',  icon: 'peptasia-dcl-port-adventures' },
        ];
        */
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJyb3V0ZXMubW9kdWxlLmpzIiwiY29udHJvbGxlcnMuanMiLCJwbHVnaW5zLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxXQUFBO0lBQ0E7O0lBRUEsUUFBQSxPQUFBLFNBQUEsQ0FBQTs7QUNIQSxDQUFBLFdBQUE7SUFDQTs7SUFFQTtTQUNBLE9BQUE7U0FDQSxPQUFBOztJQUVBLE9BQUEsVUFBQSxDQUFBLGtCQUFBLHFCQUFBOztJQUVBLFNBQUEsT0FBQSxnQkFBQSxtQkFBQSxlQUFBOzs7OztRQUtBO1lBQ0EsS0FBQSxLQUFBO2dCQUNBLGFBQUE7Z0JBQ0EsWUFBQTs7WUFFQSxLQUFBLGNBQUE7Z0JBQ0EsYUFBQTtnQkFDQSxZQUFBOztZQUVBLEtBQUEseUJBQUE7Z0JBQ0EsYUFBQTtnQkFDQSxZQUFBOztZQUVBLEtBQUEsUUFBQTtnQkFDQSxhQUFBO2dCQUNBLFlBQUE7O1lBRUEsS0FBQSxvQkFBQTtnQkFDQSxhQUFBO2dCQUNBLFlBQUE7Ozs7OztZQU1BLFVBQUE7Z0JBQ0EsWUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsQ0FBQSxXQUFBO0lBQ0E7O0lBRUE7U0FDQSxPQUFBO1NBQ0EsV0FBQSxvQkFBQTs7SUFFQSxpQkFBQSxVQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7SUFHQSxTQUFBLGlCQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLFFBQUEsSUFBQTs7Ozs7Ozs7Ozs7O0FBWUEsQ0FBQSxXQUFBO0lBQ0E7O0lBRUE7U0FDQSxPQUFBO1NBQ0EsV0FBQSxxQkFBQTs7SUFFQSxrQkFBQSxVQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7SUFHQSxTQUFBLGtCQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsWUFBQTtRQUNBLE9BQUEsZUFBQTtRQUNBLE9BQUEsV0FBQTtRQUNBLE9BQUEsYUFBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSxDQUFBLFdBQUE7SUFDQTs7SUFFQTtTQUNBLE9BQUE7U0FDQSxXQUFBLGlCQUFBOztJQUVBLGNBQUEsVUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7O0lBR0EsU0FBQSxjQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsWUFBQTtRQUNBLE9BQUEsZUFBQTtRQUNBLE9BQUEsV0FBQTtRQUNBLE9BQUEsYUFBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsV0FBQTs7Ozs7Ozs7Ozs7O0FBWUEsQ0FBQSxXQUFBO0lBQ0E7O0lBRUE7U0FDQSxPQUFBO1NBQ0EsV0FBQSx1QkFBQTs7SUFFQSxvQkFBQSxVQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7SUFHQSxTQUFBLG9CQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsWUFBQTtRQUNBLE9BQUEsZUFBQTtRQUNBLE9BQUEsWUFBQSxhQUFBO1FBQ0EsT0FBQSxhQUFBO1FBQ0EsT0FBQSxXQUFBLE9BQUEsWUFBQSxPQUFBLFlBQUE7UUFDQSxPQUFBLFNBQUE7UUFDQSxPQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsQ0FBQSxXQUFBO0lBQ0E7O0lBRUE7U0FDQSxPQUFBO1NBQ0EsV0FBQSxxQkFBQTs7SUFFQSxrQkFBQSxVQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7SUFHQSxTQUFBLGtCQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsWUFBQTtRQUNBLE9BQUEsZUFBQTtRQUNBLE9BQUEsV0FBQTtRQUNBLE9BQUEsYUFBQTtRQUNBLE9BQUEsU0FBQSxhQUFBO1FBQ0EsT0FBQSxXQUFBLE9BQUE7UUFDQSxPQUFBLFNBQUE7UUFDQSxPQUFBLFdBQUE7O1FBRUEsT0FBQSxJQUFBLHlCQUFBLFlBQUE7WUFDQSxJQUFBLFNBQUEsU0FBQSxlQUFBLE9BQUE7O1lBRUEsSUFBQSxPQUFBLFlBQUEsZUFBQSxXQUFBLE1BQUE7Z0JBQ0EsSUFBQSxVQUFBLE9BQUE7O2dCQUVBLFNBQUEsS0FBQSxZQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7QUMzTUEsQ0FBQSxXQUFBO0lBQ0E7O0lBRUE7U0FDQSxPQUFBO1NBQ0EsV0FBQSwwQkFBQTs7SUFFQSx1QkFBQSxVQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7SUFHQSxTQUFBLHVCQUFBLFFBQUEsV0FBQSxRQUFBLGNBQUEsZ0JBQUEsT0FBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLE9BQUEsWUFBQTtRQUNBLE9BQUEsZUFBQTtRQUNBLE9BQUEsV0FBQTtRQUNBLE9BQUEsYUFBQTtRQUNBLE9BQUEsU0FBQSxhQUFBO1FBQ0EsT0FBQSxTQUFBO1FBQ0EsT0FBQSxXQUFBOzs7UUFHQSxJQUFBLE9BQUEsYUFBQTtZQUNBOzs7UUFHQSxJQUFBLFNBQUEsSUFBQSxPQUFBLHFCQUFBO1lBQ0EsWUFBQTtZQUNBLHFCQUFBO1lBQ0EsWUFBQTtZQUNBLFlBQUE7WUFDQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSIsImZpbGUiOiJhcHAubmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsnbmdSb3V0ZSddKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBcclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdteUFwcCcpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG4gICAgXHJcbiAgICBjb25maWcuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLCAnJGh0dHBQcm92aWRlciddO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XHJcbiAgICAgICAgLy8gJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1QSkFYJ10gPSB0cnVlO1xyXG4gICAgICAgIC8vICRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XHJcbiAgICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLlxyXG4gICAgICAgICAgICB3aGVuKCcvJywge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkZW1vL3BhcnRpYWxzL3dlbGNvbWUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnd2VsY29tZUNvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH0pLlxyXG4gICAgICAgICAgICB3aGVuKCcvYm9vdHN0cmFwJywge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkZW1vL3BhcnRpYWxzL2Jvb3RzdHJhcC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdib290c3RyYXBDb250cm9sbGVyJ1xyXG4gICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgd2hlbignL2Jvb3RzdHJhcC86Y29tcG9uZW50Jywge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkZW1vL3BhcnRpYWxzL2Jvb3RzdHJhcC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdib290c3RyYXBDb250cm9sbGVyJ1xyXG4gICAgICAgICAgICB9KS5cclxuICAgICAgICAgICAgd2hlbignL2NzcycsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGVtby9wYXJ0aWFscy9jc3MuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3NzQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfSkuXHJcbiAgICAgICAgICAgIHdoZW4oJy9wbHVnaW5zLzpwbHVnaW4nLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2RlbW8vcGFydGlhbHMvcGx1Z2lucy5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwbHVnaW5zQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfSkuXHJcbiAgICAgICAgICAgIC8vIHdoZW4oJy9wb3J0Zm9saW8vOnBob25lSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZVVybDogJ2RlbW8vcGFydGlhbHMvcGhvbmUtZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgLy8gY29udHJvbGxlcjogJ1Bob25lRGV0YWlsQ3RybCdcclxuICAgICAgICAgICAgLy8gfSkuXHJcbiAgICAgICAgICAgIG90aGVyd2lzZSh7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiAnLydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCIvKipcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEdsb2JhbCBDb250cm9sbGVyXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufFxyXG4qL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbXlBcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdnbG9iYWxDb250cm9sbGVyJywgZ2xvYmFsQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICBnbG9iYWxDb250cm9sbGVyLiRpbmplY3QgPSBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgJyRsb2NhdGlvbicsXHJcbiAgICAgICAgJyRyb3V0ZScsXHJcbiAgICAgICAgJyRyb3V0ZVBhcmFtcycsXHJcbiAgICAgICAgJyR0ZW1wbGF0ZUNhY2hlJyxcclxuICAgICAgICAnJGh0dHAnLFxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZ2xvYmFsQ29udHJvbGxlcigkc2NvcGUsICRsb2NhdGlvbiwgJHJvdXRlLCAkcm91dGVQYXJhbXMsICR0ZW1wbGF0ZUNhY2hlLCAkaHR0cCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIENvbnRyb2xsZXIgSW5pdFwiKTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG4vKipcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IFdlbGNvbWUgQ29udHJvbGxlclxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnxcclxuKi9cclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ215QXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignd2VsY29tZUNvbnRyb2xsZXInLCB3ZWxjb21lQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB3ZWxjb21lQ29udHJvbGxlci4kaW5qZWN0ID0gW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckbG9jYXRpb24nLFxyXG4gICAgICAgICckcm91dGUnLFxyXG4gICAgICAgICckcm91dGVQYXJhbXMnLFxyXG4gICAgICAgICckdGVtcGxhdGVDYWNoZScsXHJcbiAgICAgICAgJyRodHRwJyxcclxuICAgIF07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHdlbGNvbWVDb250cm9sbGVyKCRzY29wZSwgJGxvY2F0aW9uLCAkcm91dGUsICRyb3V0ZVBhcmFtcywgJHRlbXBsYXRlQ2FjaGUsICRodHRwKSB7XHJcbiAgICAgICAgJHNjb3BlLiRyb3V0ZSA9ICRyb3V0ZTtcclxuICAgICAgICAkc2NvcGUuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgICRzY29wZS4kcm91dGVQYXJhbXMgPSAkcm91dGVQYXJhbXM7XHJcbiAgICAgICAgJHNjb3BlLnBhZ2VOYW1lID0gJ3dlbGNvbWUnO1xyXG4gICAgICAgICRzY29wZS5wYWdlTW9kdWxlID0gJ2luZGV4JztcclxuICAgICAgICAkc2NvcGUuZXJyb3JzID0ge307XHJcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VzID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJGh0dHAuZ2V0KCdwaG9uZXMvcGhvbmVzLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnBob25lcyA9IGRhdGE7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJC5nZXQoJ2xpYnMvc2VxdWVuY2Uvc2VxdWVuY2Vqcy1vcHRpb25zLm1vZGVybi1zbGlkZS1pbi5qcycpO1xyXG5cclxuICAgICAgICAvLyAkc2NvcGUub3JkZXJQcm9wID0gJ2FnZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgc2sgPSAodHlwZW9mICRyb3V0ZVBhcmFtcy5zayAhPT0gJ3VuZGVmaW5lZCcpID8gJHJvdXRlUGFyYW1zLnNrIDogbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHNrKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2J1c2luZXNzJyA6XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudXNlclR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudXNlclR5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuLyoqXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBDU1MgQ29udHJvbGxlclxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnxcclxuKi9cclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ215QXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignY3NzQ29udHJvbGxlcicsIGNzc0NvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgY3NzQ29udHJvbGxlci4kaW5qZWN0ID0gW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckbG9jYXRpb24nLFxyXG4gICAgICAgICckcm91dGUnLFxyXG4gICAgICAgICckcm91dGVQYXJhbXMnLFxyXG4gICAgICAgICckdGVtcGxhdGVDYWNoZScsXHJcbiAgICAgICAgJyRodHRwJyxcclxuICAgIF07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNzc0NvbnRyb2xsZXIoJHNjb3BlLCAkbG9jYXRpb24sICRyb3V0ZSwgJHJvdXRlUGFyYW1zLCAkdGVtcGxhdGVDYWNoZSwgJGh0dHApIHtcclxuICAgICAgICAkc2NvcGUuJHJvdXRlID0gJHJvdXRlO1xyXG4gICAgICAgICRzY29wZS4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgJHNjb3BlLiRyb3V0ZVBhcmFtcyA9ICRyb3V0ZVBhcmFtcztcclxuICAgICAgICAkc2NvcGUucGFnZU5hbWUgPSBcImNzc1wiO1xyXG4gICAgICAgICRzY29wZS5wYWdlTW9kdWxlID0gJ2Nzcyc7XHJcbiAgICAgICAgJHNjb3BlLmVycm9ycyA9IHt9O1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlcyA9IHt9O1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcbi8qKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgQm9vdHN0cmFwIENvbnRyb2xsZXJcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58XHJcbiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBcclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdteUFwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ2Jvb3RzdHJhcENvbnRyb2xsZXInLCBib290c3RyYXBDb250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIGJvb3RzdHJhcENvbnRyb2xsZXIuJGluamVjdCA9IFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICAnJGxvY2F0aW9uJyxcclxuICAgICAgICAnJHJvdXRlJyxcclxuICAgICAgICAnJHJvdXRlUGFyYW1zJyxcclxuICAgICAgICAnJHRlbXBsYXRlQ2FjaGUnLFxyXG4gICAgICAgICckaHR0cCcsXHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBib290c3RyYXBDb250cm9sbGVyKCRzY29wZSwgJGxvY2F0aW9uLCAkcm91dGUsICRyb3V0ZVBhcmFtcywgJHRlbXBsYXRlQ2FjaGUsICRodHRwKSB7XHJcbiAgICAgICAgJHNjb3BlLiRyb3V0ZSA9ICRyb3V0ZTtcclxuICAgICAgICAkc2NvcGUuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgICRzY29wZS4kcm91dGVQYXJhbXMgPSAkcm91dGVQYXJhbXM7XHJcbiAgICAgICAgJHNjb3BlLmNvbXBvbmVudCA9ICRyb3V0ZVBhcmFtcy5jb21wb25lbnQ7XHJcbiAgICAgICAgJHNjb3BlLnBhZ2VNb2R1bGUgPSAnYm9vdHN0cmFwJztcclxuICAgICAgICAkc2NvcGUucGFnZU5hbWUgPSAkc2NvcGUuY29tcG9uZW50ID8gJHNjb3BlLmNvbXBvbmVudCA6IFwiYnV0dG9uc1wiO1xyXG4gICAgICAgICRzY29wZS5lcnJvcnMgPSB7fTtcclxuICAgICAgICAkc2NvcGUubWVzc2FnZXMgPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICAvKlxyXG4gICAgICAgIEF1dG9zY3JvbGwgb24gdGFyZ2V0IGRpdiB1cG9uIHBhZ2UgaW5pdFxyXG4gICAgICAgICRzY29wZS4kb24oJyRpbmNsdWRlQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRzY29wZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjb21wb25lbnQpICE9ICd1bmRlZmluZWQnICYmIGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0cyA9IGNvbXBvbmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXRzLnRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICovXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuLyoqXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBQbHVnaW5zIENvbnRyb2xsZXJcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58XHJcbiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBcclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdteUFwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3BsdWdpbnNDb250cm9sbGVyJywgcGx1Z2luc0NvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgcGx1Z2luc0NvbnRyb2xsZXIuJGluamVjdCA9IFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICAnJGxvY2F0aW9uJyxcclxuICAgICAgICAnJHJvdXRlJyxcclxuICAgICAgICAnJHJvdXRlUGFyYW1zJyxcclxuICAgICAgICAnJHRlbXBsYXRlQ2FjaGUnLFxyXG4gICAgICAgICckaHR0cCcsXHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwbHVnaW5zQ29udHJvbGxlcigkc2NvcGUsICRsb2NhdGlvbiwgJHJvdXRlLCAkcm91dGVQYXJhbXMsICR0ZW1wbGF0ZUNhY2hlLCAkaHR0cCkge1xyXG4gICAgICAgICRzY29wZS4kcm91dGUgPSAkcm91dGU7XHJcbiAgICAgICAgJHNjb3BlLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICAkc2NvcGUuJHJvdXRlUGFyYW1zID0gJHJvdXRlUGFyYW1zO1xyXG4gICAgICAgICRzY29wZS5wYWdlTmFtZSA9IFwicGx1Z2luc1wiO1xyXG4gICAgICAgICRzY29wZS5wYWdlTW9kdWxlID0gJ3BsdWdpbnMnO1xyXG4gICAgICAgICRzY29wZS5wbHVnaW4gPSAkcm91dGVQYXJhbXMucGx1Z2luO1xyXG4gICAgICAgICRzY29wZS5wYWdlTmFtZSA9ICRzY29wZS5wbHVnaW47XHJcbiAgICAgICAgJHNjb3BlLmVycm9ycyA9IHt9O1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzY29wZS4kb24oJyRpbmNsdWRlQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBsdWdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRzY29wZS5wbHVnaW4pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihwbHVnaW4pICE9PSAndW5kZWZpbmVkJyAmJiBwbHVnaW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRzID0gcGx1Z2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldHMudG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIi8qKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgQ29tcG9uZW50cyBDb250cm9sbGVyXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufFxyXG4qL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbXlBcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdwbHVnaW5Td2lwZXJDb250cm9sbGVyJywgcGx1Z2luU3dpcGVyQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICBwbHVnaW5Td2lwZXJDb250cm9sbGVyLiRpbmplY3QgPSBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgJyRsb2NhdGlvbicsXHJcbiAgICAgICAgJyRyb3V0ZScsXHJcbiAgICAgICAgJyRyb3V0ZVBhcmFtcycsXHJcbiAgICAgICAgJyR0ZW1wbGF0ZUNhY2hlJyxcclxuICAgICAgICAnJGh0dHAnLFxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcGx1Z2luU3dpcGVyQ29udHJvbGxlcigkc2NvcGUsICRsb2NhdGlvbiwgJHJvdXRlLCAkcm91dGVQYXJhbXMsICR0ZW1wbGF0ZUNhY2hlLCAkaHR0cCkge1xyXG4gICAgICAgICRzY29wZS4kcm91dGUgPSAkcm91dGU7XHJcbiAgICAgICAgJHNjb3BlLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICAkc2NvcGUuJHJvdXRlUGFyYW1zID0gJHJvdXRlUGFyYW1zO1xyXG4gICAgICAgICRzY29wZS5wYWdlTmFtZSA9IFwic3dpcGVyXCI7XHJcbiAgICAgICAgJHNjb3BlLnBhZ2VNb2R1bGUgPSAncGx1Z2lucyc7XHJcbiAgICAgICAgJHNjb3BlLnBsdWdpbiA9ICRyb3V0ZVBhcmFtcy5wbHVnaW47XHJcbiAgICAgICAgJHNjb3BlLmVycm9ycyA9IHt9O1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIG1ha2UgY29kZSBwcmV0dHlcclxuICAgICAgICBpZiAod2luZG93LnByZXR0eVByaW50KSB7XHJcbiAgICAgICAgICAgIHByZXR0eVByaW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2QnV0dG9uOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvKlxyXG4gICAgICAgICRzY29wZS4kb24oJyRpbmNsdWRlQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBsdWdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRzY29wZS5wbHVnaW4pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihwbHVnaW4pICE9ICd1bmRlZmluZWQnICYmIHBsdWdpbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0cyA9IHBsdWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2Zmc2V0cyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldHMudG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLnBlcHRhc2lhSWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzQ1OycsIHVuaWNvZGU6ICdlMDAxJywgbmFtZTogJ0Rpc25leSBSZXNvcnQnLCBpY29uOiAncGVwdGFzaWEtZGlzbmV5LXJlc29ydCcgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNDY7JywgdW5pY29kZTogJ2UwMDInLCBuYW1lOiAnQ2FsaWZvcm5pYSBBZHZlbnR1cmUnLCBpY29uOiAncGVwdGFzaWEtY2FsaWZvcm5pYS1hZHZlbnR1cmUnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzQ3OycsIHVuaWNvZGU6ICdlMDAzJywgbmFtZTogJ0Rpc25leSBQYXJpcycsIGljb246ICdwZXB0YXNpYS1kaXNuZXktcGFyaXMnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzQ4OycsIHVuaWNvZGU6ICdlMDA0JywgbmFtZTogJ1NoYW5naGFpIERpc25leSBSZXNvcnQnLCBpY29uOiAncGVwdGFzaWEtc2hhbmdoYWktZGlzbmV5LXJlc29ydCcgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNDk7JywgdW5pY29kZTogJ2UwMDUnLCBuYW1lOiAnSG9uZyBLb25nIERpc25leScsIGljb246ICdwZXB0YXNpYS1ob25na29uZy1kaXNuZXknIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzUwOycsIHVuaWNvZGU6ICdlMDA2JywgbmFtZTogJ1Rva3lvIERpc25leScsIGljb246ICdwZXB0YXNpYS10b2t5by1kaXNuZXknIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzUxOycsIHVuaWNvZGU6ICdlMDA3JywgbmFtZTogJ0F1bGFuaSBSZXNvcnQgSGF3YWlpJywgaWNvbjogJ3BlcHRhc2lhLWF1bGFuaS1yZXNvcnQtaGF3YWlpJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzM1MjsnLCB1bmljb2RlOiAnZTAwOCcsIG5hbWU6ICdBZHZlbnR1cmUgYnkgRGlzbmV5JywgaWNvbjogJ3BlcHRhc2lhLWFkdmVudHVyZS1ieS1kaXNuZXknIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzUzOycsIHVuaWNvZGU6ICdlMDA5JywgbmFtZTogJ0Rpc25leSBQYXJrIEdlbmVyaWMgQ2FzdGxlJywgaWNvbjogJ3BlcHRhc2lhLWRpc25leS1wYXJrLWdlbmVyaWMtY2FzdGxlJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzM1NDsnLCB1bmljb2RlOiAnZTAwYScsIG5hbWU6ICdMZWFkZXJzaGlwJywgaWNvbjogJ3BlcHRhc2lhLWxlYWRlcnNoaXAnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzU1OycsIHVuaWNvZGU6ICdlMDBiJywgbmFtZTogJ1NlbGVjdGlvbiAvIFRyYWluaW5nJywgaWNvbjogJ3BlcHRhc2lhLXNlbGVjdGlvbi10cmFpbmluZycgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNTY7JywgdW5pY29kZTogJ2UwMGMnLCBuYW1lOiAnUXVhbGl0eSBTZXJ2aWNlJywgaWNvbjogJ3BlcHRhc2lhLXF1YWxpdHktc2VydmljZScgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNTc7JywgdW5pY29kZTogJ2UwMGQnLCBuYW1lOiAnQnJhbmQgUm95YWx0eScsIGljb246ICdwZXB0YXNpYS1icmFuZC1yb3lhbHR5JyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzM1ODsnLCB1bmljb2RlOiAnZTAwZScsIG5hbWU6ICdDcmVhdGl2aXR5L0lubm92YXRlJywgaWNvbjogJ3BlcHRhc2lhLWNyZWF0aXZpdHktaW5ub3ZhdGUnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzU5OycsIHVuaWNvZGU6ICdlMDBmJywgbmFtZTogJ0J1c2luZXNzIEV4Y2VsbGVuY2UnLCBpY29uOiAncGVwdGFzaWEtYnVzaW5lc3MtZXhjZWxsZW5jZScgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNjA7JywgdW5pY29kZTogJ2UwMTAnLCBuYW1lOiAnTWVkaWNhbCBFeGNlbGxlbmNlJywgaWNvbjogJ3BlcHRhc2lhLW1lZGljYWwtZXhjZWxsZW5jZScgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNjE7JywgdW5pY29kZTogJ2UwMTEnLCBuYW1lOiAnQ2F0YWxvZ3MnLCAgaWNvbjogJ3BlcHRhc2lhLWNhdGFsb2dzJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzM2MjsnLCB1bmljb2RlOiAnZTAxMicsIG5hbWU6ICdEaXNuZXkgUGFyaycsICBpY29uOiAncGVwdGFzaWEtZGlzbmV5LXBhcmsnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzYzOycsIHVuaWNvZGU6ICdlMDEzJywgbmFtZTogJ0Rpc25leWxhbmQgUmVzb3J0JywgIGljb246ICdwZXB0YXNpYS1kaXNuZXlsYW5kLXJlc29ydCcgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNjQ7JywgdW5pY29kZTogJ2UwMTQnLCBuYW1lOiAnQ2l0eSBIYWxsIFNlcnZpY2VzIERMUi9IS0RMJywgIGljb246ICdwZXB0YXNpYS1jaXR5LWhhbGwtc2VydmljZXMnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3MzY1OycsIHVuaWNvZGU6ICdlMDE1JywgbmFtZTogJ0hLREwgTWFnaWMgQWNjZXNzICYgTWVtYmVyIFNlcnZpY2VzJywgIGljb246ICdwZXB0YXNpYS1oa2RsLW1hZ2ljLWFjY2VzcycgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTczNjY7JywgdW5pY29kZTogJ2UwMTYnLCBuYW1lOiAnRG93bnRvd24gRGlzbmV5JywgIGljb246ICdwZXB0YXNpYS1kb3dudG93bi1kaXNuZXknIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDA4OycsIHVuaWNvZGU6ICdlMDQwJywgbmFtZTogJ0FsbCBQYXJrcyBhbmQgJiBSZXNvcnRzJywgIGljb246ICdwZXB0YXNpYS1hbGwtcGFya3MtYW5kLXJlc29ydHMnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDA5OycsIHVuaWNvZGU6ICdlMDQxJywgbmFtZTogJ01hZ2ljIEtpbmdkb20nLCAgaWNvbjogJ3BlcHRhc2lhLW1hZ2ljLWtpbmdkb20nIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDEwOycsIHVuaWNvZGU6ICdlMDQyJywgbmFtZTogJ0VQQ09UJywgIGljb246ICdwZXB0YXNpYS1lcGNvdCcgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0MTE7JywgdW5pY29kZTogJ2UwNDMnLCBuYW1lOiAnQW5pbWFsIEtpbmdkb20nLCAgaWNvbjogJ3BlcHRhc2lhLWFuaW1hbC1raW5nZG9tJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQxMjsnLCB1bmljb2RlOiAnZTA0NCcsIG5hbWU6ICdIb2xseXdvb2QgU3R1ZGlvcycsICBpY29uOiAncGVwdGFzaWEtaG9sbHl3b29kLXN0dWRpb3MnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDEzOycsIHVuaWNvZGU6ICdlMDQ1JywgbmFtZTogJ1R5cGhvb24gTGFnb29uJywgIGljb246ICdwZXB0YXNpYS10eXBob29uLWxhZ29vbicgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0MTQ7JywgdW5pY29kZTogJ2UwNDYnLCBuYW1lOiAnQmxpenphcmQgQmVhY2gnLCAgaWNvbjogJ3BlcHRhc2lhLWJsaXp6YXJkLWJlYWNoJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQxNTsnLCB1bmljb2RlOiAnZTA0NycsIG5hbWU6ICdEaXNuZXkgU3ByaW5ncycsIGljb246ICdwZXB0YXNpYS1kaXNuZXktc3ByaW5ncycgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0MTY7JywgdW5pY29kZTogJ2UwNDgnLCBuYW1lOiAnRVNQTiBXaWRlIFdvcmxkIG9mIFNwb3J0cycsICBpY29uOiAncGVwdGFzaWEtZXNwbi13aWRlLXdvcmxkLXNwb3J0cycgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0MTc7JywgdW5pY29kZTogJ2UwNDknLCBuYW1lOiAnUmVzb3J0cycsICBpY29uOiAncGVwdGFzaWEtcmVzb3J0cycgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0MTg7JywgdW5pY29kZTogJ2UwNGEnLCBuYW1lOiAnRGlzbmV5IEJlYWNoIFJlc29ydHMnLCAgaWNvbjogJ3BlcHRhc2lhLWRpc25leS1iZWFjaC1yZXNvcnRzJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQxOTsnLCB1bmljb2RlOiAnZTA0YicsIG5hbWU6ICdEaXNuZXkgQm9hcmR3YWxrJywgIGljb246ICdwZXB0YXNpYS1kaXNuZXktYm9hcmR3YWxrJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQyMDsnLCB1bmljb2RlOiAnZTA0YycsIG5hbWU6ICdBbGwgQ2F0ZWdvcmllcycsICBpY29uOiAncGVwdGFzaWEtYWxsLWNhdGVnb3JpZXMnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDIxOycsIHVuaWNvZGU6ICdlMDRkJywgbmFtZTogJ0NpcnF1ZSBEdSBTb2xlaWwgTGEgTm91YmEnLCAgaWNvbjogJ3BlcHRhc2lhLWNpcnF1ZS1kdS1zb2xlaWwtbGEtbm91YmEnIH0sXHJcbiAgICAgICAgICAgIHsgYXNjaWk6ICcmIzU3NDcyOycsIHVuaWNvZGU6ICdlMDgwJywgbmFtZTogJ0Rpc25leSBDcnVpc2UgTGluZScsICBpY29uOiAncGVwdGFzaWEtZGlzbmV5LWNydWlzZS1saW5lJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQ3MzsnLCB1bmljb2RlOiAnZTA4MScsIG5hbWU6ICdEQ0wgT3VyIFNoaXBzJywgIGljb246ICdwZXB0YXNpYS1kY2wtb3VyLXNoaXBzJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQ3NDsnLCB1bmljb2RlOiAnZTA4MicsIG5hbWU6ICdEQ0wgRGVzdGluYXRpb25zJywgIGljb246ICdwZXB0YXNpYS1kY2wtZGVzdGluYXRpb25zJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQ3NTsnLCB1bmljb2RlOiAnZTA4MycsIG5hbWU6ICdEQ0wgT25ib2FyZCBGdW4nLCAgaWNvbjogJ3BlcHRhc2lhLWRjbC1vbmJvYXJkLWZ1bicgfSxcclxuICAgICAgICAgICAgeyBhc2NpaTogJyYjNTc0NzY7JywgdW5pY29kZTogJ2UwODQnLCBuYW1lOiAnRENMIE5ldyBDcnVpc2VycycsIGljb246ICdwZXB0YXNpYS1kY2wtbmV3LWNydWlzZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGFzY2lpOiAnJiM1NzQ3NzsnLCB1bmljb2RlOiAnZTA4NScsIG5hbWU6ICdEQ0wgUG9ydCBBZHZlbnR1cmVzJywgIGljb246ICdwZXB0YXNpYS1kY2wtcG9ydC1hZHZlbnR1cmVzJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgKi9cclxuICAgIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
