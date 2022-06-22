import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import style from "./NavBar.module.css"



function Navbar () {

  return (
    <div className={style.Navbar}>
<ul>

<li> <Link className={style.linkClass} to='/'>HOME </Link>  </li>
<li> <Link className={style.linkclass} to='category/1'>GAMES</Link></li>
<li><Link className={style.linkclass} to='category/2'>SHOP SYSTEMS</Link></li>
<li><Link className={style.linkclass} to='category/3'>ACCESORIES</Link></li>
<CartWidget/>

</ul>

 </div>
 
  )
}

export default Navbar
