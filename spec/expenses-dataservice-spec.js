describe('Expenses Data Service', function(){
  
  beforeEach(module('app'));


  it('should return 3 expenses', inject(function(ExpensesDataService){
    expect(ExpensesDataService.getExpenses().length).toBe(3);
  }));
  
  it('should return a taxi expense', inject(function(ExpensesDataService){
    var expenseItems = ExpensesDataService.getExpenses();
    var testItem = new ExpenseItem('Taxi','to airport',89.95);
    expect(expenseItems).toContain(testItem);
  }));
  
  describe('reasonable expenses', function(){
    var taxi,dinner;
    beforeEach(function(){
      jasmine.addMatchers(customMatchers);
    })    
    beforeEach(function(){
      taxi = new ExpenseItem('Taxi','to airport',89.95);
      dinner = new ExpenseItem('Dinner','at airport',189.95);
    })

    it('taxi should be a reasonable expense', function(){      //expect(taxi).toBeLessThan(100);
      expect(taxi).toBeAReasonableExpense();
    })
    it('dinner should NOT be a reasonable expense', function(){
      expect(dinner).not.toBeAReasonableExpense();
    })  
      
  })
  
})