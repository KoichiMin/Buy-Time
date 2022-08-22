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
    return(
        <div>
            <div>Item x {singleItem.count}</div>
            <div>
                <div>{singleItem.name}</div>
                <div>{singleItem.price}</div>
                <div>{singleItem.category}</div>
            </div>
            <div>
                <button onClick={() => handleMinus(singleItem._id)}>-</button>
                <button onClick={() => handlePlus(singleItem)}>+</button>
            </div>
        </div>
    )
}

export default CartItem