import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
const ItemCard = ({object}) => {

    return(
        <div>
            return(
                <div>
                <Link to={`/item-details/${object._id}`}>
                    <img src={object.imageSrc} alt="the watches in the top sellers"/>
                    <div>{object.name}</div>
                    <div>{object.price}</div>
                </Link>
                    {/* <BuyNow/> */}
                    <AddToCart object={object}/>
                </div>
            )
        </div>
    )
}

export default ItemCard