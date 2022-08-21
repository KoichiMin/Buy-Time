

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
        <button onClick={() => handleCart(object)}>add to cart</button>
    )
}

export default AddToCart