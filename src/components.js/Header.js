
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
      <h2>Tienda Online</h2>
      </Link>
      <Navbar
      inHeader={true} 
      laClase="navbar-header"
      />
      </header>
  )
}

export default Header;