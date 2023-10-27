import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import TeamPage from './Pages/TeamPage';
import Categories from './Pages/Categories';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
      <Routes>
      <Route path = "products" element={<Products />} />
      <Route path = "product/:id" element={<ProductPage />} />
      <Route path = "products/:id" element={<TeamPage />} />
      <Route path = "teams" element={<TeamPage />} />
      <Route path = "categories" element={<Categories />} />
      <Route path = "login" element={<Login />} />
      <Route path = "register" element={<Register />} />
      <Route path = "/" element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
