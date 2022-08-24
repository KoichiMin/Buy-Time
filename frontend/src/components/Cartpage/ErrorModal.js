import { useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import { Dialog } from "@mui/material";

const ErrorModal = ({change,setChange}) => {

    const {
        state:{DisplayErrorModal,ErrorModalData},
        actions:{closeErrorModal},
    } = useContext(GlobalStates);

    //creates error strings
    //if database has error string, it will print out
    let errorString = "";
    if(ErrorModalData !== null) {
        ErrorModalData.map((name) => {
            errorString += (name+", ");
        })
    }

    return(
        <Dialog
        open = {DisplayErrorModal}
        onClose = {() => closeErrorModal()}
        >
            <Wrapper>
                <StyledTitle>It seems an error has occured</StyledTitle>
                <Styledp1>The Following Items Are Out Of Stock: </Styledp1>
                <Styledp>{errorString}</Styledp>
                <Container>
                    <CloseButton onClick={(e) => {
                        e.preventDefault();
                        closeErrorModal();
                        if(change){
                            setChange(false);
                        } else{
                            setChange(true)
                        }
                    }}  
                    >
                        Close
                    </CloseButton>
                </Container>
            </Wrapper>
        </Dialog>
    )
}

const Wrapper = styled.div`
    width:30vw;
    height: 30vh;
    background-color: #fccb00;
`

const StyledTitle = styled.h1`
    color:red;
    margin-top:2vh;
    margin-bottom: 2vh;
    font-size: 2vw;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Styledp = styled.p`
    color:red;
    margin-left: 2vw;
    max-width: 26.5vw;
`

const Styledp1 = styled.p`
    color:red;
    font-weight: bold;
    font-size: large;
    margin-left: 2vw;
    max-width: 26.5vw;
    margin-bottom: 1vh;
`

const CloseButton = styled.button`
    background-color: #0d47a1;
    border-width: 0;
    border-radius: 2vw;
    margin-top:2vh;
    padding:1vh 2vw;
    color:white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`

export default ErrorModal;