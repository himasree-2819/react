import React from 'react'
import { FaBoxOpen } from "react-icons/fa";

import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2><FaBoxOpen/>Product id: {id}</h2>
        </div>
    )
}

export default ProductDetailPage