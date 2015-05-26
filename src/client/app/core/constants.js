/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
            .module('app.core')
            .constant('toastr', toastr)
            .constant('moment', moment)
//        .constant('API_BASE_URL', 'http://localhost:1337');
            .constant('API_BASE_URL', 'http://encoder02.tn.ymir.eu:1337');
})();