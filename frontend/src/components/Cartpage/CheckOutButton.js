import { useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import CheckoutModal from "./CheckoutModal";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const CheckOutButton = () => {

    const { 
        actions:{openCheckoutModal, updateGrandTotal},
    } = useContext(GlobalStates);
    
    // useEffect(() => {
    // }, []);
    return(
        <>
        <CheckoutModal></CheckoutModal>
        <SuccessModal></SuccessModal>
        <ErrorModal></ErrorModal>
        <StyledButton onClick={(e) => {
            e.preventDefault();
            openCheckoutModal();
            fetch("/api/get-total/58bf7fa8-2892-46dd-a0dc-0f95188acea1")
            .then(res => res.json())
            .then((data) => {
                console.log(data)
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
    position:relative;
    top:5vh;
    left:19vw;
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