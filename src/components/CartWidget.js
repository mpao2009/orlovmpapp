import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'



  
const CartWidget = () => {

  const resultado = useContext(CartContext)
  console.log(resultado)

  /*setTimeout(() => {
    resultado.setCarrito(["1", "2", "3"])
  },500)*/

  return (
    <div>

      <span className="material-symbols-outlined ">
      <i className="material-icons">shopping_cart</i> 
        <Link  to="/Carrito"></Link>
</span>
        
    </div>
  )

  }

export default CartWidget