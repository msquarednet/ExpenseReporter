'use strict';

describe('Persisting Expenses', function(){
  beforeEach(module('app'));
  
  describe('spy callback', function(){
    
    it('should callback when persisted', inject(function(ExpensesDataService){
      var spy_cb = jasmine.createSpy('spy_cb');
      ExpensesDataService.persistExpenses(spy_cb);
      expect(spy_cb).toHaveBeenCalled();
    }));
    
  });
  
  describe('spy on', function(){
    
    it('should spy on persistExpenses', inject(function(ExpensesDataService){
      var spy = spyOn(ExpensesDataService, 'persistExpenses');
      ExpensesDataService.persistExpenses();
      expect(spy).toHaveBeenCalled();
    }));
    it('should spy on persistExpenses and fake a reply', inject(function(ExpensesDataService){
      var spy = spyOn(ExpensesDataService, 'persistExpenses')
        .and.callFake(function(){
          return 3;
        })
      var numPersisted = ExpensesDataService.persistExpenses();
      expect(numPersisted).toEqual(3);
    }));
        
  });
  
  
});