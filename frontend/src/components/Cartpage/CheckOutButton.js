import { useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import CheckoutModal from "./CheckoutModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const CheckOutButton = () => {

    const {
        actions:{openCheckoutModal},
    } = useContext(GlobalStates);

    return(
        <>
        <CheckoutModal></CheckoutModal>
        <SuccessModal></SuccessModal>
        <ErrorModal></ErrorModal>
        <StyledButton onClick={(e) => {
            e.preventDefault();
            openCheckoutModal();
        }}
        >
            Checkout
        </StyledButton>
        </>
        
    )

}

const StyledButton = styled.button`
    position:absolute;
    left:30vw;
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

export default CheckOutButton;