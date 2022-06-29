import { createContext , useState} from "react"




export const contexto = createContext()

const Provider = contexto.Provider



export const MiProvider = ({children}) => {
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)


   const agregar = (item) => {
        setCantidadTotal(cantidadTotal.concat(item))
        setCarrito(carrito.concat(item))
        setCantidad(cantidad + 1)
        setTotal(total + item.price)
    }

    const eliminar = (item) => {
        setCantidadTotal(cantidadTotal.filter(i => i.id !== item.id))
        setCarrito(carrito.filter(i => i.id !== item.id))
        setCantidad(cantidad - 1)
        setTotal(total - item.price)
    }

    const limpiar = () => {
        setCantidadTotal([])
        setCarrito([])
        setCantidad(0)
        setTotal(0)
    }

    const valorDelContexto = {
        cantidadTotal,
        setCantidadTotal,
        carrito,
        setCarrito,
        total,
        setTotal,
        cantidad,
        setCantidad,
        agregar,
        eliminar,
        limpiar
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


   /* const valorDelContexto={
     carrito:[],   
     cantidadTotal:0,
     precioTotal:0,
    }*/
   // valorDelContexto.cantidadTotal=1

   

