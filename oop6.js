console.log("exception handling in js");

expr="10+20/5"

try{
    console.log("try block");
    result=eval(expr)
    console.log(result);
}
catch{
    console.log("catch block");
    console.log("invalid expr");
}
finally{
    console.log("finally block");
    console.log("task completed");
}