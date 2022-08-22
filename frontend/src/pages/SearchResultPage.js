import styled from "styled-components";
import { useContext } from "react";
import WatchDisplay from "../components/WatchDisplay";
import { GlobalStates } from "../GlobalStates";
import { useEffect } from "react";

const SearchResultPage = () => {

    const {
        actions:{updateSearchBarValue},
        state:{SearchResults}
    } = useContext(GlobalStates);

    useEffect(() => {
        updateSearchBarValue({data:""});
    }, []);

    const pages = SearchResults;
    
    if(pages !== undefined) {
        return(
            <WatchDisplay pages={pages}></WatchDisplay>
        )
    } else {
        return(
            <div>Loading</div>
        )
    }
    
}

export default SearchResultPage;