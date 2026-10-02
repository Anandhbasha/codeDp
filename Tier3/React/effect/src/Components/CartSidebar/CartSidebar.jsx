import React, { useContext, useState } from 'react'
import { PassingValue } from '../../App'
import"./CartSidebar.css"

const CartSidebar = () => {
  const {displaycart,setDisplaycart,cardProd,setCount,count} = useContext(PassingValue)
  return (
    <div className='CartSidebar' style={{display:displaycart,gap:"15px",flexDirection:"column",width:"250px",overflowY:"scroll",padding:"30px"}} >
        <div className='topSideBar' style={{display:"flex",gap:"30px",justifyContent:"space-around",alignItems:"center",}}>
          <h2 style={{color:"purple"}}>Cart</h2>
          <div className='close' onClick={()=>setDisplaycart("none")} style={{display:"flex",justifyContent:"center",alignItems:"center",width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"grey",color:"white"}}>
            <i class="fa-solid fa-xmark"></i>
        </div>
        </div>
        {cardProd.map((item)=>(
          <div className='prod' style={{width:"220px",height:"250px",color:"black"}}>
              <img src={item.image}></img>
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
              <button onClick={()=>setCount((prev)=>++prev)}>addQty</button>
              <p>{count}</p>
              <button onClick={()=>setCount((prev)=>--prev)}>minusQty</button>
              <div className='priceBtn'>
                  <button>{count*item.price}</button>
              </div>
          </div>
        ))}
        
    </div>
  )
}

export default CartSidebar