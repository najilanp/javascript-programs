//display all duplicate elements from array
duplicateArray = [10,20,30,45,60,10,45,20]

for(i=0;i<duplicateArray.length;i++){
    for(j=i+1;j<duplicateArray.length;j++){
    if(duplicateArray[i]==duplicateArray[j]){
        console.log(duplicateArray[i]);        
    }
    
    }
}
   
    

