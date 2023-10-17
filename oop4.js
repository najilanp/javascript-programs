function add(...arg){
    console.log("argument method");
    console.log(arg);
    console.log(arg.reduce((a,b)=>a+b));
}

add(10,20)
add(10,20,30)


