import React from "react"
import ItemCount from "./ItemCount"
import style from "./item.module.css"



function Item ({id,name,image,stock}){
    return(
        <div className={style.container}>
        <h1>{name}</h1>
        <img className={style.itemImage} src={image} alt={name} />
        <ItemCount stock={stock}/>
        </div>
    )
}
export default Item;