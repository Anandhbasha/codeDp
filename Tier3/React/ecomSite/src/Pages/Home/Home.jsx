import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'

const Home = () => {
    const email = useSelector((state)=>state.auth.user)
    const {prods,loading,error} = useSelector((state)=>state.products)
    
  return (
    <div className='Home'>
        <section className='heroSection'>
          <div>
            <span className='herolabel'>
              New Collection
            </span>
            <h1>Discover Your <br/>Perfect Style</h1>
            <p>Shop fashion,Electronics,Jewellery and more.</p>
            <a href='#products' className='shopNow'>Shop Now</a>
          </div>
        </section>
        <section className='categorySection'>
          <Link to="category/mens">
            <div className='categoryBox'>Mens Clothing</div>
          </Link>
          <Link to="category/womens">
            <div className='categoryBox'>Womens Clothing</div>
          </Link>
          <Link to="category/electronics">
            <div className='categoryBox'>Electronics</div>
          </Link>
          <Link to="category/jewellery">
            <div className='categoryBox'>Jewellery</div>
          </Link>
        </section>
        <section id='products'>
          <h2>All products</h2>
          {loading && <p>...Loading Products</p>}
          {error && (<p>{error}</p>)}
          <div className='productsGrid'>
            {prods.map((product)=>(
              <Card product = {product}/>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Home