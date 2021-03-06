(function() {
    'use strict';

    angular
            .module('app.flavor')
            .factory('Flavor', Flavor);

    Flavor.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Flavor($resource, API_BASE_URL) {

        var params = {
            flavorId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            list: {
                method: 'GET',
                url: API_BASE_URL + '/flavor?limit=50'
            }
        };

        var API_URL = API_BASE_URL + '/flavor/:flavorId';

        return $resource(API_URL, params, actions);

    }

})();
