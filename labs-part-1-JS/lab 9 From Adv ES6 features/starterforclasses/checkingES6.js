// Tell JS that this class is a child of BankAccount
class CheckingAccount extends BankAccount {
	  // Code a CTOR that takes FOUR arguments:
	  // Three for the parent class
	  // The odProtection flag
	  // Remember to call the parent class CTOR!
      constructor ( acctID, acctHolder, balance, odProtection ) {
		super( acctID, acctHolder, balance )
		this._odProtection = odProtection;
      }
      // Code the accessor for the odProtection property
	  // Of course, the accessors for the parent class properties are INHERIRED!
	  // Code the getter/setter here
	  set odProtection(od) { this._odProtection = od };
	  get odProtection() { return this._odProtection };
      // Override printValues() to call the parent class method
	  // followed by a log listing of the odProtection property
      printValues( ) {
         console.log( acctID, acctHolder, balance, odProtection );
      }
      // Override makeWithdrawal as follows:
	  //
	  // If the class DOES NOT have overdraft protection OR
	  // the withdrawal amount < the current balance, call 
	  // the parent class implementation
      // else if withAmt <= 0 write to the log 
	  // "Withdrawal Amount " the withdrawl amount " must exceed 0"
	  // else change the balance
      makeWithdrawal( withAmt ) {
         if (odProtection == false || withAmt < balance) {
			super.makeWithdrawal( withAmt );
		 } else if ( withAmt <= 0 ) {
			console.log(`Withdrawal Amount ${withAmt} must exceed 0`)
		 } else {
			balance -= withAmt;
		 }
      }
}