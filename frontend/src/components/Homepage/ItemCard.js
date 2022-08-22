import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import BuyNowModal from "./BuyNowModal";

const ItemCard = ({object}) => {
    return(
        <div>
                <div>
                <Link to={`/item-details/${object._id}`}>
                    <img src={object.imageSrc} alt="the watches in the top sellers"/>
                    <div>{object.name}</div>
                    <div>{object.price}</div>
                </Link>

                {object.numInStock > 0 ?
                <>
                <BuyNowModal object={object}/> 
                <AddToCart object={object} />
                </>
                :
                <button disabled={true}>Out of Stock</button>
                }
                </div>
        </div>
    )
}

export default ItemCard;