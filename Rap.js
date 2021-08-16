// let allAccounts = [];

// class Accounts{
//   balance = INITDEPOSIT;
//   constructor(accountName,accountNumber){
//     this.accountName = accountName;
//     this.accountNumber = accountNumber;
//     allAccounts.push(this)
//   }
  
// }
// // const deposit = (prevBalance,n) => {
//     prevBalance = this.balance;
//     if (n != 0){
//       prevBalance = prevBalance + this.balance;
//       this.balance = prevBalance;}
//       else{
//         alert('please enter a valid deposit');
//       }
    
//   }
// const makeAccounts = ()=>{

//     let name = prompt('Hi, Welcome to Pinnacle Bank, What is your name?');
//     // initial deposit
//     let initDeposit = prompt('how much would you like to deposit');
//     var INITDEPOSIT = parseFloat(initDeposit);
//     // console.log(INITDEPOSIT);
//     let new$ = new Accounts(name,001);
//     console.log(new$)
// }
// makeAccounts();



// prompt the user for some number
// store that number into a variable that
// need a for loop get the username increment the account number and crate an instance of the accounts object
// everytime i see a prompt an object needs to be made
// why will the prompt show 
// whats the source
// 






// console.log('hello world');
var allAccounts = [] ;
class Account{
balance = 0 ;
constructor(acctName,acctNum){
  this.acctName = acctName;
  this.acctNum = acctNum;
  allAccounts.push(this)

}


}

// this function adds an account to the index and updates the account number--->  zero-indexed :-(  <----
let addacct = () =>{
let ACCTNUMBER = 0;
for(let i = 0; i < allAccounts.length ; i++){
  ACCTNUMBER =  i  + 1  ;
};//this needs to be the result of a function that returns a number coinciding with the creation of an acct
let Username = prompt ('hi what is your name')
confirm(`Welcome to Pinnacle Bank ${Username}! Would you like to continue?`);
alert(`Please make your first deposit ${Username}`);
deposit();

let $acct = new Account(Username,ACCTNUMBER);
console.log($acct);
function deposit(){
// alert('hello you...we are currently writing the deposit code sorry');
let $dep = prompt('how muchwould you like to deposit?');  // I'm asking them for a number so that I can have their starting balance.
let $cash = parseFloat($dep); //converting it from a string to a number.
console.log($cash);
$cash = Account.balance
}

}; 

//this needs to be the results of a loop that iterates up as accounts are made 
// so account number is a side effect of making a new instance of the class Account
// let makeAccount = () => {

// let name = prompt('hi what is your name');
// for(ACCTNUMBER = 1; ACCTNUMBER < allAccounts.length; ACCTNUMBER++){
  
let btn = document.getElementById('mybutton');
btn.addEventListener('click',addacct);
console.log(allAccounts);
// }
// };
