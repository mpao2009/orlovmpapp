import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

function Carrito() {
    const { carrito } = useContext(CartContext)


    return () => {


        return (
            <div>
                <div>
                    <h1>Carrito</h1>
                </div>
                <div>
                    {carrito.map(item => (
                        <div>
                            <p>{item.nombre}</p>
                            <p>{item.precio}</p>
                            <p>{item.qty}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        )

    }
}

export default Carrito