let student ={
    stdRollno:1,
    stdName:"Najila",
    stdAge:16,
    stdClass:10
}
//display name
console.log(`name of student is:${student["stdName"]}`);
//display age
console.log(`age of student is:${student["stdAge"]}`);
//check a key is available or not
if("stdPercentage" in student){
    console.log(`student percentage is:${student["stdPercentage"]}`);
}else{
    student["stdPercentage"]=96
    console.log("student percentage is",student["stdPercentage"]);
    console.log("student details are",student );
}


