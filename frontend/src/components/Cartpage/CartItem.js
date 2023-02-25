import styled from "styled-components";
import {AiFillPlusCircle} from "react-icons/ai";
import {AiFillMinusCircle} from "react-icons/ai";
import {GlobalStates} from "../../GlobalStates";
import { useContext } from "react";

const CartItem = ({singleItem, setChange, change}) =>{

    const {
        actions:{openErrorModal},
    } = useContext(GlobalStates)

    const handleMinus = (itemId) =>{
        //deletes a specific cart item
        fetch(`https://buy-time.onrender.com/api/delete-cart-item/${"58bf7fa8-2892-46dd-a0dc-0f95188acea1"}/${itemId}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) =>{
            if(change){
                setChange(false);
            } else{
                setChange(true);
            }
        })
    }

    const handlePlus = (singleItem) =>{
        //adds a specific cart item
        fetch("https://buy-time.onrender.com/api/add-cart-item", {
            method: 'POST',
            headers:{
            'Content-type':'application/json',
            },
            body: JSON.stringify({cartId: "58bf7fa8-2892-46dd-a0dc-0f95188acea1" , item: singleItem})
        })
        .then((res) => res.json())
        .then((data) =>{
            if(data.message === "Cannot add more of this item to cart, out of stock") {
                openErrorModal({data:[singleItem.name]})
            }                  
            if(change){
                setChange(false);
            } else{
                setChange(true)
            }
        })
        .catch((err) => {
            console.log(err);
        }); 
    }

    const parsedSingleItemPrice = parseFloat(singleItem.price.slice(1,singleItem.price.length));

    return(
        <Container>
                <div>{singleItem.name}</div>
                <div>{singleItem.category}</div>
                <div>{singleItem.count}</div>
                <div>{`${singleItem.price} `}</div>
                <div>{`$${(parsedSingleItemPrice * singleItem.count).toFixed(2)}`}</div>
            <ButtonContainer>
                <StyledButton onClick={() => handleMinus(singleItem._id)}>
                    <StyledMinus></StyledMinus>
                </StyledButton>
                <StyledButton onClick={() => handlePlus(singleItem)}>
                    <StyledPlus></StyledPlus>
                </StyledButton>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    align-items: center;
    width: 68vw;
    grid-template-columns: 37vw 7vw 7vw 7vw 7vw 7vw;
    margin-left: 0.4vw;
    margin-right: 1vw;
    margin-top: 0.3vh;
    margin-bottom: 0.3vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left:0.4vw;
    color:white;
    background-color: rgb(255,255,255,0.5);
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledButton = styled.button`
    width:1vw;
    height:2vh;
    margin:0.2vh;
    border: 0;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`

const StyledPlus = styled(AiFillPlusCircle)`
    width:1vw;
    height: 2vh;
    position:relative;
    left:-0.25vw;
    top:-0.15vh;
`

const StyledMinus = styled(AiFillMinusCircle)`
    width:1vw;
    height: 2vh;
    position:relative;
    left:-0.25vw;
    top:-0.15vh;
`

export default CartItem;