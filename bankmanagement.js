
function BankAccount(accountnumber, name, type, balance, active) {
    this.accountnumber = accountnumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = active;
    this.deposit = function (amount) {
        this.balance = this.balance + amount;
        console.log(`After depositing your account balance is ${this.balance}`);
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            console.log(`After withdraw your account balance is ${this.balance}`);
        }
        else {
            console.log(`Insufficient balance to withdraw. Now balance is ${this.balance}`)
        }

    }

    this.checkBalance = function () {
        console.log(`Your account balance is now ${this.balance}`);
    }
    this.isActive = function () {
        if (this.active) {
            return true;
        }
    }
}


let allData = [];
let person1 = new BankAccount(112345, "Ritesh", "Saving", 800, true);
person1.deposit(200);
person1.withdraw(500);
person1.checkBalance();
let status1 = person1.isActive();
if (status1) {
    console.log("Account is Active");
}
allData.push(person1);


let person2 = new BankAccount(144545, "Anita", "Saving", 600, true);
person2.deposit(200);
person2.withdraw(500);
person2.checkBalance();
status1 = person2.isActive();
if (status1) {
    console.log("Account is Active");
}

allData.push(person2);


let person3 = new BankAccount(112345, "Ranita", "Saving", 1000, true);
person3.deposit(200);
person3.withdraw(500);
person3.checkBalance();
status1 = person3.isActive();
if (status1) {
    console.log("Account is Active");
}

allData.push(person3);

function getTotalBalance() {
    let total_balance = 0;
    allData.map((ele) => {
        total_balance += ele.balance;
    })
    return total_balance;
}

let allBalance = getTotalBalance();
console.log(`Total balance of all active accounts is ${allBalance}`);