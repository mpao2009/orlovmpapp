import React, { useState } from "react";
import style from "./ItemCount.module.css";

function ItemCount({ stock, onAdd, initial }) {

  const [count, setCount] = useState(initial)


  function adding() {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  function subs() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const addToCart = (e) => {
    onAdd(count)

    return () => {
      //console.log("Item Agregado Exitosamente")
    }

  }

  
  return (
    <div onClick={(e)=>{console.log(e.currentTarget)}}>

      <button className={style.button3} onClick={subs}>-</button>
      <span className={style.number}>{count}</span>
      <button className={style.button4} onClick={adding}>+</button>
      {
        count > 0 ? <button className={style.button5} onClick={addToCart()}>Agregar al carrito</button> : <></>
      }
    </div>
  );
};


export default ItemCount;


