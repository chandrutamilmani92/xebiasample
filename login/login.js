angular.module('login', ['ui.bootstrap','ui.router','ngAnimate','ui.grid']);

angular.module('login').config(function($stateProvider) {

    $stateProvider.state('sos', {
        url: '/home',
        templateUrl: 'login/partial/sos/sos.html'
    });
    $stateProvider.state('myDashBoard', {
        url: '/myDashboard',
        templateUrl: 'login/partial/myDashBoard/myDashBoard.html'
    });
    /* Add New States Above */

});

