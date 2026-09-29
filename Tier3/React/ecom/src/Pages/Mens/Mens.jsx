import React, { useContext } from 'react'
import Card from '../../Components/Cards/Card'
import { PassingValue } from '../../App'

const Mens = () => {
  const {product} = useContext(PassingValue)
  const mensProd = product.filter((x)=>x.category==="beauty")
  return (
    <div className='mainContiner'>
      {mensProd.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Mens