import React from 'react'
import './ProductPage.css'
import { products } from './data/Products'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'


const ProductPage = () => {
    return (
        <div className='products-container'>
            <h2 className='section-title'>Special Footwear With Offers</h2>
            <p className='section-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolorum.</p>

            <div className='products-grid'>
                {products.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}
                    style={{textDecoration:'none'}}>
                        
                        <ProductCard product={item} />
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default ProductPage