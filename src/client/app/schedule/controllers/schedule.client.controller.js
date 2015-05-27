(function() {
    'use strict';

    angular
            .module('app.schedule')
            .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Schedule',
        'TableSettings',
        'ScheduleForm'];
    /* @ngInject */
    function ScheduleController(logger,
            $stateParams,
            $location,
            Schedule,
            TableSettings,
            ScheduleForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Schedule);
        vm.schedule = {
            entry: 0,
            dateStart: new Date(),
            dateEnd: new Date()
        };

        vm.setFormFields = function(disabled) {
            vm.formFields = ScheduleForm.getFormFields(vm.schedule, disabled);
        };

        vm.create = function() {
            // Create new Schedule object
            var schedule = new Schedule(vm.schedule);

            // Redirect after save
            schedule.$save(function(response) {
                logger.success('Schedule created');
                $location.path('schedule');
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Schedule
        vm.remove = function(schedule) {

            if (schedule) {
                schedule = Schedule.get({scheduleId: schedule.id}, function() {
                    schedule.$remove(function() {
                        logger.success('Schedule deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.schedule.$remove(function() {
                    logger.success('Schedule deleted');
                    $location.path('/schedule');
                });
            }

        };

        // Update existing Schedule
        vm.update = function() {
            var schedule = vm.schedule;
            console.dir(schedule);
            schedule.$update(function() {
                logger.success('Schedule updated');
                $location.path('schedule/' + schedule.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.schedul = function(schedule) {
            if (schedule) {
                schedule = Schedule.schedule({id: schedule.id}, function() {
                    logger.success('Schedule started');
                    //refresh
                    vm.tableParams.reload();

                });
            }
        };
        vm.clear = function(schedule) {
            if (schedule) {
                schedule = Schedule.clear({id: schedule.id}, function() {
                    logger.success('Schedule stopped');
                    //refresh
                    vm.tableParams.reload();

                });
            }
        };

        vm.toViewSchedule = function() {
            vm.schedule = Schedule.get({scheduleId: $stateParams.scheduleId}, function(schedule, res) {
                if (schedule.hasOwnProperty('entry')) {
                    var e = schedule.entry;
                    vm.schedule.entry = e.id;
                }
                vm.setFormFields(true);
            });
        };
        vm.toEditSchedule = function() {
            vm.schedule = Schedule.get({scheduleId: $stateParams.scheduleId}, function(schedule, res) {
                if (schedule.hasOwnProperty('entry')) {
                    var e = schedule.entry;
                    vm.schedule.entry = e.id;
                }
                var ds = schedule.dateStart;
                vm.schedule.dateStart = new Date(ds);
                var de = schedule.dateEnd;
                vm.schedule.dateEnd = new Date(de);
                console.dir(vm.schedule);
                vm.setFormFields(false);
            });

        };
        vm.toCreateSchedule = function() {
            console.log("toCreateSchedule");
            vm.setFormFields(vm.schedule, false);
        };
        activate();

        function activate() {
            //logger.info('Activated Schedule View');
            console.log("activate schedule controller");
            console.dir(vm.schedule);
        }
    }

})();
