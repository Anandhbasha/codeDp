// Hoisting
// variable decalaration
// // var
// var a = 10
// // declaration type
// // a-> variable name
// // =->assignment
// // 10 value
// var a =50 
// // re declaration
// a=70
// // re assign
// console.log("The value is:",a);


// // es6 ->es ->ecma script
// // let 

// let b = 80
// b =90
// console.log(b);
// // one time declaration


// //const
// const c =20
// // const c =30
// c=30
// console.log(c);

// closure
// local scope
// global scope

// {
//     const a =20
    
// }
// console.log(a)

// var global scope
// if you are decelare the variable inside tha block means it is only have localscope

// operators
// ternary operator
//condition ? "true":"false"
let lightSwitch = false

console.log(lightSwitch==true?false:true);

// data type
    // premitive data types
// number
var num1 = 50
// var num1 = 50.5
// console.log(typeof(num1));

// string
let userName = "Arun"
console.log(typeof(userName));
// boolean
let todayClass = true
console.log(typeof(todayClass));
// undefined
let b = undefined;
console.log(typeof(b));

// nan
console.log(num1/userName);
// 50/Arun
// not an number

// null
let x = null
console.log(typeof(x));

    // non premitive data types
// array
let marks = [10,20,30,40]
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
// console.log(marks[4]);

// Object
const students = {
    stuName:"Anoushka",
    stuCourse:"Tier1",
    stuAge:17
}

// console.log(students["stuAge"]);
// console.log(students.stuCourse);

const studentList = [
    {
        stuName:"Anoushka",
        stuCourse:"Tier3",
        stuAge:17 ,
        courses:["C","c++","Java","Python","HTML","CSS","JS","ReactJs","NodeJs","Mongodb","SQL"]
    },
    {
        stuName:"Adham",
        stuCourse:"Tier3",
        stuAge:17,
        courses:["C","c++","Java","Python","HTML","CSS","JS","ReactJs","NodeJs","Mongodb","SQL"]
    },
    {
        stuName:"Sanjana",
        stuCourse:"Tier2",
        stuAge:17,
        courses:["C","c++","Java","Python","HTML","CSS","JS","Mongodb","SQL"]
    },
    {
        stuName:"Rohan",
        stuCourse:{
            plan:"Tier3",
            courses:["C","c++","Java","Python","HTML","CSS","JS","ReactJs","NodeJs","Mongodb","SQL"]
        },
        stuAge:17,
    },
    {
        stuName:"Santhosh",
        stuCourse:{
            plan:"Tier3",
            courses:["C","c++","Java","Python","HTML","CSS","JS","ReactJs","NodeJs","Mongodb","SQL"]
        },
        stuAge:17,
        
    },
]

// console.log(studentList[3].courses[3]);
console.log(studentList) 
