import styled from "styled-components"

const AddToCart = ({object}) =>{
    const handleCart = (item) =>{
        fetch("/api/add-cart-item", {
            method: 'POST',
            headers:{
            'Content-type':'application/json',
            },
            body: JSON.stringify({cartId: "58bf7fa8-2892-46dd-a0dc-0f95188acea1" , item: item})
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log("it worked! Adding item to the cart")                    
        })                            
}
    return(
        <StyledButton onClick={() => handleCart(object)} >Add to Cart</StyledButton>
    )
}

export default AddToCart

const StyledButton = styled.button`
width: auto;
padding-left: 0.5vw;
padding-right: 0.5vw;
height: 3vh;
font-size: 15px;
border:none;
color: #F9F7F7;
border-radius: 5px;
font-weight: 2px;
background-color: #3F72AF;
&:hover {
    opacity: 0.7;
}

&:active {
    /* opacity: 0.8; */
    /* box-shadow: 0 5px #666; */
    transform: translateY(2px);
    }
`