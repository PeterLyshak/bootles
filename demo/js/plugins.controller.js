/**
|------------------------------------------------------------------------------------
| Components Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict'
    
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
