import styled from "styled-components";
import { GlobalStyleComponent } from "styled-components";
import { useEffect, useState } from "react";


const EmptyCartButton = ({ handleClick }) => {

    return(
        <>
        <StyledButton onClick={handleClick}>Empty Cart</StyledButton>
        </>
    )
}

const StyledButton = styled.button`
    position:absolute;
    left:50vw;
    background-color: #fcb900;
    border-width: 0;
    border-radius: 2vw;
    margin-left: 2vw;
    padding:1vh 2vw;
    color:white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`
export default EmptyCartButton;