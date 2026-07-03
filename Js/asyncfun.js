const getproducts = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    if(res.ok){
        console.log(await res.json());        
    }
    else{
        console.log("Error");
        
    }
}

async function getUser (){
    const res = await fetch("https://fakestoreapi.com/users")
    if(res.ok){
        console.log(await res.json());        
    }
    else{
        console.log("Error");
        
    }
}

getproducts()
getUser()