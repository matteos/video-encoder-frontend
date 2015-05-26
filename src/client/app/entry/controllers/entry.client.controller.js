(function() {
    'use strict';

    angular
            .module('app.entry')
            .controller('EntryController', EntryController);

    EntryController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Entry',
        'TableSettings',
        'EntryForm'];
    /* @ngInject */
    function EntryController(logger,
            $stateParams,
            $location,
            Entry,
            TableSettings,
            EntryForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Entry);

        vm.entry = {
            stream: {},
            flavors: []
        };

        vm.setFormFields = function(disabled) {
            vm.formFields = EntryForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Entry object
            var entry = new Entry(vm.entry);
            //cleanup associations
            delete entry.partner;
            delete entry.flavors;

            // Redirect after save
            entry.$save(function(response) {
                logger.success('Entry created');
                $location.path('entry/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Entry
        vm.remove = function(entry) {

            if (entry) {
                entry = Entry.get({entryId: entry.id}, function() {
                    entry.$remove(function() {
                        logger.success('Entry deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.entry.$remove(function() {
                    logger.success('Entry deleted');
                    $location.path('/entry');
                });
            }

        };

        // Update existing Entry
        vm.update = function() {
            var entry = vm.entry;

            //cleanup associations
            delete entry.partner;
            delete entry.flavors;

            entry.$update(function() {
                logger.success('Entry updated');
                $location.path('entry/' + entry.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };


        vm.process = function(entry) {
            if (entry) {
                entry = Entry.process({id: entry.id}, function() {
                    logger.success('Entry started');
                    //refresh
                    vm.tableParams.reload();

                });
            }
        };
        vm.stop = function(entry) {
            if (entry) {
                entry = Entry.stop({id: entry.id}, function() {
                    logger.success('Entry stopped');
                    //refresh
                    vm.tableParams.reload();

                });
            }
        };

        vm.toViewEntry = function() {
            vm.entry = Entry.detail({id: $stateParams.entryId}, function(entry, res) {
                if (entry.hasOwnProperty('stream')) {
                    var s = entry.stream;
                    vm.entry.stream = s.id;
                }
                vm.setFormFields(true);
            });

        };

        vm.toEditEntry = function() {
            vm.entry = Entry.get({entryId: $stateParams.entryId}, function(entry, res) {
                if (entry.hasOwnProperty('stream')) {
                    var s = entry.stream;
                    vm.entry.stream = s.id;
                }



                vm.setFormFields(false);

            });
        };

        activate();

        function activate() {
            //logger.info('Activated Entry View');
        }
    }

})();
