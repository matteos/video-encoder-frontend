(function() {
    'use strict';

    angular
            .module('app.flavor')
            .controller('FlavorController', FlavorController);

    FlavorController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Flavor',
        'TableSettings',
        'FlavorForm'];
    /* @ngInject */
    function FlavorController(logger,
            $stateParams,
            $location,
            Flavor,
            TableSettings,
            FlavorForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Flavor);

        vm.flavor = {
            entry: {},
            preset: {},
            stream: {}
        };

        vm.setFormFields = function(disabled) {
            vm.formFields = FlavorForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Flavor object
            var flavor = new Flavor(vm.flavor);

            // Redirect after save
            flavor.$save(function(response) {
                logger.success('Flavor created');
                $location.path('flavor');
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Flavor
        vm.remove = function(flavor) {

            if (flavor) {
                flavor = Flavor.get({flavorId: flavor.id}, function() {
                    flavor.$remove(function() {
                        logger.success('Flavor deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.flavor.$remove(function() {
                    logger.success('Flavor deleted');
                    $location.path('/flavor');
                });
            }

        };

        // Update existing Flavor
        vm.update = function() {
            var flavor = vm.flavor;

            flavor.$update(function() {
                logger.success('Flavor updated');
                $location.path('flavor/' + flavor.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewFlavor = function() {
            vm.flavor = Flavor.get({flavorId: $stateParams.flavorId}, function(flavor, res) {
                //override associations with id
                if (flavor.hasOwnProperty('entry')) {
                    vm.flavor.entry = flavor.entry.id;
                }
                if (flavor.hasOwnProperty('preset')) {
                    vm.flavor.preset = flavor.preset.id;
                }
                if (flavor.hasOwnProperty('stream')) {
                    vm.flavor.stream = flavor.stream.id;
                }
                vm.setFormFields(true);
            });
        };

        vm.toEditFlavor = function() {
            vm.flavor = Flavor.get({flavorId: $stateParams.flavorId}, function(flavor, res) {
                //override associations with id
                if (flavor.hasOwnProperty('entry')) {
                    vm.flavor.entry = flavor.entry.id;
                }
                if (flavor.hasOwnProperty('preset')) {
                    vm.flavor.preset = flavor.preset.id;
                }
                if (flavor.hasOwnProperty('stream')) {
                    vm.flavor.stream = flavor.stream.id;
                }
                vm.setFormFields(false);
            });
        };

        activate();

        function activate() {
            //logger.info('Activated Flavor View');
        }
    }

})();
