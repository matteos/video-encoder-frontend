(function () {
    'use strict';

    angular
        .module('app.preset')
        .controller('PresetController', PresetController);

    PresetController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Preset',
        'TableSettings',
        'PresetForm'];
    /* @ngInject */
    function PresetController(logger,
        $stateParams,
        $location,
        Preset,
        TableSettings,
        PresetForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Preset);
        vm.preset = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = PresetForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Preset object
            var preset = new Preset(vm.preset);

            // Redirect after save
            preset.$save(function(response) {
                logger.success('Preset created');
                $location.path('preset');
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Preset
        vm.remove = function(preset) {

            if (preset) {
                preset = Preset.get({presetId:preset.id}, function() {
                    preset.$remove(function() {
                        logger.success('Preset deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.preset.$remove(function() {
                    logger.success('Preset deleted');
                    $location.path('/preset');
                });
            }

        };

        // Update existing Preset
        vm.update = function() {
            var preset = vm.preset;

            preset.$update(function() {
                logger.success('Preset updated');
                $location.path('preset/' + preset.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewPreset = function() {
            vm.preset = Preset.get({presetId: $stateParams.presetId});
            vm.setFormFields(true);
        };

        vm.toEditPreset = function() {
            vm.preset = Preset.get({presetId: $stateParams.presetId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Preset View');
        }
    }

})();
