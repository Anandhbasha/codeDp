import React from 'react'
import "./Card.css"

const Card = ({image,price,title,id,description}) => {
  return (
    <div className='Card'>
        <section className='Image'>
            <img src={image}></img>
        </section>
        <section className='prodInfo'>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <p>{description}</p>
        </section>
        <section className='btn'>
            <button>Add to Cart</button>
        </section>
    </div>
  )
}

export default Card