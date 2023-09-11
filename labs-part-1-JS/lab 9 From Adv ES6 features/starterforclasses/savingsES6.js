// Code SavingsAccount as a child of BankAccount
class SavingsAccount extends BankAccount  {
  // Code a CTOR that takes FOUR arguments:
  // Three for the parent class
  // The interest rate
  // Remember to call the parent class CTOR!
  constructor ( acctID, acctHolder, balance, interest ) {
   super ( acctID, acctHolder, balance )
   this._interest = interest;
  }

   // Code the accessors for new property 
   get interest() { return this._interest };
   set interest(int) { this._interest = int };
  
   // Override printValues() to call the parent class method
   // followed by a log listing of the interest property
   printValues( ) {
      super.printValues();
      console.log( `Interest Rate = ${this._interest}` )
   }
   // Override makeDeposit by adding the interest to the deposit amount
   // before calling the parent class makeDeposit method (I did
   // mention that this use of interest rate is somewhat bogus, right?)
   makeDeposit( depAmt ) {
      super.makeDeposit( depAmt * ( 1 + this._interest ) ) ; 
   }
     
}