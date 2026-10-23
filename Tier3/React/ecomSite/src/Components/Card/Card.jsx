import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='productCard'>
      <Link to={`/product/${product.id}`}>
          <img src={product.image} alt='prodImage'/>
      </Link>
      <div className='productInfo'>
        <p className='catname'>{product.category}</p>
        <Link to={`/product/${product.id}`}><p className='catname'>{product.title}</p></Link>
        <p className='catname'>{product.price.toFixed(2)}</p>
        <button onClick={()=>dispatch(addtoCart(product))}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card