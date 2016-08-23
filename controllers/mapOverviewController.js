ratDash.controller('mapOverviewController', ['$scope', 'dataService', function mapOverviewController($scope, dataService) {
    $scope.dataService = dataService;

    $scope.$watch('dataService.getData()', function(newData, oldData) {
        // TODO For each connection we want to create a marker to display
        // clientId, name, device, lastUpdate
    });

    $scope.map = new google.maps.Map(document.getElementById('overview-map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}]);
