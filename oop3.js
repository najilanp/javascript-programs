var glanza ={
    model:"hatch back",
    manufacturer:"toyota",
    price:"13 lakh"
}

var boleno ={
    manufacturer:"maruti suzuki",
    price:"10 lakh"
}
boleno.__proto__=glanza
console.log(`model of glanza is :${glanza.model}`);
console.log(`model of boleno is :${boleno.model}`);