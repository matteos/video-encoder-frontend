(function() {
    'use strict';

    angular
        .module('app.preset')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listPreset',
                config: {
                    url: '/preset',
                    templateUrl: 'app/preset/views/list.html',
                    controller: 'PresetController',
                    controllerAs: 'vm',
                    title: 'List Presets',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-cog"></i> Presets'
                    }
                }
            },
            {
                state: 'createPreset',
                config: {
                    url: '/preset/create',
                    templateUrl: 'app/preset/views/create.html',
                    controller: 'PresetController',
                    controllerAs: 'vm',
                    title: 'Create Preset'
                }
            },
            {
                state: 'viewPreset',
                config: {
                    url: '/preset/:presetId',
                    templateUrl: 'app/preset/views/view.html',
                    controller: 'PresetController',
                    controllerAs: 'vm',
                    title: 'View Preset'
                }
            },
            {
                state: 'editPreset',
                config: {
                    url: '/preset/:presetId/edit',
                    templateUrl: 'app/preset/views/edit.html',
                    controller: 'PresetController',
                    controllerAs: 'vm',
                    title: 'Edit Preset'
                }
            }
        ];
    }
})();
