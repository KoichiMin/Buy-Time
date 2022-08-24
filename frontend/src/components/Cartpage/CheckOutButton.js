import { useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import CheckoutModal from "./CheckoutModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const CheckOutButton = ({change,setChange}) => {

    const { 
        actions:{openCheckoutModal, updateGrandTotal},
    } = useContext(GlobalStates);

    return(
        <>
        <CheckoutModal></CheckoutModal>
        <SuccessModal change={change} setChange={setChange}></SuccessModal>
        <ErrorModal change={change} setChange={setChange}></ErrorModal>
        <StyledButton onClick={(e) => {
            e.preventDefault();
            openCheckoutModal();
            //getting total for entire cart
            fetch("/api/get-total/58bf7fa8-2892-46dd-a0dc-0f95188acea1")
            .then(res => res.json())
            .then((data) => {
                updateGrandTotal({data:data.totalCost});
            })
            }}
        >
            Checkout
        </StyledButton>
        </>
        
    )

}

const StyledButton = styled.button`
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