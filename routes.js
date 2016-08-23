ratDash.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/list-connections.html',
            controller: 'connectionListController'
        })
        .when('/map-overview', {
            templateUrl: 'templates/map-overview.html',
            controller: 'mapOverviewController'
        })
        .otherwise('/');
}]);



