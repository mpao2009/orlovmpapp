import React, { useEffect, useState } from 'react'
import {customFetch, getProductsByCategory} from '../utils/CustomFetch'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import style from './ItemListContainer.module.css'

function ItemListContainer() {
    const [items, setItems] = useState([])

    const { categoryId } = useParams()
    //console.log( categoryId)

    useEffect(() => {
      if(!categoryId) {
        customFetch().then(response => {
          setItems(response)
          })
      } else {
          getProductsByCategory(categoryId).then(response => {
            setItems(response)
          })
      }
  }, [categoryId])

  return (
    <div className={style.container}>
      {items?.length <= 0 ? <h1>No hay items</h1> : <ItemList products={items} />}
       
    </div>
  )
}

export default ItemListContainer