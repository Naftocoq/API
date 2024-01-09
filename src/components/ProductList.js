import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'

// import ProductCard from './ProductCard'

const ProductList = () => {
  const [products, setProducts] = useState([])

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList