import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import BuyNowModal from "./BuyNowModal";
import styled from "styled-components";

const ItemCard = ({object}) => {
    return(
        <div>
                <StyledDiv>
                <Link to={`/item-details/${object._id}`} className="link" >
                    <img src={object.imageSrc} alt="the watches in the top sellers"/>
                    <div className="name">{object.name}</div>
                    <div>{object.price}</div>
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
        </div>
    )
}

export default ItemCard;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .link{
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;

        .name{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10vw;
        }
    }
    .buttons{
        display:flex;
        flex-direction: row ;
        
    }
    .button{
        width: 6vw;
        font-size: 15px;
        border:none;
        color: white;
        border-radius: 3px;
        opacity: 0.5;
    }
`