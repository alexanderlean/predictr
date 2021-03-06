'use strict';
angular.module('myApp.frontPage', [])
    .controller('frontPageCtrl', function ($scope, $http, $q) {
    var tokenHeader = { headers: { 'X-Auth-Token': '822fca9c9da2416592e3e0a8ac86c239' } }, fixtures = $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures', tokenHeader), teams = $http.get('http://api.football-data.org/v1/soccerseasons/405/teams', tokenHeader);
    $q.all([fixtures, teams]).then(function (arrayOfResults) {
        $scope.contacts = arrayOfResults[0].data.fixtures.slice(-40).reverse();
    });
})
    .filter('checkStatus', function () {
    return function (input, status) {
        var out = [];
        angular.forEach(input, function (language) {
            if (language.status === status) {
                out.push(language);
            }
        });
        return out;
    };
});
//# sourceMappingURL=frontpage.js.map