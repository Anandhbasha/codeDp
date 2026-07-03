// function functionName(){
//     // code block
// }

function greet(){
    console.log("Hello Welcome");    
}

greet()

// arrow
// const arr=()=>console.log("Arrow function")

// arr()

// IIFE -> Immediately Invoked Function
// const prints = (function(){
//     console.log("IIFE Function");    
// })

// prints()


//anonymous
let msg = function(){
    console.log("Hello anonymous");
}
msg()


function Student(name){
    this.name = name
}

let s1 = new Student("Ram")
console.log(s1.name);
