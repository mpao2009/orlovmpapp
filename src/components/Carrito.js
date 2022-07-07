import {useReducer} from 'react'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'


const Carrito=()=> {
    const { carrito } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState({
         nombre: '',
         tel: '',
         email: '',
         usuario: '',
        })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleclick = (e) => {
        e.preventDefault()
    }
    const handleNombreChange = (e) => {
        setNombre(e.target.value)
    }
    const handleTelChange = (e) => {
        setTel(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })

    }



    return (
        <div>
            <h2>CARRITO</h2>
            
<form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="Email" placeholder="Email..." value={email} />
                </div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Nombre..." value={nombre} />
                </div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Telefono..." value={tel} />
                </div>
                <div>
                    <input onChange={handleChange} type="text" placeholder="Usuario..." value={usuario} />
                </div>
                <div>
                    <button onClick={handleclick}><Link to="/Checkout">CHECKOUT</Link> </button>
                </div>
            </form>
           
        </div>
        
    )

    

}

export default Carrito