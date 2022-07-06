import React from 'react'
import { createContext, useState } from 'react'




//export const MiContexto = createContext({})

export const CartContext = createContext()

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([{}])
    const [total, setTotal] = useState(0)
    const [itemQty, setItemQty] = useState(0)



    const isInCart = (id) => {
        return carrito.find(item => item.id === id)
    }


    const addItem = (item, qty) => {

        const copia = [...carrito]
        const newItem = {
            ...item,
            qty: qty
        }

        copia.push(newItem)
        setCarrito(copia)
        setItemQty(itemQty + 1)
        setTotal(total + item.price * qty)





        /*const newItem = {
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
    
        }*/
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


    const valorCartContext =
    {

        carrito: carrito,
        setCarrito: setCarrito,
        isInCart: isInCart,
        addItem: addItem,
        emptyCart: emptyCart,
        deleteItem: deleteItem,
        getItemQty: getItemQty,
        getItemPrice: getItemPrice,
        total: total,
        setTotal: setTotal,
        itemQty: itemQty,
        setItemQty: setItemQty



    }

    return <Provider value={{ valorCartContext }}> {children} </Provider>


}
export default MyProvider

