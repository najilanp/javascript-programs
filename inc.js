a=["mili","mini","milu","mithu","minju"]

//1 find index of "milu"
console.log(`index of 'milu is ${a.indexOf("milu")}`);


//2 check "mithu is in the given array'
console.log(`is mithu is in the given array ${a.includes("mithu")?"yes":"no"}`);

//3 delete mini from the given array
a.splice(a.indexOf("mini"),1)
console.log("after removing mini from the given arrat:",a);
//4 replace mithu by milan
a.splice(a.indexOf("mithu"),1,"milan")
console.log("after replacing mithu by milan from the given array:",a);
