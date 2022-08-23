import styled from "styled-components";
import {FcPlus} from "react-icons/fc";

const CartItem = ({singleItem, setChange, change}) =>{

    const handleMinus = (itemId) =>{
        fetch(`/api/delete-cart-item/${"58bf7fa8-2892-46dd-a0dc-0f95188acea1"}/${itemId}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            console.log("item in cart was discarded")
            if(change){
                setChange(false);
            } else{
                setChange(true)
            }
        })
    }

    const handlePlus = (singleItem) =>{
        fetch("/api/add-cart-item", {
            method: 'POST',
            headers:{
            'Content-type':'application/json',
            },
            body: JSON.stringify({cartId: "58bf7fa8-2892-46dd-a0dc-0f95188acea1" , item: singleItem})
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            console.log("it worked! Adding item to the cart")                    
            if(change){
                setChange(false);
            } else{
                setChange(true)
            }
        }) 
    }

    const parsedSingleItemPrice = parseFloat(singleItem.price.slice(1,singleItem.price.length));

    return(
        <Container>
            <ElementContainer>
                <div>{singleItem.name}</div>
            </ElementContainer>
                <div>{singleItem.category}</div>
                <div>{singleItem.count}</div>
                <div>{`${singleItem.price} `}</div>
                <div>{`$${(parsedSingleItemPrice * singleItem.count).toFixed(2)}`}</div>
            <ButtonContainer>
                <StyledButton onClick={() => handleMinus(singleItem._id)}>
                    <StyledPlus></StyledPlus>
                </StyledButton>
                <StyledButton onClick={() => handlePlus(singleItem)}></StyledButton>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    align-items: center;
    width: 54vw;
    grid-template-columns: 28vw 5vw 5vw 7vw 5vw 5vw;
    margin-left: 0.4vw;
    margin-right: 1vw;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const ElementContainer = styled.div`
    
`

const StyledButton = styled.button`
    width:1vw;
    height:2vh;
    margin:0.2vh;
`

const StyledPlus = styled(FcPlus)`
    width:1vw;
    height: 2vh;
    position:relative;
    left:-0.35vw;
    top:-1.65vh;
`

export default CartItem;