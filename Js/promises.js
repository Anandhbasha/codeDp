// setTimeout(()=>{
//     console.log('Hello World')
// },5000)

// console.log("Welcome to Promises");

// declaartion type promiseName = new Promise((resolve, reject) => {
    // promise body
    // })


// const bookTicket = new Promise((resolve, reject) => {
//     let books = true
//     if(books){
//         resolve("Ticket booked successfully");
//     } else {
//         reject("Failed to book ticket");
//     }
// })
    
// bookTicket.then((message) => {console.log(message)}).catch((error) => { console.log(error)})



// API
// 4 Four method we have
// get,post,put,delete
// const getProducts = new Promise((resolve, reject) => {
//     fetch("https://fakestoreapi.com/products").then((res)=>{
//         if(res.ok){
//             resolve(res.json())
//         } else {
//             reject("Failed to fetch products")
//         }
//     })
// })

// getProducts.then((data) =>{console.log(data)}).catch((error) => {console.log(error)})

// Race
let Rohan = new Promise((resolved,rejected) => {
    let book = true;
    if(book){
        resolved("Rohan Said :Ticket booked successfully");
    } else {
        rejected("Rohan Said :Failed to book ticket");
    }
})
let Adham = new Promise((resolved,rejected) => {
    setTimeout(()=>{
        let book = true;
        if(book){
            resolved("Adham Said :Ticket booked successfully");
        } else {
            rejected("Adham Said :Failed to book ticket");
        }
    },10000)
})
let Santhosh = new Promise((resolved,rejected) => {
    let book = true;
    if(book){
        resolved("Santhosh Said :Ticket booked successfully");
    } else {
        rejected("Santhosh Said :Failed to book ticket");
    }
})
let sanjana =new Promise((resolved,rejected) => {
    let book = false;
    if(book){
        resolved("sanjana Said :Ticket booked successfully");
    } else {
        rejected("sanjana Said :Failed to book ticket");
    }
}) 

// Promise.race([Rohan,Adham,Santhosh,sanjana]).then((message) => {console.log(message)}).catch((error) => {console.log(error)})

// any
// Promise.any([Rohan,Adham,Santhosh,sanjana]).then((message) => {console.log(message)}).catch((error) => {console.log(error)})
// all
// Promise.all([Rohan,Adham,Santhosh,sanjana]).then((message) => {console.log(message)}).catch((error) => {console.log(error)})
// allSettled
Promise.allSettled([Rohan,Adham,Santhosh,sanjana]).then((message) => {console.log(message)}).catch((error) => {console.log(error)})