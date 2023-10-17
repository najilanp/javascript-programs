var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"maruti suzuki",
    price:"13"


}

//display name and manufacturer
console.log(`name is ${car["name"]} and manufacturer is ${car["manufacturer"]}`);
//check model key is present

"model"in car?console.log(car["model"]):"model is not available";




//add variant as automatic, manual

car.variant=['automatic','manual']
console.log(car);

//add color

car.color=['red','black']
console.log(car);

//add one color to car Object
car.color.push("ash")
console.log(car);
