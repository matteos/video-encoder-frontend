(function() {
    'use strict';

    angular
            .module('app.stream')
            .controller('StreamController', StreamController);

    StreamController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Stream',
        'TableSettings',
        'StreamForm'];
    /* @ngInject */
    function StreamController(logger,
            $stateParams,
            $location,
            Stream,
            TableSettings,
            StreamForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Stream);
        vm.stream = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = StreamForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Stream object
            var stream = new Stream(vm.stream);

            // Redirect after save
            stream.$save(function(response) {
                logger.success('Stream created');
                $location.path('stream');
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Stream
        vm.remove = function(stream) {

            if (stream) {
                stream = Stream.get({streamId: stream.id}, function() {
                    stream.$remove(function() {
                        logger.success('Stream deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.stream.$remove(function() {
                    logger.success('Stream deleted');
                    $location.path('/stream');
                });
            }

        };

        // Update existing Stream
        vm.update = function() {
            var stream = vm.stream;

            stream.$update(function() {
                logger.success('Stream updated');
                $location.path('stream/' + stream.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewStream = function() {
            vm.stream = Stream.get({streamId: $stateParams.streamId});
            vm.setFormFields(true);
        };

        vm.toEditStream = function() {
            vm.stream = Stream.get({streamId: $stateParams.streamId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Stream View');
        }
    }

})();
