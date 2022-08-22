import styled from "styled-components";
import { GlobalStyleComponent } from "styled-components";
import { useEffect, useState } from "react";

const EmptyCartButton = () => {

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        fetch("api/remove-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((json) => 
        console.log(json)
        )
    }

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