import styled from "styled-components"

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
            <InnerContainer1>
                <div>{singleItem.name}</div>
            </InnerContainer1>
                <div>{singleItem.category}</div>
                <div>Item x {singleItem.count}</div>
                <div>{`${singleItem.price} `}</div>
                <div>{`$${(parsedSingleItemPrice * singleItem.count).toFixed(2)}`}</div>
            <InnerContainer3>
                <button onClick={() => handleMinus(singleItem._id)}>-</button>
                <button onClick={() => handlePlus(singleItem)}>+</button>
            </InnerContainer3>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    align-items: center;
    width: 54vw;
    grid-template-columns: 30vw 5vw 5vw 5vw 5vw 5vw;
    margin-left: 0.4vw;
    margin-right: 1vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

const InnerContainer1 = styled.div`

`

const InnerContainer2 = styled.div`

`

const InnerContainer3 = styled.div`
    display: flex;
    flex-direction: row;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default CartItem;