angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('/employees/:employeeId/:data');
    });