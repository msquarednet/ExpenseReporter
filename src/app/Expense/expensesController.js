(function(){
'use strict';

angular.module('app')
  .controller('ExpensesController', ['ExpensesDataService', function(ExpensesDataService) {
    var vm = this;
    
    vm.expenseItems = [];
    vm.activate = activate;
    
    activate();
    
    function activate() {
      vm.expenseItems = ExpensesDataService.getExpenses();
      // [
      //   {title:'Taxi', desc:'to airport', amount:89.95},
      //   {title:'Lunch', desc:'from airport', amount:15.40},
      //   {title:'Coffee', desc:'Starbucks', amount:3.50}
      // ];
    }
    
    
    
  }])

}());


