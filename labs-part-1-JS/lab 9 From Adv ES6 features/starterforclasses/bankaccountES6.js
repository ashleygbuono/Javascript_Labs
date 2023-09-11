// Using ES6 features
class BankAccount {
  // Code a CTOR that takes 3 arguments: acctID, acctHolder, balance
  // Assign these arguments to variables with the same name but preceded by an _ (_acctID, e.g.)
  // Code your CTOR here
  constructor(acctID, acctHolder, balance) {
    this._acctID = acctID;
    this._acctHolder = acctHolder;
    this._balance = balance;
  }

  // Code properties implemented as getters and setters. Each should be a one-line 'method'
  // Code your getters and setters here
  set acctID(acctID) {
    this._acctID = acctID;
  }
  get acctID() {
    return this._acctID;
  }
  set acctHolder(acctHolder) {
    this._acctHolder = acctHolder;
  }
  get acctHolder() {
    return this._acctHolder;
  }
  set balance(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }

  // Code a printValues method that lists each property value to the log
  printValues() {
    console.log(`Account ID = ${this._acctID}`);
    console.log(`Account holder = ${this._acctHolder}`);
    console.log(`Account balance = ${this._balance}`);
  }
  // Code a makeDeposit method that takes an argument of depAmt.
  // If depAmt > 0 increase the balance by the argument amount and write to the log
  // "Deposit of " the deposit amount " made to account " the accountID
  //
  // If depAmt < 0 write to the log
  // "Deposit Amount " the deposit amount " must exceed 0"
  makeDeposit(depAmt) {
    if (Number(depAmt) > 0) {
      this._balance += depAmt;
      console.log(`Deposit of ${depAmt} made to account ${this._acctID}`);
    } else {
      console.log(`Deposit amount ${depAmt} must exceed 0`);
    }
    
  }
  // Code a makeWithdrawal method that takes an argument of withAmt
  // If withAmt > 0 and the resulting balance after withdrawal exceeds 0,
  // change the balance by subtracting the withdrawal amount
  // write to the log "Withdrawal of " the withdrawal amount " made to account " the accountID
  // if withAmt <= 0 write to the log "Withdrawal Amount " the withdrawl amount " must exceed 0"
  // else (resulting balance < 0) write to log
  // "Withdrawal Amount " the withdrawal amount" must NOT exceed balance of " account balance
  //
  // Feel free to code the logic anyway you like.
  makeWithdrawal(withAmt) {
    if (withAmt > 0 && this.balance >= withAmt) {
      this.balance -= withAmt;
      console.log(`Withdrawal of ${withAmt} made to account ${this.acctID}`);
    } else if (withAmt <= 0) {
      console.log(`Withdrawal amount ${withAmt} must exceed 0`);
    } else {
      console.log(
        `Withdrawal amount ${withAmt} must not exceed balance of ${this.balance}`
      );
    }
  }
}

