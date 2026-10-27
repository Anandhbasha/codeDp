// while
// var dec
// while(condtion){
//     // code
//     //increment or decrement
// }
// let a =0
// while(a<=10){
//     console.log(a);
//     a++    
// }
// // do while
// let x =5
// do{
//     console.log("Do while is working"); 
//     x++   
// }while(x<=10)
// // for
// for(let x=0;x<=10;x++){
//     console.log(x);
// }

// 153->1^3+5^3+3^3 = 1+125+27 = 153

// types of loops
//, for,
// for in
let arr = [88,77,68,22,78,35]

// for(variable in-Keyword arr){
    // code 
// }
// in index ->x =0 ,x=1,x=2,x=3,x=4,x=5
// for(let x in arr){
//     console.log(arr[x]);    
// }
// for of
// for(let x of arr){
//     console.log(x);    
// }
// x= 88 x =77 68 22 78 35
// foreach
// arrayName.foreach((item)=>)

arr.forEach((index,x)=>console.log(x,index))
// array
// api
// UL render

// String

// for (let a of "GOAT"){
//     console.log(a);    
// }


// index/keys
let user = {
    names:"Abdul",
    age:25
}

for(let key in user){
    console.log(key);
    
}