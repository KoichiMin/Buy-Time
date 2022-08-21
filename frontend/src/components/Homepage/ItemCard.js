import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import BuyNowModal from "./BuyNowModal";

const ItemCard = ({object}) => {
    console.log(object);
    return(
        <div>
                <div>
                <Link to={`/item-details/${object._id}`}>
                    <img src={object.imageSrc} alt="the watches in the top sellers"/>
                    <div>{object.name}</div>
                    <div>{object.price}</div>
                </Link>
                    <AddToCart object={object}/>
                    <BuyNowModal object={object}/>
                </div>
        </div>
    )
}

export default ItemCard;