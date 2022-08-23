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
        <EmptyCartButton handleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            
            fetch("api/remove-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1", {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((res) => res.json())
            .then((json) =>{
            console.log(json)
            if(change){
                setChange(false);
            } else{
                setChange(true)
            }
            })
            }}/>
            <CheckOutButton change={change} setChange={setChange}></CheckOutButton>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    z-index: 10;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid 1px;
    width:56vw;
    height: 65vh;
    position:relative;
    left: 22vw;
    top:3vh;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #003660;
    font-family: var(--font-family);
`

const Header = styled.div`
    display: grid;
    grid-template-columns: 27vw 6vw 5vw 7vw 6vw 5vw;
    margin-left: 0.4vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-weight: bold;
    color:white;
`

export default CartContainer;

