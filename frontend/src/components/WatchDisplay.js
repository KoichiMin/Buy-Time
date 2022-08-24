import styled from "styled-components"
import { useState, useContext } from "react";
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";
import ItemCard from "./Homepage/ItemCard";
import { useEffect } from "react";
import {GlobalStates} from "../GlobalStates";

const WatchDisplay = (pages) => {

    const [pageNumber, setPageNumber] = useState(1);
    const {state: {category}} = useContext(GlobalStates);

    const watches = [];
    let maxPages = 0; 

    //setting the page number back to 1 when switching categories 
    useEffect(() => {
        setPageNumber(1)
    }, [category])

    //pages.pages is deconstructing the data in the database
    if(pages.pages !== undefined) {
        pages.pages.forEach((pageObj) => {
            if(pageObj.pageNumber === pageNumber) {
                pageObj.watchesInPage.forEach((watch) => {
                    watches.push(watch);
                }) 
            }
            maxPages++; //do not want user to go beyond number of pages available
        })
    }


    return(
        <Wrapper>
            <Navigator>
                <LButton style={{color: "#3F72AF"}} onClick={(e) => {
                    e.preventDefault();
                    if(pageNumber > 1) {
                        setPageNumber(pageNumber - 1);
                    }
                }}
                >
                    <StyledLeftIcon></StyledLeftIcon>
                </LButton>
                <PageNumber style={{color: "#112D4E"}}>{pageNumber}</PageNumber>
                <RButton style={{color: "#3F72AF"}}  onClick={(e) => {
                    e.preventDefault();
                    if(pageNumber < maxPages) {
                        setPageNumber(pageNumber + 1);
                    }
                }}
                >
                    <StyledRightIcon></StyledRightIcon>
                </RButton>
            </Navigator>
            <WatchGrid>
                {
                    watches.map((watch) => {
                        return(
                            <ItemCard object={watch}></ItemCard>
                        )
                    })
                }
            </WatchGrid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:60vw;
    height: 80vh;
`

const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1vh;
`

const LButton = styled.button`
    margin-right:0.2vw;
    border-width: 0;
    background-color: transparent;
    &:hover{
        background-color:rgb(187,222,251,0.5);
        cursor: pointer;
    }
`

const RButton = styled.button`
    margin-left:0.2vw;
    margin-right: 0.5vw;
    border-width: 0;
    background-color: transparent;
    &:hover{
        background-color:rgb(187,222,251,0.5);
        cursor: pointer;
    }
`

const StyledLeftIcon = styled(AiFillCaretLeft)`
    width: 2vw;
    height: 2.5vh;
`

const StyledRightIcon = styled(AiFillCaretRight)`
    width: 2vw;
    height: 2.5vh;
`

const PageNumber = styled.h3`
    margin-left: 2vh;
    margin-right: 2vh;
`

const WatchGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    grid-gap: 3vh;
    padding:1vw;
    background-color: white;
`
export default WatchDisplay;