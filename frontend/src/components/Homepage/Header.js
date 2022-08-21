// import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {MdOutlineShoppingCart} from "react-icons/md";

import SearchBar from "./SearchBar";

const Header = () => {
    return(
        <Wrapper>
            <Link to="/">
                <p>BUY TIME</p>
            </Link>
            <Container>
                <SearchBar></SearchBar>
                <button>Search</button>
            </Container>
            <Link to="/cart">
                <MdOutlineShoppingCart>
                </MdOutlineShoppingCart>
            </Link>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

p {
    color: #3217d5;
    font-display: none;
}
`

const Container = styled.div`
display: flex;
flex-direction: row;
gap: 2vw;

button {
    font-size: 20px;
    width: 90px;
    height: 40px;
    background-color: #3217d5;
    color: #f6f5fd;
    border: none;
    border-radius: 6px;
}
`