// all
// ->first false

const getproducts = new Promise((resolve,reject)=>{
    fetch("https://fakestoreapi.com/product").then((res)=>{
        if(res.ok){
            resolve(res.json())
        }
        else{
            reject("unable to Get Products")
        }
    })
})

const getCategory = new Promise((resolve,reject)=>{
    fetch("https://fakestoreapi.com/products/categorie").then((res)=>{
        if(res.ok){
            resolve(res.json())
        }
        else{
            reject("Unable to get Cat")
        }
    })
})

const getUser = new Promise((resolve,reject)=>{
    fetch("https://fakestoreapi.com/user").then((res)=>{
        if(res.ok){
            resolve(res.json())
        }
        reject("Unable to load user")
    })
})

// Promise.all([getproducts,getCategory,getUser]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// Promise.allSettled([getproducts,getCategory,getUser]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// Promise.race([getproducts,getCategory,getUser]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// Promise.any([getproducts,getCategory,getUser]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})