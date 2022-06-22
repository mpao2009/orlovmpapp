import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components.js/Navbar';

import "./App.css";
import ItemListContainer from './components.js/ItemListContainer';
import ItemDetailContainer from './components.js/ItemDetailContainer';






const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App