import axios from "axios";
import { useState, useEffect } from 'react'
import { IProductState } from '../interfaces/IProduct'

export const useProductById = (id: number) => {
  const [product, setProduct] = useState<IProductState | {}>({})
  useEffect(() => {
      axios({
        method: 'GET',
        url: `https://dummyjson.com/products/${id}`
      }).then(res => {
        setProduct(res?.data || {})
      }).catch(e => {
        console.error(e)
      });
  }, [id])
  return { product }
}