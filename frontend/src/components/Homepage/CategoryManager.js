import { useEffect, useState, useContext } from "react";

import WatchDisplay from "../WatchDisplay";
import { GlobalStates } from "../../GlobalStates";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const CategoryManager = () => {

    let navigate = useNavigate();

    const {
        state:{category,WatchDataGlobal},
    } = useContext(GlobalStates);
    const [pages, setPages] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if(WatchDataGlobal.watchDataHasLoaded) {
            fetch(`/api/getWatchesByCategory/6/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setPages(data);
                setLoad(true);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [category && WatchDataGlobal.watchDataHasLoaded]);

    if(WatchDataGlobal.watchDataHasLoaded && load && pages !== undefined) {
        return(
            <WatchDisplay pages={pages.pages} />
        )
    } else {
        return(
            <CircularProgress></CircularProgress>
        )
    }

    
};

export default CategoryManager;