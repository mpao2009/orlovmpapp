import React,{useState} from "react"


function ItemCount ({stock}){

  const[count,setCount]=useState(0)
  
  function adding(){
    if (count< stock){
      setCount(count+1)
    }
  }

  function subs (){
    if(count > 0){
      setCount(count-1)
    }
  }


  return(
    <div>
      <button onClick={subs}>-</button>
      <span>{count}</span>
<button onClick={adding}>+</button>
    </div>
  )
}


export default ItemCount;


/*const ItemCount = ({ stock, initial, onAdd }) => {

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
export default ItemCount*/