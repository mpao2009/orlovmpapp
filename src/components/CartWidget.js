import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import{useState} from 'react'




const CartWidget = () => {

  const resultado = useContext(CartContext)
  console.log(resultado)
  
  

  
  //console.log(resultado)

  return (
    
    <NavLink to="/Carrito">CARRITO{resultado.itemQty}</NavLink>


  )




}

  
  export default CartWidget 

  
  
  

  