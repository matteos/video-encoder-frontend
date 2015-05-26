(function() {
    'use strict';

    angular
            .module('app.stream')
            .factory('StreamForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'url',
                    type: 'input',
                    templateOptions: {
                        label: 'Url:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'keepAlive',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'keepAlive',
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
