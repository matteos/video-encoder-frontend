(function() {
    'use strict';

    angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'video-encoder-frontend',
            description: 'generator-angular-crud allows creating entities ' +
                    'and CRUD operations very productively for AngularJS applications'
        };
        vm.entriesCount = 0;
        vm.flavorsCount = 0;
        vm.schedulesCount = 0;

        vm.systemInfo = {};
        vm.systemNetwork = {};
        vm.systemLoad = {};


        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
        }

        function getSystemInfo() {
            return dataservice.getPeople().then(function(data) {
                vm.people = data;
                return vm.people;
            });
        }


//        function getMessageCount() {
//            return dataservice.getMessageCount().then(function (data) {
//                vm.messageCount = data;
//                return vm.messageCount;
//            });
//        }
//
//        function getPeople() {
//            return dataservice.getPeople().then(function (data) {
//                vm.people = data;
//                return vm.people;
//            });
//        }
    }
})();
