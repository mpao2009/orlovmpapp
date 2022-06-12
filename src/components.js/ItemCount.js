import { useEffect, useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  console.log (contador)

  useEffect(()=>{
    
    //console.log("Pidiendo usuarios...")

  },[])

  const aumentarContador = () => {
    setContador(contador + 1)
    
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = () => {
    onAdd(contador ) 
   }

  return (
    <div>
      <p>CONTADOR : {contador}</p>
      <button onClick={aumentarContador}>AUMENTAR</button>
      <button onClick={bajarContador}>DISMINUIR</button>
      <button onClick={confirmarContador}>CONFIRMAR</button>
    </div>
  )
}
export default ItemCount