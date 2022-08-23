import styled from "styled-components";
import CartContainer from "../components/Cartpage/CartContainer";

const Cart = () => {
    return(
        <Wrapper>
        <CartContainer/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #DBE2EF;
    height: 88vh;
`

export default Cart;