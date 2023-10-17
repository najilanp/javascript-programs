// variables

// variable-name=content

options="first"
console.log(options,typeof options);
options=10
console.log(options,typeof options);


// var

// hoisting-can use variable before declaring/creating it

console.log(weekdays,typeof weekdays);

var weekdays="tuesday"
console.log(weekdays,typeof weekdays);

weekdays=7
console.log(weekdays,typeof weekdays);

const model = "polo"
console.log(model);

// let

var i=10
console.log("before loop i=", i);

for(let i=1;i<=5;i++){
    console.log("inside loop i=",i);
}

console.log("after loop i=",i);

