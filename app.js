angular.module('embibeSample', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'login','ui.grid']);

angular.module('embibeSample').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
  
});

angular.module('embibeSample').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
angular.module('embibeSample').controller('mainApp',function($scope,$state) {
    
    if(sessionStorage.getItem('loginDetails')){
        $scope.showlogout = true;
    }else{
        $state.go('home');
    }
    $scope.logout = function(){
      sessionStorage.setItem('loginDetails','');
        $state.go('home');
    };
});