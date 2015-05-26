(function() {
    'use strict';

    angular
            .module('app.schedule')
            .factory('Schedule', Schedule);

    Schedule.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Schedule($resource, API_BASE_URL) {

        var params = {
            scheduleId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            list: {
                method: 'GET',
                url: API_BASE_URL + '/schedule'
            },
            schedule: {
                method: 'GET',
                url: API_BASE_URL + '/schedule/:scheduleId' + "/schedule"
            },
            clear: {
                method: 'GET',
                url: API_BASE_URL + '/schedule/:scheduleId' + "/clear"
            }
        };

        var API_URL = API_BASE_URL + '/schedule/:scheduleId';

        return $resource(API_URL, params, actions);

    }

})();
