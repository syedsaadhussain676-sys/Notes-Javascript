console.log("hi")

// Student Object
const student = {
    name : "saad",
    age : 23,
    english : 65,
    math : 87,
    physics : 43,
    getAvg (){
        let avg = (this.english + this.math + this.physics) /3
        console.log(`${this.name} got avg marks= ${avg}`);
    }
}

student.getAvg();



//Bank account
const account={
    holder:"saad hussain",
    balance:99999,
    deposit (amount){
    this.balance += amount;
console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
}
};
account.deposit(500);
