import { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import { Dialog } from "@mui/material";

const CheckoutModal = () => {

    const {
        state:{DisplayCheckoutModal,grandTotal},
        actions:{openSuccessModal,closeCheckoutModal,openErrorModal,updateGrandTotal},
    } = useContext(GlobalStates);

    useEffect(() => {
        fetch("/api/get-total/58bf7fa8-2892-46dd-a0dc-0f95188acea1")
        .then(res => res.json())
        .then((data) => {
            updateGrandTotal({data:data.totalCost});
        })
    }, []);

    return(
        <Dialog
        open = {DisplayCheckoutModal}
        onClose = {() => closeCheckoutModal()}
        >
            <Wrapper>
                <StyledTitle>Payment</StyledTitle>
                <Container>
                    <InputContainer>
                        <h1>{`Total Amout: $${grandTotal}`}</h1>
                    </InputContainer>
                    <InputContainer>
                        <StyledLabel>Card Holder Name</StyledLabel>
                        <StyledInput defaultValue={"Card Holder Name"}></StyledInput>
                    </InputContainer>
                    <InputContainer>
                        <StyledLabel>Card Number</StyledLabel>
                        <StyledInput defaultValue={"Card Number"}></StyledInput>
                    </InputContainer>
                    <InputContainer2>
                        <InputContainer>
                            <StyledLabel>Expiry Date</StyledLabel>
                            <StyledInput1 defaultValue={"Expiry Date"}></StyledInput1>
                        </InputContainer>
                        <InputContainer>
                            <StyledLabel>CVV Code</StyledLabel>
                            <StyledInput1 defaultValue={"CVV"}></StyledInput1>
                        </InputContainer>
                    </InputContainer2>
                    <ButtonContainer>
                        <StyledCheckoutButton onClick={(e) => {
                            e.preventDefault();
                            fetch("/api/checkout", {
                                method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                cartId: "58bf7fa8-2892-46dd-a0dc-0f95188acea1"
                            })
                            })
                            .then(res => res.json())
                            .then((data) => {
                                if(data.warnings.failedUpdates.length > 0) {
                                    openErrorModal({data:data.warnings.failedUpdates});
                                } else {
                                    openSuccessModal();
                                }
                            })
                        }}
                        >
                            Checkout
                        </StyledCheckoutButton>
                        <StyledCancelButton onClick={(e) => {
                            e.preventDefault();
                            closeCheckoutModal();
                        }}
                        >
                            Cancel
                        </StyledCancelButton>
                    </ButtonContainer>
                </Container>
            </Wrapper>
        </Dialog>
    )
}

const Wrapper = styled.div`
    width:30vw;
    height: 50vh;
`

const StyledTitle = styled.h1`
    color:#0d47a1;
    margin-top:2vh;
    margin-bottom: 2vh;
    font-size: 2vw;
`
const Container = styled.form`
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2vw;
    margin-bottom: 2vh;
`

const InputContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 1vh;
`

const StyledLabel = styled.label`
    font-size: large;
    margin-bottom: 1vh;
`

const StyledInput = styled.input`
    color:grey;
    border:solid 1px;
    padding-top:0.2vh;
    padding-bottom:0.2vh;
    width: 25.3vw;
`

const StyledInput1 = styled.input`
    color:gray;
    width: 11.5vw;
    border:solid 1px;
    padding-top:0.2vh;
    padding-bottom:0.2vh;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledCheckoutButton = styled.button`
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

const StyledCancelButton = styled.button`
    background-color: #d32f2f;
    border-width: 0;
    border-radius: 2vw;
    margin-right: 2vw;
    padding:1vh 2vw;
    color:white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`

export default CheckoutModal;