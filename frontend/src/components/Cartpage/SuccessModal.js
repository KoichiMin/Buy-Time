import { useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import { Dialog } from "@mui/material";
const SuccessModal = ({change,setChange}) => {

    const {
        state:{DisplaySuccessModal},
        actions:{closeSuccessModal,closeCheckoutModal},
    } = useContext(GlobalStates);

    return(
        <Dialog
        open = {DisplaySuccessModal}
        onClose = {() => closeSuccessModal()}
        >
            <Wrapper>
                <StyledTitle>Success</StyledTitle>
                <Container>
                    <CloseButton onClick={(e) => {
                        e.preventDefault();
                        closeSuccessModal();
                        closeCheckoutModal();
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
    width:15vw;
    height: 20vh;
    background-color: #008b02;
`

const StyledTitle = styled.h1`
    color:white;
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

export default SuccessModal;