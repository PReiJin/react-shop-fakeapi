import {ReactNode, createContext, useEffect, useReducer } from "react";

export interface Product {
  id: number
  title: string
  price: string
  category: string
  image: string
  description: string
  rating: {
    count: number
    rate: number
  }
}

export interface ProducContextType {
  listProduct: Product[]
  updateListProduct: any
}

export const ProductContext = createContext<ProducContextType>({listProduct: [], updateListProduct: null})
interface Props {
  children: ReactNode
}

export const fetchAllProduct = async () => {
  const res =await fetch('https://fakestoreapi.com/products')
  const data: Product[] = await res.json()
  return data
}

export const ACTIONTYPE = {
  GETALL: 'product_getall'
}
interface Action {
  type: string
  payload: any
}
const productListReducer = (state: Product[], action: any) => {
  switch(action.type) {
    case 'product_getall':
      return [...action.payload]
    default:
      return state
  }
}

export const ProducProvider = ({children}: Props) => {
  const [listProduct, updateListProduct] = useReducer(productListReducer, [])
  useEffect(() => {
    const getDataAllProducts = async() =>{
      const listProduct = await fetchAllProduct()
      const action = {type: ACTIONTYPE.GETALL, payload: listProduct}
      updateListProduct(action)
    }
    getDataAllProducts()
  },[])
  return (
    <ProductContext.Provider value={{listProduct, updateListProduct}} >
      {children}
    </ProductContext.Provider>
  )
}