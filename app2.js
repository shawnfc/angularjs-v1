var app = angular.module('myApp', ['ngRoute'])
    .controller('myController', function ($scope, $location, $http, $timeout, $interval, hexafy) {
        $http.get('https://www.w3schools.com/angular/customers.php').then(function (response) {
            $scope.myData = response.data.records;
        }, function (response) {
            $scope.myData = "Oh, oh... something went wrong!"
        });

        // The $event Object
        $scope.mySpecialEFunc = function (myE) {
            $scope.x = myE.clientX;
            $scope.y = myE.clientY;
        };


        $scope.count = 0;
        $scope.myHeader = "This header will change in 2 seconds.";
        $timeout(function () {
            $scope.myHeader = "Told you so!";
        }, 2000);
        $scope.myUrl = $location.absUrl();
        $scope.firstName = 'Shawn';
        $scope.lastName = 'Conrad';
        $scope.changeName = function () {
            $scope.firstName = 'Freddy';
        };
        $scope.classMates = ['Dave Hyman', 'Shawn Conrad', 'Steve James'];

        $scope.theTime = new Date().toLocaleString();


        // using my custom service hexafy
        $scope.hex = hexafy.myFunc(255);


        $interval(function () {
            $scope.theTime = new Date().toLocaleString();
        }, 1000);

    })
    .directive('w3TestDirective', function () {
        return {
            restrict: "E",
            template: "<h1>I was made in a directive constructor!</h1>"
        }
    })

    // custom service
    .service('hexafy', function () {
        this.myFunc = function (x) {
            return x.toString(16);
        }
    })
    .filter('myFormat', ['hexafy', function (hexafy) {
        return function (x) {
            return hexafy.myFunc(x);
        }
    }]);



