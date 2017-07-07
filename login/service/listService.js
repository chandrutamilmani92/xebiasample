angular.module('login').factory('listService',function($http) {

    var listService = {};
var getLoginData = function(username){
    return $http.get('https://swapi.co/api/people/?search='+username).then(function(success){
      return success;
    },function(error){
      return error;
    });
};
var getPlanetsData = function(username){
    return $http.get('https://swapi.co/api/planets').then(function(success){
      return success;
    },function(error){
      return error;
    });
};
    listService.getLoginData = getLoginData;
    listService.getPlanetsData = getPlanetsData;
    return listService;
});