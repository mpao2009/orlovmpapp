import CartWidget from "./CartWidget.js"

const NavBar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TIENDA NINTENDO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Productos</a>
        <a class="nav-link" href="#">Carrito</a>
        <a class="nav-link" href="#">Contacto</a>
        <span class="material-symbols-outlined">
add_shopping_cart
</span>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default NavBar