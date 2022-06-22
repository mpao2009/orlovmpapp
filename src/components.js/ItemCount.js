import React,{useState} from "react"
import style from "./ItemCount.module.css"



function ItemCount ({stock}){

  const[count,setCount]=useState(0)
  
  function adding(){
    if (count< stock){
      setCount(count+1)
    }
  }

  function subs (){
    if(count > 0){
      setCount(count-1)
    }
  }

  


  return(
    <div>
      <button className={style.button3} onClick={subs}>-</button>
      <span className={style.number}>{count}</span>
      <button className={style.button4} onClick={adding}>+</button>
      
      {
        count > 0 ? <button className={style.button5}>Add to Cart</button> : <></>  //si el count es mayor a 0, se muestra el boton de comprar
      }
    </div>
  );
};


export default ItemCount;


// Compare this snippet from src/components.js/ItemDetail.js: