angular.module('login').controller('MydashboardCtrl',function($scope,listService){
 
    listService.getPlanetsData().then(function(success){
        $scope.planets = success.data.results;
        console.log($scope.planets);
    });
    $scope.populateData = function (data) {
        $scope.$broadcast('chartDataPopulation',data);
    }
});