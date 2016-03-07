angular.module('warApp')
  .service('serverService', ['$http', function($http){

  this.getServer = function(){
    var config = {
      method: 'GET', 
      url: 'http://localhost:3000'
    };

    return $http(config);
  }
  this.showServer = function(id){
    var config = {
      method: 'GET',
      url: 'http://localhost:3000/' + id
      };

    return $http(config);
  }

}]);