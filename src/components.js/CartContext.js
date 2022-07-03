import { createContext, useState } from "react"
import React from 'react'




export const CartContext = createContext()

const MyProvider = ({ children }) => {

    const [Carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return Carrito.find(item => item.id === id)
    }

    const addItem = (id, item, quantity) => {
        const newItem = {
            id,
            item,
            quantity

        }
        if (isInCart(newItem.id)) {
            const findItem = Carrito.find(item => item.id === newItem.id)
            const productIndex = Carrito.indexOf(findItem)
            const auxArray = [...Carrito]
            auxArray[productIndex].quantity += newItem.quantity
            setCarrito(auxArray)

        } else {
            setCarrito([...Carrito, newItem])
        }
    }

    const emptyItem = (id) => {
        setCarrito([])

    }

    const deleteItem = (id) => {
        return Carrito.filter(item => item.id !== id)

    }
   
 const getItemPrice = (id) => {
        return Carrito.reduce((acc, item) => acc + (item.id === id ? item.quantity * item.price : 0), 0)
    }
    const getItemQty= (id) => {

        return Carrito.reduce((acc, x) => acc + x.quantity, 0 );
        
    }


    return (
        <MyProvider value={{Carrito ,addItem, isInCart, deleteItem, emptyItem,getItemQty, getItemPrice}}>
            {children}
        </MyProvider>
    )

}

export default MyProvider









