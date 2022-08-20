// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Homepage/Header';
import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import ItemDetails from "./Homepage/ItemDetails";

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/item-details/:itemId" element={<ItemDetails />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;

const Main = styled.div`
`;