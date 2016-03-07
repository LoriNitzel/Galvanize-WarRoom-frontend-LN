app.controller('mainController', ['$scope', 'serverService', mainController]);

function mainController($scope, serverService){

  var vm = this;

  serverService.getServer().then(function(data){
    console.log(data.data.data);
    vm.servers = data.data.data;
  });

}