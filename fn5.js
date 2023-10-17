console.log("nested function & closure property");

var globalValue="global"

function parent(){
    console.log("inside parent function");
    parentValue="parent"
    console.log(`variable outside parent function:${globalValue}, variable of parent function is:${parentValue}`);
    child=()=>{
        console.log("inside child function");
    childValue="child"
    console.log(`variable outside parent function:'${globalValue}', variable of parent function is: '${parentValue}', variable of child function is:'${childValue}' `); 
    }
    child()
}
parent()
console.log("completed");