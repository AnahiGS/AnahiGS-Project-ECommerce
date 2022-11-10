import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductContext = createContext()

function ProductProvider (props) {
  const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'
  const [productList, setProductList] = useState([])
  const [selectedProduct, setSelectedProduct] =useState({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState ('')

  /* Se obtienen los productos de la API */
  useEffect(() => {
    
    axios
      .get(`${BASE_URL}item`)
      .then(({ data }) => {
        setLoading(false)
        setProductList(data)
        // console.log(productList)
      })
      .catch((error) => console.log(error))
  }, [])

  /* Los valores que contiene el contexto */
  const value = {
    productList,
    setLoading,
    loading,
    selectedProduct, setSelectedProduct,
    search,
    setSearch
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}