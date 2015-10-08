var app = angular.module('ghostBoat', ['ngRoute']);

app.config(['$routeProvider', function( $routeProvider ){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'DefaultController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);