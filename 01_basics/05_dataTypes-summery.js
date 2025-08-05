// how data is stored in memory and how data is access,base on this the data is divided into two
// category primitive and non primitive
// primitive datatypes are "call by value"
// string,number,boolean,null,undefined,symbol,bigint
// non primitive
// array,objects,functions,

const id = Symbol('789')
const anotherId = Symbol('789')
console.log(id === anotherId)

// non primitive
// arrays,objects,functions

const array = ["football","golf","baseball"]


// objects
let myObj = {
    name: "aman",
    age: 18,
}

const myFunction = function(){
    console.log("hello")
}
 console.log(2+2)
 console.log(typeof null) // object

 
