class Bank{
    accountDetails= {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //validate account number function
    validateAcno(acno){
       return acno in this.accountDetails?true:false
    }

    //authenticate account(acno,password)
    authenticateAccount(acno,pswd){
        if(this.validateAcno(acno)){
       if(this.accountDetails[acno].password==pswd) {
        console.log("acc auth success");
       }
       else{
        console.log("incorrect pswd");
       }
    }
    else{
        console.log("invalid acc num");
    }
    }

    //balance enquiry function
    getBalanca(acno){
        if(this.validateAcno(acno)){

         console.log(`account ${acno} balance is ${this.accountDetails[acno].balance}`);
        }
        else{
            console.log("invalid acc num");
        }
    }
    //function for fund transfer
    fundTransfer(debitAcno,creditAcno,amount){
        if(this.validateAcno(debitAcno)&&this.validateAcno(creditAcno)){
          //check sufficient balance in debit acc
         if(this.accountDetails[debitAcno].balance>=amount){
         // sufficient balance in debit acc
         console.log(`before fund transfer,debit account details:${debitAcno}account and balance:${this.accountDetails[debitAcno].balance}
         credit acc details:${creditAcno}account and balance:${this.accountDetails[creditAcno].balance}`);
         this.accountDetails[debitAcno].balance-=amount
         this.accountDetails[creditAcno].balance+=amount
         console.log("fund transfer completed successfully");

         console.log(`after fund transfer,debit account details:${debitAcno}account and balance:${this.accountDetails[debitAcno].balance}
         credit acc details:${creditAcno}account and balance:${this.accountDetails[creditAcno].balance}`);
         }
         else{
            console.log("insuffient balance");
         }
        }
        else{
            console.log("invalid debit/credit acc details");
        }
    }
}
let user1 = new Bank()
console.log(user1.validateAcno(1001)?"given acount is valid":"not a valid account number");
user1.authenticateAccount(1000,"userone")
user1.getBalanca(1000)
user1.fundTransfer(1000,1001,1000)



