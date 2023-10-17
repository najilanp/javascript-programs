const prompt = require('prompt-sync')({sigint:true})

const userInput = prompt("enter a day:")

console.log(userInput);

switch(userInput){
    case "sunday":
        console.log("sunday is a holiday");
        break;
    case "saturday":
            console.log("saturday is a holiday");
            break;  
    default:
        console.log("This is a weekday");
}

console.log("task completed");