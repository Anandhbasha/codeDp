import { useEffect, useState } from "react"

const App = ()=>{
  const[count,setCount] = useState(0)
  const [products,setProducts] = useState([])
  useEffect(()=>{
      const fetchData = async()=>{
        try {
          const res = await fetch("https://fakestoreapi.com/products")
          if(!res){
            throw Error("Unable to connect the API")
          }
          else{
            setProducts(await res.json())
          }
        } catch (error) {
          alert(error)
        }
      }   
      fetchData()  
  },[count])

  console.log(products);
  
  const handleAdd = ()=>{
    setCount((prev)=>++prev)
  }
  return(
    <button onClick={handleAdd}>Click{count}</button>
  )
}

export default App