import { useEffect, useState } from "react";

const ItemCard = () => {
        const [allWatches, setAllWatches] = useState(null);
        let arrayOfWatches = [];
       // console.log(allWatches);
        useEffect(() => {
            fetch("/api/get-items")
            .then(res => res.json())
            .then((data) => {
                
                for(let i = 0; arrayOfWatches.length < 6; i++ ){
                    arrayOfWatches.push(data.result[Math.floor((Math.random() * 100) + 1 + i)])                
                }
                console.log(arrayOfWatches);
                setAllWatches(arrayOfWatches)
            })
            .catch(err =>{
                console.log(err)
            }) 
        }, []);
    return(
        <div>
            {allWatches && allWatches.map((element, index) =>{
                    return(
                        <div>
                            <img src={element.imageSrc} alt="the watches in the top sellers"/>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
                            
                        </div>
                    )
                })}
        </div>
    )
}

export default ItemCard