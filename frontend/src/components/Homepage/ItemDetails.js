import { GlobalStyleComponent } from "styled-components";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BuyNowModal from "./BuyNowModal";
import AddToCart from "./AddToCart";
import {GlobalStates} from "../../GlobalStates";
import { useContext } from "react";

const ItemDetails = () => {
    const {itemId} = useParams()
    const [object, setObject] = useState(null);
    const [companies, setCompanies] = useState(null);

    const {
        state:{WatchDataGlobal,SideBarFetchHasLoaded}
    } = useContext(GlobalStates);

    // fetching to get individual items based off id
    //ERROR for this useEffect - sidebar and searchbar not working

    useEffect(() => {
        if(WatchDataGlobal.watchDataHasLoaded && SideBarFetchHasLoaded) {
            fetch(`/api/get-item/${itemId}`)
            .then(res => res.json())
            .then(data => {
                setObject(data.data);
                fetch(`/api/get-all-companies`)
                .then(res => res.json())
                .then(data => {
                    setCompanies(data.data)
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        }
    }, [WatchDataGlobal.watchDataHasLoaded && SideBarFetchHasLoaded]);
    

    return (
        object &&
        companies &&
        <MainDiv>
            <img src={object.imageSrc} atl="watch"/>
            <p>{object.name}</p>
            <p>{object.price}</p>

            {/* mapping over companies array to match its id with the item's company id */}
            {/* when a match occurs, a link to the brand's webpage is created */}

            {companies.map((item) => {
                return( 
                    item._id === object.companyId &&
                    <>
                    <p>Brand: <a href={item.url}>{item.name}</a></p>
                    </>
                )

            })}

            {/* conditional rendering depending on if an item is in stock or not */}
            {object.numInStock > 0 ?
            <>
            <BuyNowModal object={object}/> 
            <AddToCart object={object} />
            </>
            :
            <button disabled={true}>Out of Stock</button>
            }
        </MainDiv>
    );
};

const MainDiv = styled.div`
    margin-left: 20vw;
`
export default ItemDetails;
