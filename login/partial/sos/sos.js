angular.module('login').controller('SosCtrl', function ($scope, $timeout, $state,listService) {

    $scope.jedai = {};
    var userData = false;
    $scope.onClickNext = function (loginDetails) {
        $scope.messageForUsername = false;
        if(loginDetails.username && !userData){
            listService.getLoginData(loginDetails.username).then(function(response){
                if(response.data.count === 1) {
                    $scope.username = true;
                    userData = response.data;
                } else {
                    $scope.messageForUsername = 'No user in this name';
                }
            },function(error) {
                console.log(error);
            });
       } else {
          if (loginDetails.password === userData.results[0].birth_year){
            $state.go('myDashBoard')
          } else {
            $scope.messageForUsername = 'The password is wrong please reenter';
          }
       }
    };
    $scope.onClickPrevious = function () {
	  $scope.username = false;	
    };
});