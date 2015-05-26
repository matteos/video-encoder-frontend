(function() {
    'use strict';

    angular
            .module('app.entry')
            .factory('EntryForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'title',
                    type: 'input',
                    templateOptions: {
                        label: 'Title:',
                        disabled: disabled,
                        required: false
                    }
                },
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
                    key: 'concurrent',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'concurrent',
                        disabled: disabled
                    }
                },
                {
                    key: 'relay',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'relay',
                        disabled: disabled
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
