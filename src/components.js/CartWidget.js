import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from './CartContext'



const CartWidget = () => {

  const resultado = useContext(contexto)
  console.log(resultado)

  /*setTimeout(() => {
    resultado.setCarrito(["1", "2", "3"])

  },500)*/

  return (
    <div>
      <span class="material-symbols-outlined ">
        <i class="material-icons">shopping_cart</i>
        <NavLink  to="/Carrito">CARRITO </NavLink>

        </span>
    </div>

  )



}

export default CartWidget