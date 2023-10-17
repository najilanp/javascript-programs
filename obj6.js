weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

//create empty object
output={}

//get each item from weatherData item1={district:'thrissur',temp:32}

for(let disDetails of weatherData){
    //store district and curtemp seperately
 let district=disDetails.district
 let curtemp=disDetails.temp
 //chech dis in output
 if(district in output){

  let oldTemp=output[district]
  //compare 
   if(curtemp>oldTemp){
    output[district]=curtemp
   }else{
    output[district]=oldTemp
   }
 }
 else{
    output[district]=curtemp
 }
}
console.log(output);
