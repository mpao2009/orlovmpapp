import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import style from './ItemDetail.module.css'
import { CartContext } from '../context/CartContext'
import swal from 'sweetalert'



function ItemDetail({  image, price, stock, id, descripcion }) {

    const [qty, setQty] = useState(1)

    const [setMostrar] = useState()
    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = (getItemQty) => {
        alert(` Agregado al carrito ${getItemQty}`)
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "OK"
        });
        
        
    }

    return (

        <div className={style.coupon}>
            <div className={style.container}>

            </div>
            <img src={image} alt={id} className={style.name} />
            <div className={style.container} >
                <h2><b>$ {price}</b></h2>
                <p>{descripcion}</p>
            </div>
            <ItemCount initial={1} qty={qty} setQty={setQty} stock={stock} onAdd={onAdd} />
            <button className={style.button6}>Checkout</button>
        </div>
    )
}

export default ItemDetail