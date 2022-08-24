import styled from "styled-components";
import { useContext } from "react";
import WatchDisplay from "../components/WatchDisplay";
import { GlobalStates } from "../GlobalStates";
import { useEffect } from "react";
import {CircularProgress} from "@mui/material"

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
            <Container>
            <WatchDisplay pages={pages}></WatchDisplay>
            </Container>
        )
    } else {
        return(
            <ContainerCircularProgress>
            <CircularProgress />
            </ContainerCircularProgress>
        )
    }
    
}

const Container = styled.div`
    margin-left: 20vw;
`
const ContainerCircularProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
`
export default SearchResultPage;