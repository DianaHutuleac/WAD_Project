import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import TeamPage from './Pages/TeamPage';
import Categories from './Pages/Categories';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductPage from './Pages/ProductPage';
import Test from './Pages/Test';
import Admin from './Pages/Admin'
import Orders from './Pages/Orders';
import AdminProducts from './Pages/AdminProducts';
import AddProducts from './Pages/AddProducts';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import AuthContext from "./context";
import AuthService from "./Services/AuthentificationService"

function App() {
    const [ auth , setAuth ] = React.useState( false);
    const [user, setUser ] = React.useState(null);

    React.useEffect(() => {
        AuthService(setUser, setAuth);
    },[]);
    React.useEffect(() => {
        AuthService(setUser, setAuth);
    },[auth]);

  return (
      <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
    <div className="App overflow-hidden">
      <BrowserRouter>
      <Routes>
      <Route path = "products" element={<Products />} />
      <Route path="test" element={ <Test />} />
      <Route path = "product/:id" element={<ProductPage />} />
      <Route path = "products/:id" element={<TeamPage />} />
      <Route path = "cart" element={<Cart />} />
      <Route path = "teams" element={<TeamPage />} />
      <Route path = "categories" element={<Categories />} />
      <Route path = "login" element={<Login />} />
      <Route path = "register" element={<Register />} />
      <Route path = "checkout" element={<Checkout />} />
      <Route path = "admin" element={<Admin/>} />
      <Route path ="admin/orders" element={<Orders />} />
      <Route path ="admin/products" element={<AdminProducts />} />
      <Route path ="admin/addproducts" element={<AddProducts />} />

      <Route path = "/" element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      </AuthContext.Provider>
  );
}

export default App;
