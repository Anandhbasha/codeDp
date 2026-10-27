export const greet =()=>{
    console.log("hello welcome");    
}
// // // map
// // let arr = [88,77,68,22,78,35]
// // arr.map((x)=>console.log(x))
// // reduce
// // arrname.reduce((acc,sum))
// // let total = 0
// // for(let x of arr){
// //     total+=x
// // }
// // console.log(total);
// // const total = arr.reduce((acc,sum)=>acc+sum)
// // // acc = 88
// // // sum = 77 -> total
// // // sum = 68+total = acc
// // // 
// // console.log(total);

// // // filter
// // const even = arr.filter((x)=>x%2==0)
// // const odd = arr.filter((x)=>x%2!=0)
// // console.log("The even numbers are:",even ,"\n The Odd numbers are:",odd);

// // find
// // const finds = arr.find((x)=>x==80)
// // console.log(finds);

// // let arr = [88,77,68,22,78,35]
// // // push
// // arr.push(100)
// // console.log(arr);
// // arr[7] = 700
// // console.log(arr);

// // pop

// // console.log(arr.pop());

// // shift
// // arr.shift()
// // console.log(arr);

// // // unshift
// // arr.unshift(800)
// // console.log(arr);

// // // slice
// // let newArr = arr.slice(0,2)
// // console.log(newArr);

// // splice
// // let arr = [88,77,68,22,78,35]
// // // splice("starting point to remove","no of index remove","replace value")
// // arr.splice(2,2,12)
// // console.log(arr);


// // // split
// // let text = "i love js"
// // let newtext = text.split(" ")
// // console.log(newtext);

// // // join
// // let joins = newtext.join("-")
// // console.log(joins);

// // // includes
// // console.log(arr.includes(88,0));
// // // indexof
// // console.log(arr.indexOf(88));

// // sort
// // let arr = [5,10,12,100,3000]
// // // arr.sort((a,b)=>a-b)
// // arr.sort((a,b)=>b-a)

// // console.log(arr);
// // [5,10,25,100]
// // a-b
// // 5-10 = -5
// // no swap
// // 5 10 25 100
// // 10-25 = 

// // set
// let newSets = new Set()

// newSets.add(100)
// newSets.add(100)
// newSets.add(100)
// newSets.add(101)
// newSets.add(101)
// newSets.add(102)
// newSets.add(104)
// newSets.add(103)
// console.log(newSets);
// let arr = new Set([10,10,10,12,12,12,15])
// console.log(arr);


// // concat
// let a = [10,20,30]
// let b= [40,50,60]
// let c= [70,80,90]
// let res = a.concat(b,c)
// console.log(res);

// // reverse
// res.reverse()
// console.log(res);

// let txt = "Hello"
// let re= txt.split("").reverse().join("")
// console.log(re);


// // some
// let arr1 = [1,3,7,5,11]
// let soms = arr1.some(x=>x%2==0)
// console.log(soms);

// // fill
// // arr1.fill(10)
// // console.log(arr1);
// // arr1.fill(7,2)
// // console.log(arr1);
// // arr1.fill(7,1,3)
// // console.log(arr1);

// // at
// console.log(arr1.at(-2));

// // toString
// let x =10
// let y = x.toString()
// console.log(typeof(y));
// let z = Number(y)
// console.log(typeof(z));


// // toUpperCase
// let userName = "Balaji"
// console.log(userName.toUpperCase());

// // toLowerCase
// console.log(userName.toLowerCase());


// let text = "Welcome"
// let splits = text.split("")
// console.log(splits);


// settimeout
// setTimeout(()=>{

// },time delay)
// setTimeout(()=>{
//     console.log("SetTimeout is working");
    
// },3000)
// // setinterval
// setInterval(()=>{
//     console.log("setInterval is working");
    
// },2000)
// spread operator
// // ...
// let a =[1,2,3]
// let b =[4,5,6]
// let c = [a,b]
// console.log(c);
// let d = a+b
// console.log(d);
// let c = [0,...a,...b,7]
// console.log(c);

// let user = {
//     name:"Kavin",
//     age:20
// }
// let details = {
//     city:"CBE"
// }
// let update = {
//     age:30
// }
// let res = {...user,...details,...update}
// console.log(res);


// const add = (a,b,c)=>{
//     console.log(a+b+c);    
// }

// let arr = [10,30,40]

// add(...arr)

// // string
// let word = "Hello World"

// console.log([...word]);


// rest operator
// let newarr = [10,20,30,40,50,60,70,80]
// let[first,second,...third] = newarr
// console.log(first);
// console.log(second);
// console.log(third);

// const add =(...nums)=>{
//     let total = 0
//     for(let n of nums){
//         total+=n
//     }
//     console.log(total);
    
// }

// add(10,20,30)


// function stu(name,...marks){
//     console.log(name);
//     console.log(marks);
    
// }

// stu("Vinay",90,80,70)
// destructure
const person ={
    name:"Vikram",
    age:30,
    city:"Karur",
    course:"Java"
}

const {name,course,...others} = person
console.log(name,course);
console.log(others);


// template Literals
console.log("The value is",name);
console.log("The value is"+name);
console.log(`The value is ${name}`);

// modules
