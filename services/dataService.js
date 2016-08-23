ratDash.service('dataService', ['$http', '$timeout', function($http, $timeout) {
    console.log('dataService started');
    var connections = ['conn1', 'conn2', 'conn3'];

    // Keep polling the server
    (function getConnections() {
        $http({
            method: 'GET',
            url: 'http://92.111.66.145:13001/connections'
        }).then(function successCallback(res) {
            connections = res.data;
            console.log(res);
            $timeout(getConnections, 5000);
        }, function errorCallback(res) {
            console.log(res);
            $timeout(getConnections, 30000);
        });
    })();

    this.getData = function() { return connections; };

}]);

