import { useEffect } from "react"
import { useState } from "react"
import CartItem from "./CartItem"
import styled from "styled-components"
import EmptyCartButton from "./EmptyCartButton"
import CheckOutButton from "./CheckOutButton"

const CartContainer = () =>{
        const [cartData, setCartData] = useState(null)
        const [load, setLoad] = useState(false)
        const [change, setChange] = useState(false)

        //getting all the items in cart
        useEffect(() =>{
            fetch("/api/get-cart-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1")
                .then((res) => res.json())
                .then((data) =>{
                    setCartData(data.data);
                    setLoad(true)
                })
                .catch((err) => console.log(err)); 
        }, [change])
    return(
        <MainWrapper>
        <Wrapper>
            <Header>
                <div>Name</div>
                <div>Category</div>
                <div>Count</div>
                <div>Price/item</div>
                <div>Total Price</div>
            </Header>
            {
                load && cartData &&
                    cartData.map((element) =>{
                        return(
                            <CartItem singleItem={element} change={change} setChange={setChange}/>
                        )
                    })
            }
        </Wrapper>
        <ButtonContainer>
            <EmptyCartButton handleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                //remove all cart items
                fetch("api/remove-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1", {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                .then((res) => res.json())
                .then((json) =>{
                if(change){
                    setChange(false);
                } else{
                    setChange(true)
                }
                })
                }}/>
                <CheckOutButton change={change} setChange={setChange}></CheckOutButton>
            </ButtonContainer>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    /* z-index: 10; */
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 20vw;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:70vw;
    margin-top: 2vh;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: solid 1px; */
    width:70vw;
    height: 65vh;
    margin-top: 8vh;
    /* overflow: scroll; */
    overflow-x: hidden;
    background-color: #112D4E;
    font-family: var(--font-family);
`

const Header = styled.div`
    display: grid;
    grid-template-columns: 37vw 7vw 7vw 7vw 7vw 7vw;
    margin-left: 0.8vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-weight: bold;
    color:white;
`

export default CartContainer;

