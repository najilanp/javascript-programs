// predefined functions

//1. w.a.p to validate a mobile number



// function mobile(){
//     number="8085674500"
//    if (number.length==10){
//     console.log("true");
//    }
//    else{
//     console.log("false");
//    }
   
// }
// mobile()

//------------------or----------------------
const validateMobile=(mobile)=>{
    return mobile.length ==10? true:false
}

console.log(validateMobile('1234567890')?"valid":"not valid");
