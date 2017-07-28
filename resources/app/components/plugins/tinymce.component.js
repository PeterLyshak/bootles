/**
|------------------------------------------------------------------------------------
| Plugin - Swiper Controller
|------------------------------------------------------------------------------------
|
*/

(function() {
    'use strict';
    
    angular
        .module('myApp')
        .controller('pluginTinymceController', pluginTinymceController);
        
    pluginTinymceController.$inject = [
        '$scope',
        '$location',
        '$stateParams',
        '$templateCache',
        '$http',
    ];
    
    function pluginTinymceController($scope, $location, $stateParams, $templateCache, $http) {
        $scope.$location = $location;
        $scope.$stateParams = $stateParams;
        $scope.pageName = "tinymce";
        $scope.pageModule = 'plugins';
        $scope.plugin = $stateParams.plugin;
        $scope.errors = {};
        $scope.messages = {};
        
        // make code pretty
        if (window.prettyPrint) {
            prettyPrint();
        }
        
        tinymce.init({
            selector: 'textarea',
            menubar: false,
            width: '100%',
            // height: 500,
            
            // plugins: [
                // 'advlist autolink lists link image charmap print preview anchor',
                // 'searchreplace visualblocks code fullscreen',
                // 'insertdatetime media table contextmenu paste code'
            // ],
            // toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
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
        */
    }
})();
