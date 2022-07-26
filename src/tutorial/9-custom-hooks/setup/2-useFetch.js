import { useState, useEffect } from 'react';

// note that when creating custom hooks, "use" have to be at the front of the custom hook
export const useFetch = (url) => {;
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  return {loading,products}
}