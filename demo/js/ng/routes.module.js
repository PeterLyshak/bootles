(function() {
    'use strict';
    
    angular
        .module('mainApp')
        .config(config);
        
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

    function config($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.common['X-PJAX'] = true;
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $locationProvider.html5Mode(true);
    
        $routeProvider.
    
        /*
        |--------------------------------------------------------------------------
        | Home Module
        |--------------------------------------------------------------------------
        |
        |
        */
         
        when('/', {
            templateUrl: '/req/template/index',
            controller: 'indexController'
        }).
        when('/home', {
            templateUrl: '/req/template/index',
            controller: 'indexController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | Auth Module
         |--------------------------------------------------------------------------
         |
         |
         */
        
        when('/login', {
            templateUrl: 'req/template/auth-login',
            controller: 'authLoginController'
        }).
        when('/register/:sk?', {
            templateUrl: 'req/template/auth-register',
            controller: 'authRegisterController'
        }).
        when('/forgot-password', {
            templateUrl: 'req/template/auth-forgot-password',
            controller: 'authForgotPasswordController'
        }).
        when('/reset-password', {
            templateUrl: 'req/template/auth-reset-password',
            controller: 'authResetPasswordController'
        }).
        when('/logout', {
            templateUrl: 'req/template/auth-logout',
            controller: 'authLogoutController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | Search Module
         |--------------------------------------------------------------------------
         |
         |
         */
         
        when('/search', {
            templateUrl: '/req/template/search-general',
            controller: 'searchGeneralController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | Listing Module
         |--------------------------------------------------------------------------
         |
         |
         */
        
        when('/listing/:id/:sk?/:slug?', {
            templateUrl: '/req/template/listing-details',
            controller: 'listingDetailsController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | Profile Module
         |--------------------------------------------------------------------------
         |
         |
         */
         
        when('/profile/:id', {
            templateUrl: '/req/template/profile-overview',
            controller: 'profileOverviewController'
        }).
        when('/profile/:id/about', {
            templateUrl: '/req/template/profile-about',
            controller: 'profileAboutController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | Setings Module
         |--------------------------------------------------------------------------
         |
         |
         */
         
        when('/settings', {
            templateUrl: '/req/template/settings-general',
            controller: 'settingsGeneralController'
        }).
        when('/settings/profile', {
            templateUrl: '/req/template/settings-profile',
            controller: 'settingsProfileController'
        }).
        when('/settings/password', {
            templateUrl: '/req/template/settings-password',
            controller: 'settingsPasswordController'
        }).
        
        /*
         |--------------------------------------------------------------------------
         | About Module
         |--------------------------------------------------------------------------
         |
         |
         */
        
        when('/about', {
            templateUrl: '/req/template/about-company',
            controller: 'aboutCompanyController'
        }).
        when('/about/how-it-works', {
            templateUrl: '/req/template/about-how-it-works',
            controller: 'aboutHowItWorksController'
        }).
        when('/about/leadership', {
            templateUrl: '/req/template/about-leadership',
            controller: 'aboutLeadershipController'
        }).
        when('/about/team', {
            templateUrl: '/req/template/about-team',
            controller: 'aboutTeamController'
        }).
        when('/about/terms', {
            templateUrl: '/req/template/about-terms',
            controller: 'aboutTermsController'
        }).
        
        /*
        |--------------------------------------------------------------------------
        | Admin Module
        |--------------------------------------------------------------------------
        |
        |
        */
         
        when('/admin', {
            templateUrl: '/js/tpl/admin/dashboard/dashboard.html',
            controller: 'adminIndexController'
        }).
        
        // Admin Users Module
        //-------------------------------------------------------------------------
        
        when('/admin/users', {
            templateUrl: '/js/tpl/admin/users/manager.html',
            controller: 'adminUsersManagerController'
        }).
        when('/admin/user/creator', {
            templateUrl: '/js/tpl/admin/users/creator.html',
            controller: 'adminUserCreatorController'
        }).
        when('/admin/user/:id/permissions', {
            templateUrl: '/js/tpl/admin/users/permissions.html',
            controller: 'adminUserUpdatePermissionsController'
        }).
        
        // Admin Unit Owners Module
        //-------------------------------------------------------------------------
        
        when('/admin/unit-owners', {
            templateUrl: '/js/tpl/admin/unit-owners/manager.html',
            controller: 'adminUnitOwnersManagerController'
        }).
        when('/admin/unit-owner/creator', {
            templateUrl: '/js/tpl/admin/unit-owners/creator.html',
            controller: 'adminUnitOwnerCreatorController'
        }).
        when('/admin/unit-owner/creator/:id', {
            templateUrl: '/js/tpl/admin/unit-owners/creator.html',
            controller: 'adminUnitOwnerCreatorCtrlController'
        }).
        
        // Admin Listings Module
        //-------------------------------------------------------------------------
        
        when('/admin/listings', {
            templateUrl: '/js/tpl/admin/listings/manager.html',
            controller: 'adminListingsManagerController'
        }).
        when('/admin/listing/creator', {
            templateUrl: '/js/tpl/admin/listings/creator.html',
            controller: 'adminListingsCreatorController'
        }).
        when('/admin/listing/creator/:id', {
            templateUrl: '/js/tpl/admin/listings/creator.html',
            controller: 'adminListingsCreatorController'
        }).
        
        otherwise({
            redirectTo: '/'
        });
    }
        
})();
