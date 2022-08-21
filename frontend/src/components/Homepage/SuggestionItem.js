import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalStates } from "../../GlobalStates";
import { useEffect, useState, useContext } from "react";

const SuggestionItem = ({watchName,userInput,id}) => {

    const {
        actions:{updateSearchBarValue},
    } = useContext(GlobalStates);

    let startIndex = watchName.toLowerCase().indexOf(userInput.toLowerCase());
    let endIndex = watchName.toLowerCase().indexOf(userInput.toLowerCase()) + userInput.length;
    let noBold1 = "";
    let bold = "";
    let noBold2 = "";

    for(let i = 0; i < startIndex; i++) {
        noBold1 += watchName[i];
    }

    for(let i = startIndex; i < endIndex; i++) {
        bold += watchName[i];
    }

    for(let i = endIndex; i < watchName.length; i++) {
        noBold2 += watchName[i];
    }

    if(!noBold1.includes("undefined") && !bold.includes("undefined") && !noBold2.includes("undefined")) {
        return(
            <StyledLink onClick={() => updateSearchBarValue({data:""})} to={`/item-details/${id}`}>
                <NoBold>{noBold1}</NoBold>
                <Bold>{bold}</Bold>
                <NoBold>{noBold2}</NoBold>
            </StyledLink>
        )
    } else {
        return(
            <div></div>
        )
    }
    
}

const StyledLink = styled(Link)`
    background-color: rgb(187,222,251,0.5);
    text-decoration: none;
    color:#0d47a1;
    padding-top:2vh;
    padding-left:1.2vh;
    padding-right:1.2vh;
    padding-bottom:2vh;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    border-bottom: 0px;
    &:hover{
        cursor: pointer;
        background-color:rgb(100,181,246,0.5);
    }
`

const NoBold = styled.span`
    font-weight: none;
`

const Bold = styled.span`
    font-weight: bold;
`

export default SuggestionItem;