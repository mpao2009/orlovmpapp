
import React, { useContext} from 'react';
import {CartContext} from "./CartContext";

function Carrito (){
    const {Carrito, getItemQty} = useContext(CartContext);
    return(
        <div>
            <h1>Carrito</h1>
            <ul>
                {Carrito.map(item => (
                    <li key={item.id}>
                        {item.item}
                        <span>{item.quatity}</span>
                    </li>
                ))}
            </ul>
            <h2>Total: {getItemQty()}</h2>
        </div>
    )

    

    
}

export default Carrito;