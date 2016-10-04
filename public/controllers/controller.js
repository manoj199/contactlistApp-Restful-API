var myApp = angular.module('myApp',[]);

function AppCtrl($scope, $http) {
        console.log("Hello world from controller");

        $http.get('/contactlist').success(function(response){
          console.log("I got the data i requested");
          $scope.contactlist = response;
        });
        //Dummy data for test


}
