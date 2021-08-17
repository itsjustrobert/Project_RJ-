// alert("What is today")

//let the ues be able to make a account so that they can login in the bank
// you will have to work with form

var allAccount = []; // we're store all accounts here


class Account{
    constructor( name, balance,){
        this.name = name;
        this.balance = balance;
        allAccount.push(this)
    }
 
}









function UserInformation() {
let useName = prompt("what is your name");
  let startingQuestion = prompt("Is this your first time here?").toUpperCase();
  //  So I can know if the user been here before

  if ((startingQuestion === "Yes")) {
    let accountMakingDecision = prompt(
      "Would you like to make a account"
    ).toUpperCase();
        
    let newAccount = new Account(useName, $deposit);

    console.log(newAccount);
    
    }
    // we need to put what happen if they she no
  else if (startingQuestion == "NO"){
        alert("Thanks for return")
    };
    let deposit = prompt("How much are you depositing today");
    //  console.log(deposit);
    let $deposit = parseInt(deposit);
    //  we just want to know if it's here
    console.log(deposit);


  }



UserInformation();

// I think that I need to make something to pass 
