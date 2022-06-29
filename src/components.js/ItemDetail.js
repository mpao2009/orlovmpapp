import React from 'react'
import ItemCount from './ItemCount'
import style from './ItemDetail.module.css'



function ItemDetail({name, id, descripcion, stock, price, image}) {
 const onAdd = (cantidadSeleccionada) => {
    console.log(cantidadSeleccionada 
        + " agregado al carrito" + name)
 }

 
return (

    <div className={style.coupon}>
    <div className={style.container}>
        <h3>{name}</h3>
    </div>
    <img src={image} alt={id} className={style.imageDetail} />
    <div className={style.container} >
        <h2><b>$ {price}</b></h2> 
        <p>{descripcion}</p>
    </div>
    <ItemCount initial={0} stock={stock} onAdd={onAdd}  />
<button className={style.button6}>Checkout</button>
    </div>
  )
}

export default ItemDetail