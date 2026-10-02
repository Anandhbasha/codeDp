import React, { useContext } from 'react'
import "./Card.css"
import { PassingValue } from '../../App'
import { useNavigate } from 'react-router-dom'

const Card = ({title,price,image,id,description}) => {
    const {count,setCount,setCardProd} = useContext(PassingValue)
    const navigate = useNavigate() 
    const handleCounts = ()=>{
        setCount((prev)=>++prev)
        
        const product = {
            id,title,price,image,description
        }
        setCardProd(prev=>[...prev,product])
    }
  return (
    <div className='Card' onClick={()=>navigate(`/product/${id}`)}>
        <div className='cardTop'>
            <img src={image}></img>
        </div>
        <div className='cardDetails'>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
        <div className='cardBtm'>
            <button onClick={handleCounts}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card