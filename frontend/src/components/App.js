// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Homepage/Header";
import Sidebar from "./Homepage/Sidebar";
import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import ItemDetails from "./Homepage/ItemDetails";
import SearchResultPage from "../pages/SearchResultPage";

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/item-details/:itemId" element={<ItemDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/searchResults" element={<SearchResultPage />}/>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;

const Main = styled.div`
`;