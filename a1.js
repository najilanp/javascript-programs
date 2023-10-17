weekDays=["monday","tuesday","friday"]
console.log(weekDays);
console.log(`type of weekdays: ${typeof weekDays}`);
console.log(`total items of weekdays are: ${weekDays.length}`);
console.log(`first item of weekdays is :${weekDays[0]}`);
console.log(`first item of weekdays is :${weekDays[2]}`);

for(i=0;i<weekDays.length;i++){
    console.log(weekDays[i]);
}

for(let item of weekDays){
    console.log(item);
}


for(let index in weekDays){
    console.log(index);
}

for(let index in weekDays){
    console.log(weekDays[index]);
}