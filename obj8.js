accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`total number of accounts is ${accounts.length}`);




//2. print account number whose ac_type is savings
accounts.filter(accdetails=>accdetails.ac_type=="savings").forEach(items=>console.log(items.acno))

//3.print the balance of accnount number 1000

console.log("balance of accnount number 1000 is ",accounts.find(accdetails=>accdetails.acno==1000).balance);


//4. print all gpay transactions
console.log('................gpay transactions');
console.log(accounts.map(items=>items.transaction).flat(Infinity).filter(items=>items.mode=="gpay"));


//5. print all transaction whose amount > 5000
console.log('...........all transaction whose amount > 5000');
console.log(accounts.map(items=>items.transaction).flat(Infinity).filter(items=>items.amount>5000));




//6. print credit transaction of account 1002
console.log(".............credit transaction of account 1002");


credit1002=accounts.map(items=>items.transaction).flat(Infinity).filter(items=>items.to==1002)
console.log(credit1002);


//total credited amount of 1002
console.log(credit1002.map(items=>items.amount).reduce((a1,a2)=>a1+a2));
creditbal1002=credit1002.map(items=>items.amount).reduce((a1,a2)=>a1+a2)

//7. print debit transaction of account 1002


debit1002=accounts.find(items=>items.acno==1002).transaction
console.log(debit1002);

//total debit amount from 1002
console.log(debit1002.map(item=>item.amount).reduce((a1,a2)=>a1+a2));
debitbal1002=debit1002.map(item=>item.amount).reduce((a1,a2)=>a1+a2)

//current balance of 1002
balance1002=accounts.find(items=>items.acno==1002).balance
currbalance=balance1002+creditbal1002-debitbal1002
console.log(currbalance);



//8. print transaction history of 1002
console.log("..........................transaction history of 1002 using object///////////////////////////////////////////////////////--------------");
transactionhistory={
    credit:credit1002,
    debit:debit1002
}
console.log(transactionhistory);
console.log("..........................transaction history of 1002 using array--------------");

transaction1002Array=[...credit1002,...debit1002]
console.log(transaction1002Array);



//9. print highest balance account details
highest=accounts.reduce((a1,a2)=>a1.balance>a2.balance?a1:a2)
console.log(`highest balance acc is ${highest.acno} and its balance is ${highest.balance}`);

