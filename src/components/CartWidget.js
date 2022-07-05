import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'




const CartWidget = () => {

  const {getItemQty}=useContext(CartContext)
  

  /*setTimeout(() => {
    resultado.setCarrito(["1", "2", "3"])

  },500)*/

  return (
    <div>
      <div badgeContent={(getItemQty)} class="material-symbols-outlined ">
        <i class="material-icons">shopping_cart</i>
        <NavLink  to="/Carrito">CARRITO </NavLink>

        </div>
    </div>

  )
}

export default CartWidget