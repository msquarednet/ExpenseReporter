(function(){
'use strict';

angular.module('app')
  .factory('ExpensesDataService', ['$http', function($http){
    var service = {
      getExpenses: getExpenses,
      persistExpenses: persistExpenses
    };
    return service;
    
    function getExpenses(){
      return [
        new ExpenseItem('Taxi','to airport',89.95),
        new ExpenseItem('Lunch','at airport',89.95),
        new ExpenseItem('Coffee','Starbucks',89.95)
      ];
      /*      return [        
        {title:'Taxi', desc:'to airport', amount:89.95},
        {title:'Lunch', desc:'from airport', amount:15.40},
        {title:'Coffee', desc:'Starbucks', amount:3.50}
      ]; */
    }
    function reportExpenses(){
      //do some work;
    }
    function persistExpenses(reportExpenses) {  //cb ~ reportExpenses callback
      //do some work
      var success = true;
      if (success) {reportExpenses()};
    }
  }])  
  
}());