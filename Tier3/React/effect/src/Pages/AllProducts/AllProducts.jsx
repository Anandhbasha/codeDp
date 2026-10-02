import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import "./AllProducts.css"
import { PassingValue } from '../../App'

const AllProducts = () => { 
  const {products} = useContext(PassingValue)
  return (
    <div className='AllProducts'>
      {products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default AllProducts