(function() {
    'use strict';

    angular
            .module('app.preset')
            .factory('Preset', Preset);

    Preset.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Preset($resource, API_BASE_URL) {

        var params = {
            presetId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            list: {
                method: 'GET',
                url: API_BASE_URL + '/preset?limit=50'
            }
        };

        var API_URL = API_BASE_URL + '/preset/:presetId';

        return $resource(API_URL, params, actions);

    }

})();
