// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Homepage/Header';
import Homepage from "../pages/Homepage";

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/item-details" element={<p>Item details</p>}/>
          <Route path="/cart" element={<p>cart</p>}/>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;

const Main = styled.div`
`;