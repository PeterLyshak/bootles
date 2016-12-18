(function() {
    'use strict';
    
    angular
        .module('myApp')
        .run(run);
    
    run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];
    
    function run($rootScope, authService, lock, authManager) {
        
        // Put the authService on $rootScope so its methods
        // can be accessed from the nav bar
        $rootScope.authService = authService;
        
        // Register the authentication listener that is
        // set up in authService.service.js
        authService.registerAuthenticationListener();
        
        // Process the auth token if it exists and fetch the profile
        authService.authenticateAndGetProfile();
        
        // Use the authManager from angular-jwt to check for
        // the user's authentication state when the page is
        // refreshed and maintain authentication
        authManager.checkAuthOnRefresh();
        
        // Register the synchronous hash parser
        // when using UI Router
        lock.interceptHash();
    
    }
})();

