import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import "./App.css";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import MyProvider from './context/CartContext';


const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <MyProvider>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          </MyProvider>
      </BrowserRouter>
    </div>
  )
}

export default App