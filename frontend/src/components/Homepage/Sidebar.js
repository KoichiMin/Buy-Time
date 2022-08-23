import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { GlobalStates } from "../../GlobalStates";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const {
        state:{WatchDataGlobal},
        actions:{updateCategory},
    } = useContext(GlobalStates);

    return(
        <StyledSidebar>
            {WatchDataGlobal.watchDataHasLoaded && WatchDataGlobal.categories !== undefined &&
            WatchDataGlobal.categories.map((category) => {
                {/* console.log(category); */}
                return(
                    <StyledLink to={"/"} onClick={(e) => {updateCategory({data:category})}}>{category}</StyledLink>
                )}
            )}
        </StyledSidebar>
    );
};

export default Sidebar;

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    padding: 10vh 2vw 0 5vw;
    height: 100%;
    position: fixed;
    overflow-x: hidden;
`;

const StyledLink = styled(Link)`
    align-items: center;
    margin: 10px 0 10px;
    padding: 4px 8px 4px 8px;
    border-radius: 20px;
    width: max-content;
    font-size: 20px;
    border: none;
    text-decoration: none;
    
&:hover {
    color: var(--color-light-blue);
    background-color: #EFE9FE;
}
`;
