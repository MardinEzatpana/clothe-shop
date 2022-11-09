import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SignIn from "./pages/log/signIn/SignIn";
import SignUp from "./pages/log/register/signUp/SignUp";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/shop/categoryPage/CategoryPage";
import Category from "./components/category/Category";

function App() {
  return <>
  <Header />
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="shop" element={<Shop />}/>
   <Route path="collection" element={<CategoryPage />}>
    <Route path=":collectionId" element={<Category />}/>
    </Route>
   <Route path="signIn" element={<SignIn />}/>
   <Route path="register" element={<SignUp />}/>
   <Route path="cart" element={<Cart />}/>
  </Routes>
  </>;
}

export default App;
