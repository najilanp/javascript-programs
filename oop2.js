//inheritance
//classical inheritance :inheritance between two class


class Parent{
    bike(){
        console.log("this is duke");
    }
}
class Child extends Parent{
    // bike(){
    //     console.log("this is pulsar");
    // }
    //it will show pulsar
}

let ch=new Child()
ch.bike()




