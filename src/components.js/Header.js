import CartWidget from "./CartWidget";
import Navbar from "./Navbar";




const Header = () => {
  return (
    <header className="main-header">
      <h2>Tienda</h2>
      <Navbar 
      inHeader={true}
      
      laClase="navbar-header"
      />
    <CartWidget/>
      </header>  )
}

export default Header