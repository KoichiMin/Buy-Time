import { useEffect, useState, useContext } from "react";

import WatchDisplay from "../WatchDisplay";
import { GlobalStates } from "../../GlobalStates";

const CategoryManager = () => {
    const {
        state:{category},
    } = useContext(GlobalStates);
    const [pages, setPages] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch(`/api/getWatchesByCategory/6/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setPages(data);
            setLoad(true);
        })
    }, [category]);

    return(
        load ?
        <WatchDisplay pages={pages.pages} />
        :
        null
    );
};

export default CategoryManager;