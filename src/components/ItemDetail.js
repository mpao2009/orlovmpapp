import React, {  useState } from 'react'
import style from './ItemDetail.module.css'
import swal from 'sweetalert'
import ItemCount from './ItemCount'



function ItemDetail({ image, price, stock, id, descripcion }) {

    const [qty, setQty] = useState(1)

    
    

    const onAdd = (getItemQty) => {
        alert(` Agregado al carrito ${getItemQty}`)
        swal({
            title: "Éxito",
            text: "Se han agregado los productos al carrito",
            icon: "success",
            button: "OK"
        });
        

        
        }
    const onClick = (e) => {
        console.log(e.currentTarget)

    }

    return (


        <div className={style.coupon}>
            <div className={style.container}>
                
                </div >
                <img src={image} alt={id} className={style.name} />
                <div className={style.container} >
                    <h2><b>$ {price}</b></h2>
                    <p>{descripcion}</p>

                    <ItemCount stock={stock} onAdd={onAdd} initial={qty}  />
                    
                 </div >
            </div >
        

              )
}              

  export default ItemDetail