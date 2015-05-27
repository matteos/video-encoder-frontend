(function() {
    'use strict';

    angular
            .module('app.flavor')
            .factory('FlavorForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'type',
                    type: 'select',
                    templateOptions: {
                        label: 'type',
                        disabled: disabled,
                        options: [
                            {
                                name: 'stream', value: 'stream'
                            },
                            {
                                name: 'file', value: 'file'
                            },
                        ]
                    }
                },
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
                },
                {
                    key: 'stream',
                    type: 'select',
                    templateOptions: {
                        label: 'stream',
                        disabled: disabled,
                        options: [],
                        placeHolder: 'select stream from list'
                    },
                    controller: /* @ngInject */ function($scope, Stream) {
                        $scope.to.loading = Stream.list({}, function(list, res) {
                            var options = [];
                            if (list.total > 0) {
                                list.results.forEach(function(stream) {
                                    var option = {
                                        name: stream.name,
                                        value: stream.id
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
                },
                {
                    key: 'preset',
                    type: 'select',
                    templateOptions: {
                        label: 'preset',
                        disabled: disabled,
                        options: [],
                        placeHolder: 'select preset from list'
                    },
                    controller: /* @ngInject */ function($scope, Preset) {
                        $scope.to.loading = Preset.list({}, function(list, res) {
                            var options = [];
                            if (list.total > 0) {
                                list.results.forEach(function(preset) {
                                    var option = {
                                        name: preset.name,
                                        value: preset.id
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
