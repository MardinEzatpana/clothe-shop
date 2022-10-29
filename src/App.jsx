import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SginIn from "./pages/log/sginIn/SginIn";
import Shop from "./pages/shop/Shop";
import "./app.scss"

function App() {
  return <>
  <Header />
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/shop" element={<Shop />}/>
   <Route path="/sginIn" element={<SginIn />}/>
  </Routes>
  </>;
}

export default App;
