import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components.js/Navbar';
import Header from './components.js/Header';
import "./App.css";
import ItemListContainer from './components.js/ItemListContainer';
import ItemDetailContainer from './components.js/ItemDetailContainer';
import Carrito from './components.js/Carrito';
import Checkout from './components.js/Checkout';
import { MiProvider } from './components.js/CartContext';


const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <MiProvider>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          </MiProvider>
      </BrowserRouter>
    </div>
  )
}

export default App