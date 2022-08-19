import {useEffect, useState} from "react";


const WatchCard = () =>{
    const [allWatches, setAllWatches] = useState(false);
    // const [load, setLoad] = useState(false);
    let arrayOfWatches = [];
    // useEffect(() =>{
        // fetch("/api/get-items")
        //     .then(res => res.json())
        //     .then((data) =>{
            //         console.log(data);
        //         for(let i = 0; arrayOfWatches.length < 6; i++ ){
            //             arrayOfWatches.push(data.result[Math.floor((Math.random() * 100) + 1 + i)])
            //         }
        //         console.log(arrayOfWatches)
        //         // setLoad(true)
        //         console.log(allWatches);
        //     })
        //     .catch((err) =>{
            //         console.log(err)
            //     })
            // }, [])
            //console.log(allWatches)
            setAllWatches(true);
            console.log(allWatches);
        // useEffect(() =>{
        // }, [])
        return(
        <h1>
            Hello world
                {/* {allWatches && arrayOfWatches.map((element, index) =>{
                    return(
                        <div>
                            <img src={element.imgSRC} alt="the watches in the top sellers"/>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
                            
                        </div>
                    )
                })} */}
        </h1>
        )

}

export default WatchCard