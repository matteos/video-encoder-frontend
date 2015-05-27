(function() {
    'use strict';

    angular
            .module('app.preset')
            .factory('PresetForm', factory);

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
                    key: 'type',
                    type: 'select',
                    templateOptions: {
                        label: 'type',
                        disabled: disabled,
                        options: [
                            {
                                name: 'web', value: 'web'
                            },
                            {
                                name: 'mobile', value: 'mobile'
                            },
                            {
                                name: 'desktop', value: 'desktop'
                            },
                            {
                                name: 'copy', value: 'copy'
                            }
                        ]
                    }
                },
                {
                    key: 'format',
                    type: 'input',
                    templateOptions: {
                        label: 'format',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoCodec',
                    type: 'input',
                    templateOptions: {
                        label: 'videoCodec',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoBitrate',
                    type: 'input',
                    templateOptions: {
                        label: 'videoBitrate',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoHeight',
                    type: 'input',
                    templateOptions: {
                        label: 'videoHeight',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoWidth',
                    type: 'input',
                    templateOptions: {
                        label: 'videoWidth',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoOptions',
                    type: 'input',
                    templateOptions: {
                        label: 'videoOptions',
                        disabled: disabled
                    }
                },
                {
                    key: 'videoFilters',
                    type: 'input',
                    templateOptions: {
                        label: 'videoFilters',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioCodec',
                    type: 'input',
                    templateOptions: {
                        label: 'audioCodec',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioBitrate',
                    type: 'input',
                    templateOptions: {
                        label: 'audioBitrate',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioChannels',
                    type: 'input',
                    templateOptions: {
                        label: 'audioChannels',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioFrequency',
                    type: 'input',
                    templateOptions: {
                        label: 'audioFrequency',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioOptions',
                    type: 'input',
                    templateOptions: {
                        label: 'audioOptions',
                        disabled: disabled
                    }
                },
                {
                    key: 'audioFilters',
                    type: 'input',
                    templateOptions: {
                        label: 'audioFilters',
                        disabled: disabled
                    }
                },
                {
                    key: 'ffmpegOptions',
                    type: 'textarea',
                    templateOptions: {
                        label: 'ffmpegOptions',
                        disabled: disabled
                    }
                },
                {
                    key: 'inputOptions',
                    type: 'input',
                    templateOptions: {
                        label: 'inputOptions',
                        disabled: disabled
                    }
                },
                {
                    key: 'nativeFramerate',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'nativeFramerate',
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
