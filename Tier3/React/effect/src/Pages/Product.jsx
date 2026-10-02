import React, { useContext } from 'react'
import { PassingValue } from '../App'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {products} = useContext(PassingValue)
    const {id} = useParams()
    const prod = products.find((item)=>item.id===Number(id))
    if(!prod){
        return <h1>product not found</h1>
    }
  return (
    <div className='Product'>
        <img src={prod.image}></img>
        <h3>{prod.title}</h3>
        <h3>{prod.price}</h3>
        <h3>{prod.description}</h3>
        <button>Add to cart</button>
    </div>
  )
}

export default Product