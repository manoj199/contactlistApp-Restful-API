var myApp = angular.module('myApp',[]);

function AppCtrl($scope) {
        console.log("Hello world from controller");

        //Dummy data for test
        person1 = {
            name: 'Manoj',
            email: 'manojingalagi199@gmail.com',
            number: '8867813367'
        };

        person2 = {
            name: 'Manju',
            email: 'manjuingalagi052@gmail.com',
            number: '9035782155'
        };

        person3 = {
            name: 'Suraj',
            email: 'Suraj@gmail.com',
            number: '8451126451'
        };

        var contactlist = [person1,person2,person3];
        $scope.contactlist = contactlist;
}
