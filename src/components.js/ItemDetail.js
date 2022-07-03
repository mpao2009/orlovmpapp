import React from 'react'
import ItemCount from './ItemCount'
import style from './ItemDetail.module.css'
import { useContext } from 'react'
import  CartContext  from './CartContext'



export function ItemDetail({ name, id, descripcion, stock, price, image,quantity}) {

    const {isInCart, addItem, getItemQty} = useContext(CartContext)
   
    const onAdd = (estado) => {
        /*console.log(cantidadSeleccionada 
            + " agregado al carrito" + name)*/
        alert(quantity + " agregado al carrito" + name)
        isInCart(id) ? addItem(id, name, quantity) : addItem(id, name, quantity)
        addItem(id, name, quantity,estado)
        console.log(getItemQty(id))
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
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            <button className={style.button6}>Checkout</button>
        </div>
    )
}

export default ItemDetail