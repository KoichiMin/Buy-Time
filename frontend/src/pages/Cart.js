import styled from "styled-components";
import CheckOutButton from "../components/Cartpage/CheckOutButton";
import CartContainer from "../components/Cartpage/CartContainer";
// import EmptyCartButton from "../components/Cartpage/EmptyCartButton";

const Cart = () => {
    return(
        <>
        <CartContainer/>
        <CheckOutButton></CheckOutButton>
        {/* <EmptyCartButton></EmptyCartButton> */}
        </>
    );
};

export default Cart;