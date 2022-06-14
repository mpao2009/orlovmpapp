import { useEffect, useState } from "react"

import CustomFetch from "../utils/CustomFetch"
import productos from "../utils/productos"
import ItemList from "./ItemList"


function ItemListContainer(){
  const[items,setItems]= useState([])

  useEffect(()=>{
    CustomFetch(3000,productos)
    
    .then(r =>setItems(r))
  }, [items])
  //console.log(items)
  return(
    <div >
<ItemList products= {items}/>
    </div>
  )
}
export default ItemListContainer

