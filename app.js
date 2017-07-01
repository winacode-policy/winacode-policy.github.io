angular.module('WinacodeApp', [
    'WinacodeApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when("/reset-password", {
        templateUrl: "reset-password/password.html",
        controller: "PasswordController"
    }).
    otherwise({
        redirectTo: '/'
    })
}]);