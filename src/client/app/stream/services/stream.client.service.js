(function() {
    'use strict';

    angular
            .module('app.stream')
            .factory('Stream', Stream);

    Stream.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Stream($resource, API_BASE_URL) {

        var params = {
            streamId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            list: {
                method: 'GET',
                url: API_BASE_URL + '/stream'
            }
        };

        var API_URL = API_BASE_URL + '/stream/:streamId';

        return $resource(API_URL, params, actions);

    }

})();
