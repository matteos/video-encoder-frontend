(function() {
    'use strict';

    angular
            .module('app.entry')
            .factory('Entry', Entry);

    Entry.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Entry($resource, API_BASE_URL) {

        var params = {
            entryId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            list: {
                method: 'GET',
                url: API_BASE_URL + '/entry'
            },
            detail: {
                method: 'GET',
                url: API_BASE_URL + '/entry/:entryId' + "/detail"
            },
            process: {
                method: 'GET',
                url: API_BASE_URL + '/entry/:entryId' + "/process"
            },
            stop: {
                method: 'GET',
                url: API_BASE_URL + '/entry/:entryId' + "/stop"
            }
        };

        var API_URL = API_BASE_URL + '/entry/:entryId';

        return $resource(API_URL, params, actions);

    }

})();
