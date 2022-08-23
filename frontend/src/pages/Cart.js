import styled from "styled-components";
import CartContainer from "../components/Cartpage/CartContainer";
// import EmptyCartButton from "../components/Cartpage/EmptyCartButton";

const Cart = () => {
    return(
        <Wrapper>
        <CartContainer/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #FAFAFA;
`

export default Cart;