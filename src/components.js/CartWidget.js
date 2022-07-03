import React from 'react'
import {NavLink} from 'react-router-dom'



const CartWidget = () => {
  
    return (
      <div className='cart-widget'>
        <CartWidget />
        
          <i class="material-icons">shopping_cart</i>
          <NavLink  to="/Carrito">CARRITO </NavLink>
  
          
      </div>
    )
}

export default CartWidget





  

  // const {Carrito, addItem, isInCart, deleteItem, emptyItem,getItemQty, getItemPrice} = useContext(CartContext);
  
  //console.log(resultado)

  /*setTimeout(() => {
    resultado.setCarrito(["1", "2", "3"])

  },200)*/

  //console.log(resultado)
  





