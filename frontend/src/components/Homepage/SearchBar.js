import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import SuggestionItem from "./SuggestionItem";
import { GlobalStates } from "../../GlobalStates";

const SearchBar = () => {

    const {
        state:{SearchBarInput,WatchDataGlobal},
        actions:{updateSearchBarValue,updateWatchDataGlobal},
    } = useContext(GlobalStates);

    useEffect(() => {
        fetch(`/api/getWatchesNames`)
        .then(res => res.json())
        .then((data) => {
            updateWatchDataGlobal({ data: {
                watchDataHasLoaded:false,
                watchNamesHaveLoaded:true,
                watchIds:data.ids,
                watchNames:data.names,
            }})
        })
        .catch((err) => console.log(err));
    }, []);

    let filteredNames = [];
    let filteredIds = [];

    if(WatchDataGlobal.watchNames !== undefined) {
        WatchDataGlobal.watchNames.forEach((name,index) => {
            if(name.toLowerCase().replace(/\s+/g, "").match(SearchBarInput.replace(/\s+/g, "").toLowerCase())) {
                filteredNames.push(name);
                filteredIds.push(WatchDataGlobal.watchIds[index]);
            } 
        })    
    }

    if(!WatchDataGlobal.watchNamesHaveLoaded) {
        return(
            <Wrapper>
            <input disabled id={"smartSearchDisabled"}
            type="text"
            defaultValue={"What are you looking for?"}
            />
            </Wrapper>
        )
    } else {
        return(
            <Wrapper>
            {WatchDataGlobal.watchNamesHaveLoaded && (
                <input id={"smartSearch"}
                type="text"
                defaultValue={"What are you looking for?"}
                onChange = {(e) => {
                    updateSearchBarValue({data:e.target.value});
                }}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("smartSearch").value = SearchBarInput;
                }}
                />
            )}
            {(SearchBarInput !== "" && WatchDataGlobal.watchNamesHaveLoaded) &&  (
                <StyledContainer>
                {
                    filteredNames.map((name,index) => {
                        if(name !== undefined && SearchBarInput !== undefined) {
                            return(
                                <SuggestionItem watchName={name} userInput={SearchBarInput} id={filteredIds[index]}></SuggestionItem>
                            )
                        }
                    })
                }
                </StyledContainer>
            )}
            </Wrapper>
        );
    }

};

const Wrapper = styled.div`
    input {
        width: 30vw;
        height: 5vh;
        border-radius: 5px;
        border: solid #cdcdcd 3px;
        padding: 10px;
        font-size: 20px;
        margin:1vw;
    }
`

const StyledContainer = styled.div`
    position:absolute;
    left: 31.5vw;
    display:flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    max-height: 25.1vh;
    width: 32vw;
`

export default SearchBar;



