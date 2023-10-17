input=[
    [10,20],
    [30,40],
    [23,56],
    [59,67],
    [90,23]
]

//display num less than 50

for(let subArray of input){
    // console.log(subArray);
    for(let num of subArray){
        // console.log(num);
        if(num<50){
            console.log(num);
        }
    }
}