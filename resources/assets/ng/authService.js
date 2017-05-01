(function() {
    'use strict';
    
    angular
        .module('myApp')
        .service('authService', authService);
    
    authService.$inject = ['$q', '$location', 'angularAuth0', 'lock', 'authManager'];
    
    function authService($q, $location, angularAuth0, lock, authManager) {
        
        var userProfile = JSON.parse(localStorage.getItem('profile')) || null;
        var deferredProfile = $q.defer();
        
        if (userProfile) {
            deferredProfile.resolve(userProfile);
        }
        
        function getProfileDeferred() {
            return deferredProfile.promise;
        }
    
        function lockLogin() {
            lock.show();
        }
        
        function login(username, password, callback) {
            angularAuth0.login({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                email: username,
                password: password,
            }, callback);
        }
        
        function register(username, password, callback) {
            angularAuth0.signup({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                email: username,
                password: password
            }, callback);
        }
        
        function facebookLogin(callback) {
            angularAuth0.login({
                connection: 'facebook',
                responseType: 'token'
            }, callback);
        }
        
        // Logging out just requires removing the user's
        // id_token and profile
        function logout() {
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            authManager.unauthenticate();
        }
        
        function authenticateAndGetProfile() {
            var result = angularAuth0.parseHash(window.location.hash);

            if (result && result.idToken) {
                localStorage.setItem('id_token', result.idToken);
                authManager.authenticate();
                angularAuth0.getProfile(result.idToken, function (error, profileData) {
                    if (error) {
                        console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profileData));
                    $location.path('/');
                });
            } else if (result && result.error) {
                alert('error: ' + result.error);
            }
        }
        
        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                
                lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        return console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profile));
                    deferredProfile.resolve(profile);
                });
                
                authManager.authenticate();
            });
        }
        
        return {
            login: login,
            logout: logout,
            register: register,
            facebookLogin: facebookLogin,
            lockLogin: lockLogin,
            authenticateAndGetProfile: authenticateAndGetProfile,
            registerAuthenticationListener: registerAuthenticationListener,
            getProfileDeferred: getProfileDeferred,
        }
    }
})();

