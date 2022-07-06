import {useReducer} from 'react'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'


function Carrito() {
    const { carrito } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState({
         nombre: '',
         tel: '',
         email: '',
         usuario: ''
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
        setUsuario({ usuario, [e.target.name]: e.target.value })

    }


    return (
        <div>
            <h2>carritoooo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis necessitatibus veritatis a dolorem aliquam cumque dicta suscipit doloribus, vel similique sint cupiditate eligendi assumenda possimus eius porro autem reprehenderit.</p>


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
                    <button onClick={handleclick}>Enviar</button>
                </div>
            </form>
            <Link to="/Checkout"> Proceder a la compra</Link>
        </div>
    )
}

export default Carrito