(function() {
    'use strict';

    angular
        .module('app.schedule')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listSchedule',
                config: {
                    url: '/schedule',
                    templateUrl: 'app/schedule/views/list.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'List Schedules',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-calendar"></i> Schedules'
                    }
                }
            },
            {
                state: 'createSchedule',
                config: {
                    url: '/schedule/create',
                    templateUrl: 'app/schedule/views/create.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'Create Schedule'
                }
            },
            {
                state: 'viewSchedule',
                config: {
                    url: '/schedule/:scheduleId',
                    templateUrl: 'app/schedule/views/view.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'View Schedule'
                }
            },
            {
                state: 'editSchedule',
                config: {
                    url: '/schedule/:scheduleId/edit',
                    templateUrl: 'app/schedule/views/edit.html',
                    controller: 'ScheduleController',
                    controllerAs: 'vm',
                    title: 'Edit Schedule'
                }
            }
        ];
    }
})();
