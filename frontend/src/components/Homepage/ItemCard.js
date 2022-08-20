import { useEffect, useState } from "react";

const ItemCard = () => {
        const [allWatches, setAllWatches] = useState([]);

        useEffect(() => {
            fetch(`/api/getRadomWatches/${6}`, {
                method: 'GET', 
                header:{
                    'Content-Type': 'application/JSON',
                },
            })
            .then(res => res.json())
            .then((data) => {

                console.log(data)
                setAllWatches(data.watches)
            })
            .catch(err =>{
                console.log(err)
            }) 
        }, []);

    
    return(
        <div>
        hello world
            {allWatches && allWatches.map((element) =>{
                    return(
                        <div>
                            <img src={element.imageSrc} alt="the watches in the top sellers"/>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
                            {/* <BuyNow/> */}
                            {/* <AddToCart/> */}
                        </div>
                    )
                })}
        </div>
    )
}

export default ItemCard