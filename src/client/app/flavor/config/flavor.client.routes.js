(function() {
    'use strict';

    angular
        .module('app.flavor')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listFlavor',
                config: {
                    url: '/flavor',
                    templateUrl: 'app/flavor/views/list.html',
                    controller: 'FlavorController',
                    controllerAs: 'vm',
                    title: 'List Flavors',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-random"></i> Flavors'
                    }
                }
            },
            {
                state: 'createFlavor',
                config: {
                    url: '/flavor/create',
                    templateUrl: 'app/flavor/views/create.html',
                    controller: 'FlavorController',
                    controllerAs: 'vm',
                    title: 'Create Flavor'
                }
            },
            {
                state: 'viewFlavor',
                config: {
                    url: '/flavor/:flavorId',
                    templateUrl: 'app/flavor/views/view.html',
                    controller: 'FlavorController',
                    controllerAs: 'vm',
                    title: 'View Flavor'
                }
            },
            {
                state: 'editFlavor',
                config: {
                    url: '/flavor/:flavorId/edit',
                    templateUrl: 'app/flavor/views/edit.html',
                    controller: 'FlavorController',
                    controllerAs: 'vm',
                    title: 'Edit Flavor'
                }
            }
        ];
    }
})();
