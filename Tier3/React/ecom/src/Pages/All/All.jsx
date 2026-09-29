import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card'
import "./All.css"
import { PassingValue } from '../../App'
const All = () => {
  const {product} = useContext(PassingValue)
  
  return (
    <div className='mainContiner'>
      {product.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default All