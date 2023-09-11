// Tell JS that this class is a child of BankAccount
class CheckingAccount CODE SOMETHING HERE {
	  // Code a CTOR that takes FOUR arguments:
	  // Three for the parent class
	  // The odProtection flag
	  // Remember to call the parent class CTOR!
      constructor ( CODE SOMETHING HERE ) {

      }
      // Code the accessor for the odProtection property
	  // Of course, the accessors for the parent class properties are INHERIRED!
	  // Code the getter/setter here
 
      // Override printValues() to call the parent class method
	  // followed by a log listing of the odProtection property
      printValues( ) {
         
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
         
      }
}