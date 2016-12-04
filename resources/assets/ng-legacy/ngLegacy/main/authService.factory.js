(function() {
    'use strict';
    
    angular
        .module('mainApp')
        .factory('authService', authService);
    
    authService.$inject = ['$http'];
    
    function authService($http) {
        var service = {
            async: function() {
                var self = this;
                var promise = $http.get('/req/auth/auth-details').then(function(response) {
                    
                    if (!angular.equals({}, response.data.returning)) {
                        if ((typeof response.data.returning !== 'undefined') &&
                            (typeof response.data.returning.token !== 'undefined')
                        ) {
                            if (!angular.equals({}, response.data.returning.token)) {
                                self.user = jwt_decode(response.data.returning.token);
                            }
                        }
                    } else {
                        self.user = null;
                    }

                    return response.data;
                });
                
                return promise;
            },
            
            update: function(token) {
                if (!angular.equals({}, token)) {
                    self.user = jwt_decode(token);
                } else {
                    self.user = null;
                }
            },
            
            guest: function() {
                return !this.user;
            },
            
            check: function() {
                return !!this.user;
            },
            
            user: null,
        };
        
        return service;
    }
        
})();
