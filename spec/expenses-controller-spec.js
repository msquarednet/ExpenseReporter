describe('Expenses Controller', function(){
  
  var $controllerConstructor;
  var scope;
  
  beforeEach(module('app'));
  beforeEach(inject(function($controller, $rootScope){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
  }))
  
  it('should have 3 expense items', function(){
    var ctrl = $controllerConstructor('ExpensesController', {$scope:scope});
    expect(ctrl.expenseItems.length).toBe(3);
  })
  
  
  
})