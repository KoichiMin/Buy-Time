import styled from "styled-components";
import { useEffect, useContext } from "react";
import SuggestionItem from "./SuggestionItem";
import { GlobalStates } from "../../GlobalStates";
import { useNavigate } from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const SearchBar = () => {

    let navigate = useNavigate();

    const {
        state:{SearchBarInput,WatchDataGlobal},
        actions:{updateSearchBarValue,updateWatchDataGlobal,updateSearchResults},
    } = useContext(GlobalStates);

    useEffect(() => {
        //getting ids and categories and names
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
        .catch((err) => {
            console.log(err);
        });
    }, []);

    let filteredNames = [];
    let filteredIds = [];

    //matching what you type to the database and pushing valid results into filtered names and filtered ids
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
            <StyledSearchIcon></StyledSearchIcon>
            </Wrapper>
        )
    } else {
        return(
            <Wrapper>
            {WatchDataGlobal.watchDataHasLoaded && (
                <input id={"smartSearch"}
                type="text"
                placeholder={"What are you looking for?"}
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
            <StyledSearchIcon></StyledSearchIcon>
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
        -webkit-box-shadow: 1px 1px 2px 0px #A4A4A4; 
        box-shadow: 1px 1px 2px 0px #A4A4A4;
        width: 30vw;
        height: 2.5vh;
        border-width: 0;
        padding: 10px;
        font-size: 20px;
        color:grey;

        &:focus{
            outline: none;
        }
    }
    z-index: 1;
`

const StyledContainer = styled.div`
    z-index: 3;
    position:absolute;
    margin-top: 1vh;
    border-color: white;
    left: 35.9vw;
    display:flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    max-height: 25.1vh;
    width: 31.5vw;
`

const StyledSearchIcon = styled(BsSearch)`
    padding:0.7vw;
    position: relative;
    left: -2.5vw;
    top:1.6vh;
`

export default SearchBar;



