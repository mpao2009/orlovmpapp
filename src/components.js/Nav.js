

const Nav = ({ inHeader, cosasParaMostrar, laClase }) => {

  return (
    <nav className={laClase}>
      <a href="#">{inHeader ? "HOME" : "Facebook"}</a>
      <a href="#">{inHeader ? "TIENDA" : "Instagram"}</a>
      <a href="#">{inHeader ? "CONTACTO" : "Linkedin"}</a>
      
    </nav>
  )
}

export default Nav
