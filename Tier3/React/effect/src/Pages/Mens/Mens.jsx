import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import "./Mens.css"
import { PassingValue } from '../../App'

const Mens = () => {
  const {products} = useContext(PassingValue)
  const mensProduct = products.filter((item)=>item.category=="men's clothing")

  return (
    <div className='Mens'>
      {mensProduct.map((x)=>(
        <Card {...x}/>
      ))}
    </div>
  )
}

export default Mens