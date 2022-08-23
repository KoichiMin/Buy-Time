import styled from "styled-components";
import { useEffect, useContext } from "react";
import SuggestionItem from "./SuggestionItem";
import { GlobalStates } from "../../GlobalStates";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    let navigate = useNavigate();

    const {
        state:{SearchBarInput,WatchDataGlobal},
        actions:{updateSearchBarValue,updateWatchDataGlobal,updateSearchResults},
    } = useContext(GlobalStates);

    useEffect(() => {
        fetch(`/api/getWatchesNames`)
        .then(res => res.json())
        .then((data) => {
            updateWatchDataGlobal({ data: {
                watchDataHasLoaded:true,
                watchIds:data.ids,
                watchNames:data.names,
                categories:data.categories,
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

    if(!WatchDataGlobal.watchDataHasLoaded) {
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
            {WatchDataGlobal.watchDataHasLoaded && (
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
                onKeyDown= {(e) => {
                    if(e.code === "Enter") {
                        fetch(`/api/getWatchesByName/6/${SearchBarInput}`)
                        .then(res => res.json())
                        .then(data => {
                            updateSearchResults({data:data.pages});
                            navigate("/searchResults");
                        })
                    }
                }}
                />
            )}
            {(SearchBarInput !== "" && WatchDataGlobal.watchDataHasLoaded) &&  (
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



