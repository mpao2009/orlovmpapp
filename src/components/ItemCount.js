import React, {useState}from "react";
import style from "./ItemCount.module.css";




function ItemCount({ stock, onAdd , initial}) {

  const [qty, setQty] = useState(initial)


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
      
      console.log("Item Agregado Exitosamente")
    }

  }

  return (
    <div onClick={(e)=>{console.log(e.currentTarget)}}>
      
      
      <button className={style.button3} onClick={subs}>-</button>
      <span className={style.number}> {qty}</span>
      <button className={style.button4} onClick={adding}>+</button>
      <button className={style.button5} onClick={addToCart}>Agregar al carrito</button> 
      
    </div>
  );
};


export default ItemCount;


