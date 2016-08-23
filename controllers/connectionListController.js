ratDash.controller('connectionListController', ['$scope', 'dataService', function connectionListController($scope, dataService) {
    $scope.dataService = dataService;
    $scope.connections = dataService.connections;

    $scope.$watch('dataService.getData()', function(newData, oldData) {
        $scope.connections = newData;
        console.log($scope.connections);
    });
}]);
