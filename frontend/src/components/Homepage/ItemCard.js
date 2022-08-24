import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import BuyNowModal from "./BuyNowModal";
import styled from "styled-components";

const ItemCard = ({object}) => {
    return(
        <>
                <StyledDiv>
                <Link to={`/item-details/${object._id}`} className="link" >
                    <StyledImg src={object.imageSrc} alt="the watches in the top sellers"/>
                    <div className="name">{object.name}</div>
                    <div className="price">{object.price}</div>
                </Link>

                {object.numInStock > 0 ?
                <div className="buttons">
                    <BuyNowModal object={object} /> 
                    <AddToCart object={object}/>
                </div>
                :
                <button disabled={true} className="button">Out of Stock</button>
                }
                </StyledDiv>
        </>
    )
}



const StyledDiv = styled.div`
    padding-bottom:2vh;
    margin-left: 0.2vw;
    margin-right: 0.2vw;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* border: 3px solid black; */
    height: 100%;
    .link{
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* height: 25vh; */
        
        .name{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10vw;
            text-align: center;
            opacity: 0.3;
            /* font-weight: b; */
        }
        .price{
            /* font-weight: bold; */
            font-size: 14px;
            color: #112D4E;
        }
    }
    .buttons{
        gap: 10px;
        display:flex;
        flex-direction: row ;
        align-items: center;
        /* justify-content: flex-end; */
        
    }
    .button{
        width: 6vw;
        font-size: 15px;
        border:none;
        color: white;
        border-radius: 3px;
        opacity: 0.5;
        background-color: #3F72AF;
        /* align-items: flex-end; */
    }
`

const StyledImg = styled.img`
    width: 10vw;
    height: 22vh;
`

export default ItemCard;