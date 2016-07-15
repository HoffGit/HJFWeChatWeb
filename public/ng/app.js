
// Declare app level module which depends on filters, and services
var app = angular.module('app', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', '$locationProvider', '$resourceProvider',
	function ($routeProvider, $locationProvider, $resourceProvider) {
		$routeProvider.when('/', { templateUrl: ('partial/home'), permission: 'none' });
		$routeProvider.when('/company', { templateUrl: ('partial/company'), permission: 'none' });
		$routeProvider.when('/404', { templateUrl: ('partial/404'), permission: 'none' });
		$routeProvider.otherwise({ redirectTo: '/404' });
		
		$locationProvider.html5Mode(true);
		$resourceProvider.defaults.stripTrailingSlashes = false;// Don't strip trailing slashes from calculated URLs
	}
]);

app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
		$rootScope;
	}]);