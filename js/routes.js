angular.module('warApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/servers.html'
      
      })

       .when('/:id', {
        templateUrl: 'views/serverdetails.html',
        controller: 'serverController as SC'
      })

       .when('/settings', {
        templateUrl: 'views/settings.html',

      })

      .otherwise({
        redirectTo: '/'
    });
});
