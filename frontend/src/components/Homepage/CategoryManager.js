import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
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
    }, [WatchDataGlobal.watchDataHasLoaded && category]);

    if(WatchDataGlobal.watchDataHasLoaded && load && pages !== undefined) {
        return(
            <WatchDisplay pages={pages.pages} />
        )
    } else {
        return(
            <StyledCircularProgress/>
        )
    }

    
};

const StyledCircularProgress = styled(CircularProgress)`
    position: absolute;
    top:50vh;
    left: 50vw;
`

export default CategoryManager;