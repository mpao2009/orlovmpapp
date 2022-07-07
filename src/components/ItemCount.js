import React, { useState } from "react";
import style from "./ItemCount.module.css";
import { Link } from "react-router-dom";




function ItemCount({ stock, onAdd, initial }) {

  const [qty, setQty] = useState(initial)
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  function adding() {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  function subs() {
    if (qty > 0) {
      setQty(qty - 1)
    }
  }
  const addToCart = (e) => {
    onAdd(qty)

    return () => {
      setQty(initial)

      // console.log("Item Agregado Exitosamente")
    }

  }

  return (
    <div onClick={(e) => { console.log(e.currentTarget) }}>


      <button className={style.button3} onClick={subs}>-</button>
      <span className={style.number}> {qty}</span>
      <button className={style.button4} onClick={adding}>+</button>
{toggle ? <button className={toggle ? "success" : "danger"} onClick={addToCart}></button> :

          <Link to="/Carrito" variant="danger"><button className={toggle? "succes":"danger" } onClick={addToCart}>Agregar</button></Link>
      }
   </div>
   
   
    )   
 }

   export default ItemCount



