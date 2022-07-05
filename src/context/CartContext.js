import React from 'react'
import { createContext, useState } from 'react'




//export const MiContexto = createContext({})

export const CartContext = createContext()

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [carrito, setCarrito] = useState()


    const isInCart = (id) => {
        return carrito.find(item => item.id === id)
    }


     const addItem = (item, qty) => {
    const newItem = {
        ...item,
        qty: qty
    }
    if (isInCart(newItem.id)) {
        const findProduct = carrito.find(x => x.id === newItem.id)
        const ProductIndex = carrito.indexOf(findProduct)
        const auxArray = [...carrito]
        auxArray[ProductIndex].qty += qty
        setCarrito(auxArray)
    } else {
        setCarrito([...carrito], newItem)
    }
  }


     const emptyCart = () => {
    setCarrito([])
   }

   const deleteItem = (id) => {
    return carrito.flter(x => x.id !== id)
   }

    const getItemQty = () => {
    return carrito.reduce((acc, x) => acc += x.qty, 0)
       }

   const getItemPrice = () => {

    return carrito.reduce((acc, x) => acc += x.qty * x.price, 0)
     }


      return <Provider value={{ carrito, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}> {children} </Provider>


}
export default MyProvider

