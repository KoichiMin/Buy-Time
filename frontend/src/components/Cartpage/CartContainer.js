import { useEffect } from "react"
import { useState } from "react"
import CartItem from "./CartItem"
import styled from "styled-components"
const CartContainer = () =>{
        const [cartData, setCartData] = useState(null)
        const [load, setLoad] = useState(false)
        const [change, setChange] = useState(false)
        useEffect(() =>{
            fetch("/api/get-cart-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1")
                .then((res) => res.json())
                .then((data) =>{
                    console.log(data);
                    setCartData(data.data);
                    setLoad(true)
                })
                .catch((err) => console.log(err)); 
        }, [change])
    return(
        <Wrapper>
            {
        load && cartData &&
                cartData.map((element) =>{
                    return(
                        <CartItem singleItem={element} change={change} setChange={setChange}/>
                    )
                })
            }

        </Wrapper>
    )
}

export default CartContainer

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`