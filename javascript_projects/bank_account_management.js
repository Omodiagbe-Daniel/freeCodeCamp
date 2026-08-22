class BankAccount {
  constructor () {
    this.balance = 0;
    this.transactions = [];
  }

  deposit (depositedAmount) {
    if (depositedAmount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: depositedAmount})
      this.balance += depositedAmount;
      return `Successfully deposited $${depositedAmount}. New balance: $${this.balance}`;
    }
    else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw (withdrawnAmount) {
    if (withdrawnAmount > 0 && withdrawnAmount < this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount: withdrawnAmount
      })
      this.balance -= withdrawnAmount;
      return `Successfully withdrew $${withdrawnAmount}. New balance: $${this.balance}`;
    }
    else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance () {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposited = [];
    for (let transaction of this.transactions) {
      if (transaction.type === "deposit") {
        deposited.push(transaction.amount);
      }
    }
    return `Deposits: ${deposited.join(",")}`;
  }
  listAllWithdrawals () {
    const withdrawals = [];
    for (let transaction of this.transactions) {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`; 
  }
}

const myAccount = new BankAccount();
;
myAccount.deposit(1000);
myAccount.deposit(500);
myAccount.withdraw(250);
myAccount.withdraw(400);
myAccount.deposit(600);
console.log (myAccount.listAllDeposits())
