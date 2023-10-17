text="hai hello all hai hello hai"
//display word count of the given text

//1 split text into words
wordArray=text.split(' ')
//2 create empty object to hold output
output={}
//3 get each item from word array and check it is inthe output object

for(let word of wordArray ){
    if(word in output){
        output[word]+=1
    }
    else{
        output[word]=1
    }
}
for(let word in output){
    console.log(`${word}:${output[word]}`);
}