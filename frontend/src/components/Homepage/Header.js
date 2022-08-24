// import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {MdOutlineShoppingCart} from "react-icons/md";
import SearchBar from "./SearchBar";

const Header = () => {
    return(
        <Wrapper>
            <Link to="/" className="link">
                <p>BUY TIME</p>
            </Link>
            <Container>
                <SearchBar />
            </Container>
            <Link to="/cart">
                <MdOutlineShoppingCart className="cart"/>
            </Link>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

.link{
    text-decoration: none;
    color: #3F72AF;
    font-size: 30px;
    font-weight: bolder;

    &:active{
        transform: translateY(0.5px);
    }
}



.cart{
    height: 40px;
    width: 40px;
    color: #3F72AF;

    &:active{
        transform: translateY(0.5px);
    }
}
`

const Container = styled.div`
/* display: flex;
flex-direction: row;
gap: 2vw; */

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