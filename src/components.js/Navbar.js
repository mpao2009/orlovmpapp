import React from 'react'
import {Link} from 'react-router-dom'
import style from "./NavBar.module.css"



function Navbar () {

  return (
    <div className={style.Navbar}>
<ul>
<li> <Link className={style.linkClass} to='/'>Home </Link>  </li>
<li> <Link className={style.linkclass} to='category/1'>Tienda</Link></li>
<li><Link className={style.linkclass} to='category/2'>Carrito</Link></li>
<li><Link className={style.linkclass} to='category/3'>Contacto</Link></li>

</ul>

 </div>
  )
}

export default Navbar
