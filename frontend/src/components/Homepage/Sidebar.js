import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {GiMagnifyingGlass} from "react-icons/gi"

import SearchBar from "./SearchBar";

const Sidebar = (props) => {
    return(
        <StyledSidebar>
            <Glass />
            <Container>
                <SearchBar />
                    <StyledLink to="/">
                        <p>Entertainment</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p>Fitness</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p>Gaming</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p>Indutrial</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p>Lifestyle</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p>Medical</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p><span>Pets and</span><span>Animals</span></p>
                    </StyledLink>
            </Container>
        </StyledSidebar>
    );
};

export default Sidebar;

const StyledSidebar = styled.div`
display: flex;
flex-direction: row;
width: 20vw;
padding: 5vh 2vw 0 2vw;
height: 100%;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
`;

const Glass = styled(GiMagnifyingGlass)`
position: absolute;
margin-top: 10px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
margin-left: 2vw;
`;


const StyledLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    margin: 10px 0 10px;
    gap: 10px;
    padding: 4px 8px 4px 8px;
    border-radius: 20px;
    width: max-content;

&.active {
    color: var(--color-font-header);
  }

&:hover {
    color: var(--color-font-header);
    background-color: #EFE9FE;
}

p {
    font-size: 20px;
    padding: 0;
    margin: 0;
}

span {
    display: block;
}
`;
