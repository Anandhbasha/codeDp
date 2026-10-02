import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassingValue } from '../../App'

const Jewellery = () => {
  const {products} = useContext(PassingValue)
  const jewellery = products.filter((item)=>item.category=="jewelery")
  return (
    <div className='Jewellery'>
      {jewellery.map((x)=>(
        <Card {...x}/>
      ))}
      
    </div>
  )
}

export default Jewellery