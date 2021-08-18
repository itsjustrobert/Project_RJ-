// alert("What is today")

//let the ues be able to make a account so that they can login in the bank
// you will have to work with form

// this is where the user will input their name
'use strict'
let userName = prompt("what is your name");
var allAccount = []; // we're store all accounts here

class Account {
  constructor(name, balance) {
    this.name = userName;
    this.balance = balance;
    allAccount.push(this);
  }
  depositFunds = ($money,newBalance)=>{
    if($money != null){
alert('please enter a valid deposit')
    } else if($money != 0 ){
alert('please enter a valid deposit')
    } else {
      newBalance = $money + this.balance; 
      return newBalance
    }
  }
  withdrawFunds = ($withdrawn) =>{
    if($withdrawn < this.balance){
      this.balance = this.balance - $withdrawn
    } else if($withdrawn < this.balance){
      alert('insufficient funds');
    } else if($withdrawn = null || 0){
      alert('please enter a valid deposit')
    }  else{
return this.balance
    }
  }
  
}



function welcomeBack() {
  document.write(`Welcome back, ${userName}!!`);
}

function UserInformation() {
  let startingQuestion = prompt("Is this your first time here?").toUpperCase();
  //  So I can know if the user been here before

  if (startingQuestion === "YES") {
    let accountMakingDecision = prompt(
      "Would you like to make a account"
    ).toUpperCase();

    // asking for a starting balance for new accounts
    let deposit = prompt("How much are you depositing today");

    //  console.log(deposit);
    let $deposit = parseInt(deposit);

    //  we just want to know if it's here
    console.log($deposit);

    let newAcct = new Account(userName, $deposit);
    console.log(newAcct);
    console.log(allAccount);
  } else if (startingQuestion === "NO") {
    // we need to put what happen if they she no
    alert("Thanks for return");
    welcomeBack();
  }
  
}
UserInformation();

// I think that I need to make something to pass
