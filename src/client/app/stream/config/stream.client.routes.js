(function() {
    'use strict';

    angular
        .module('app.stream')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listStream',
                config: {
                    url: '/stream',
                    templateUrl: 'app/stream/views/list.html',
                    controller: 'StreamController',
                    controllerAs: 'vm',
                    title: 'List Streams',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-eye"></i> Streams'
                    }
                }
            },
            {
                state: 'createStream',
                config: {
                    url: '/stream/create',
                    templateUrl: 'app/stream/views/create.html',
                    controller: 'StreamController',
                    controllerAs: 'vm',
                    title: 'Create Stream'
                }
            },
            {
                state: 'viewStream',
                config: {
                    url: '/stream/:streamId',
                    templateUrl: 'app/stream/views/view.html',
                    controller: 'StreamController',
                    controllerAs: 'vm',
                    title: 'View Stream'
                }
            },
            {
                state: 'editStream',
                config: {
                    url: '/stream/:streamId/edit',
                    templateUrl: 'app/stream/views/edit.html',
                    controller: 'StreamController',
                    controllerAs: 'vm',
                    title: 'Edit Stream'
                }
            }
        ];
    }
})();
