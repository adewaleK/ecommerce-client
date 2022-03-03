import './App.css';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route> 
      </Routes>
      <Routes>
        <Route path='/productlist' element={<ProductList />}></Route> 
      </Routes>
      <Routes>
        <Route path='/product' element={<Product />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
