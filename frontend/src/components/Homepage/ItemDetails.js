import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BuyNowModal from "./BuyNowModal";
import AddToCart from "./AddToCart";
import {GlobalStates} from "../../GlobalStates";
import { useContext } from "react";
import {CircularProgress} from "@mui/material";

const ItemDetails = () => {
    const {itemId} = useParams()
    const [object, setObject] = useState(null);
    const [companies, setCompanies] = useState(null);

    const {
        state:{WatchDataGlobal}
    } = useContext(GlobalStates);

    // fetching to get individual items based off id

    useEffect(() => {
        if(WatchDataGlobal.watchDataHasLoaded) {
            fetch(`https://buy-time.onrender.com/api/get-item/${itemId}`)
            .then(res => res.json())
            .then(data => {
                setObject(data.data);
                fetch(`https://buy-time.onrender.com/api/get-all-companies`)
                .then(res => res.json())
                .then(data => {
                    setCompanies(data.data)
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        }
    }, [WatchDataGlobal.watchDataHasLoaded && itemId]);
    

    return (
        object &&
        companies ?
        <MainDiv>
            <img className="img" src={object.imageSrc} atl="watch"/>
            <div className="contentdiv">
            <p className="name">{object.name}</p>
            <p className="price">{object.price}</p>

            {/* mapping over companies array to match its id with the item's company id */}
            {/* when a match occurs, a link to the brand's webpage is created */}

            {companies.map((item) => {
                return( 
                    item._id === object.companyId &&
                    <>
                    <p className="brand"><a className="link" href={item.url}>{item.name}</a></p>
                    </>
                )

            })}

            {/* conditional rendering depending on if an item is in stock or not */}
            {object.numInStock > 0 ?
            <BtnDiv>
            <BuyNowModal object={object}/> 
            <AddToCart object={object} />
            </BtnDiv>
            :
            <button disabled={true}>Out of Stock</button>
            }
            </div>
        </MainDiv>
        :
        (
        <Container>
            <StyledCircularProgress></StyledCircularProgress>  
        </Container>
        )
    );
};

const MainDiv = styled.div`
    margin-left: 8vw;
    margin-top: 10vh;

    .img{
        width: 300px;
        margin-left: 38vw;
    }
    
    .contentdiv{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name{
        margin-top: 20px;
        text-align: center;
        opacity: 0.5;
        font-size: 19px;
    }

    .price{
        margin-top: 20px;
        font-weight: bold;
    }

    .brand{
        margin-top: 10px;
        font-size: 17px;
        margin-bottom: 20px;
    }

    .link{
        text-decoration: none;
        color: #3F72AF;
    }
`

const BtnDiv = styled.div`
    display: flex;
    gap: 8px;
`

const StyledCircularProgress = styled(CircularProgress)`

`

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default ItemDetails;
