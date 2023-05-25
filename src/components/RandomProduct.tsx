'use client'
import { useState, useEffect } from "react"
import { useProductById } from '../hooks/useProductById'
import { IProductState } from '../interfaces/IProduct'

const rand = (min: number, max: number) => Math.floor(Math.random() * max) + min;

const RandomProduct = () => {
  const [productId, setProductId] = useState(rand(1, 100))
  const { product } = useProductById(productId)
  const { title, description, images } = product;
  const image = images?.[0]

  const handleRandomProduct = () => {
    setProductId(rand(1, 100))
  }
  return (
    <div>
      <h1 className="text-4xl text-blue-400 font-bold my-6 text-center">Random Product</h1>
      <div className="text-center">
      <button onClick={handleRandomProduct} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Random Product</span>
      </button>
      </div>
      <h2 className="text-4xl text-green-400 font-bold my-4">{title}</h2>
      <p className="text-md mb-4">{description}</p>
      <div className="m-8">
        <img src={image} className="w-full object-cover" />
      </div>
      
    </div>
  )
}

export default RandomProduct