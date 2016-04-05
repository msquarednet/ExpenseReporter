function ExpenseItem(type, desc, amount) {
  this.type = type;
  this.desc = desc;
  this.amount = amount;
};

ExpenseItem.prototype.isReasonable = function(){
  return this.amount <= 100;
}