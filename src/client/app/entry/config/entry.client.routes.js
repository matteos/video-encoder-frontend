(function() {
    'use strict';

    angular
        .module('app.entry')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listEntry',
                config: {
                    url: '/entry',
                    templateUrl: 'app/entry/views/list.html',
                    controller: 'EntryController',
                    controllerAs: 'vm',
                    title: 'List Entries',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-film"></i> Entries'
                    }
                }
            },
            {
                state: 'createEntry',
                config: {
                    url: '/entry/create',
                    templateUrl: 'app/entry/views/create.html',
                    controller: 'EntryController',
                    controllerAs: 'vm',
                    title: 'Create Entry'
                }
            },
            {
                state: 'viewEntry',
                config: {
                    url: '/entry/:entryId',
                    templateUrl: 'app/entry/views/view.html',
                    controller: 'EntryController',
                    controllerAs: 'vm',
                    title: 'View Entry'
                }
            },
            {
                state: 'editEntry',
                config: {
                    url: '/entry/:entryId/edit',
                    templateUrl: 'app/entry/views/edit.html',
                    controller: 'EntryController',
                    controllerAs: 'vm',
                    title: 'Edit Entry'
                }
            }
        ];
    }
})();
