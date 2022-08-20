import { GlobalStyleComponent, styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetails = () => {
    const {itemId} = useParams()
    const [itemDetails, setItemDetails] = useState(null);
    const [companies, setCompanies] = useState(null);

    // fetching to get individual items based off id
    useEffect(() => {
        fetch(`/api/get-item/${itemId}`)
        .then(res => res.json())
        .then(data => {
            setItemDetails(data.data);
        }).catch((err) => console.log(err))
    }, [itemId]);
    
    //fetching to get list of all companies
    useEffect(() => {
        fetch(`/api/get-all-companies`)
        .then(res => res.json())
        .then(data => {
            setCompanies(data.data)
        }).catch((err) => console.log(err))
    }, []);
    


    return (
        itemDetails &&
        companies &&
        <div>
            <img src={itemDetails.imageSrc} atl="watch"/>
            <p>{itemDetails.name}</p>
            <p>{itemDetails.price}</p>
            <p>Available: {itemDetails.numInStock}</p>

            {/* mapping over companies array to match its id with the item's company id */}
            {/* when a match occurs, a link to the brand's webpage is created */}

            {companies.map((item) => {
                return( 
                    item._id === itemDetails.companyId &&
                    <>
                    <p>Brand: <a href={item.url}>{item.name}</a></p>
                    </>
                )

            })}

            {/* conditional rendering depending on if an item is in stock or not */}
            {itemDetails.numInStock > 0 ?
            <>
            <button>Buy Now</button> 
            <button>Add to Cart</button>
            </>
            :
            <button disabled={true}>Out of Stock</button>
        }
        </div>
    );
};

export default ItemDetails;
