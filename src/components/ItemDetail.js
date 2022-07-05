import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import style from './ItemDetail.module.css'
import { CartContext } from '../context/CartContext'



function ItemDetail({ detalle, image, price, stock, id, descripcion }) {

    const [qty, setQty] = useState(1)

    const [mostrar, setMostrar] = useState()
    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = () => {
        //console.log(qty)
        alert(` Agregado al carrito ${qty}`)
        isInCart(detalle,id)
        addItem(detalle, qty)
        setMostrar()//mostrar carrito link
    }

    return (

        <div className={style.coupon}>
            <div className={style.container}>

            </div>
            <img src={image} alt={id} className={style.detalle} />
            <div className={style.container} >
                <h2><b>$ {price}</b></h2>
                <p>{descripcion}</p>
            </div>
            <ItemCount  qty={qty} setQty={setQty} stock={stock} onAdd={onAdd} />
            <button className={style.button6}>Checkout</button>
        </div>
    )
}

export default ItemDetail