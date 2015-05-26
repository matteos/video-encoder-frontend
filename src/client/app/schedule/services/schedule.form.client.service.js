(function() {
    'use strict';

    angular
            .module('app.schedule')
            .factory('ScheduleForm', factory);

    function factory() {

        var getFormFields = function(schedule, disabled) {
            var fields = [
                {
                    key: 'entry',
                    type: 'select',
                    templateOptions: {
                        label: 'entry',
                        disabled: disabled,
                        options: [],
                        placeHolder: 'select entry from list'
                    },
                    controller: /* @ngInject */ function($scope, Entry) {
                        $scope.to.loading = Entry.list({}, function(list, res) {
                            var options = [];
                            if (list.total > 0) {
                                list.results.forEach(function(entry) {
                                    var option = {
                                        name: entry.title,
                                        value: entry.id
                                    };
                                    options.push(option);
                                });
                            }
                            $scope.to.options = options;
                            // note, the line above is shorthand for:
                            // $scope.options.templateOptions.options = data;
                            return list;
                        });
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
