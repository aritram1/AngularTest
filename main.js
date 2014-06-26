var myApp = angular.module('my-app', []);
myApp.controller('my-controller', ['$scope', function ($scope){
    $scope.Contacts = [
                       {"sn":"1", "firstname":"Tyrion", "lastname":"Lannister"},
                       {"sn":"2", "firstname":"Cersei", "lastname":"Lannister"},
                       {"sn":"3", "firstname":"Arya",   "lastname":"Stark"},
                       {"sn":"4", "firstname":"Joefrey","lastname":"Lannister"},
                       {"sn":"5", "firstname":"Tywin",  "lastname":"Lannister"},
                       {"sn":"6", "firstname":"Robert", "lastname":"Baratheon"}
                    ];
    $scope.addblock = true;
    $scope.showblock = true;
    $scope.addthem = function(){//sn, fn, ln){
        console.log('1');
        //var temp = '{"sn":sn, "firstname":fn ,"lastname":ln}';
        //$scope.Contacts.push(temp);
    }
}]);
