app.controller('mainController', ['$scope', 'serverService', mainController]);
app.controller('serverController', ['$scope', '$routeParams', 'serverService', serverController]);



function mainController($scope, serverService){

  var vm = this;

  serverService.getServer().then(function(data){
    // console.log(data.data.data);
    vm.servers = data.data.data;
  });

 }


function serverController($scope, serverService, $routeParams){
   var vm = this;
   var param1 = $routeParams.id;

    serverService.showServer(param1).then(function(data){
    console.log(data);
    vm.server = data.data;
    });
  

} 
