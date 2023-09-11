// Code SavingsAccount as a child of BankAccount
class SavingsAccount CODE SOMETHING HERE  {
  // Code a CTOR that takes FOUR arguments:
  // Three for the parent class
  // The interest rate
  // Remember to call the parent class CTOR!
  constructor ( CODE SOMETHING HERE ) {

  }

   // Code the accessors for new property 
 
   // Override printValues() to call the parent class method
   // followed by a log listing of the interest property
   printValues( ) {
 
   }
   // Override makeDeposit by adding the interest to the deposit amount
   // before calling the parent class makeDeposit method (I did
   // mention that this use of interest rate is somewhat bogus, right?)
   makeDeposit( depAmt ) {
      super.makeDeposit( depAmt * ( 1 + this.interest ) ) ; 
   }
     
}