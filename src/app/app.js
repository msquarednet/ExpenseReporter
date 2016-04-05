(function(){
  'use strict';
  
  angular.module('app', ['ngRoute']);
  
  angular.module('app')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {templateUrl: 'app/Expense/expense.html'})
        .when('/admin', {templateUrl: 'app/Admin/admin.html'})
        .otherwise({redirectTo: '/'});
    }])
}());