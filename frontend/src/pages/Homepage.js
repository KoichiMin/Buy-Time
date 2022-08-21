import styled from "styled-components";
// import WatchCard from "../components/Homepage/WatchCard";
import ItemCard from "../components/Homepage/ItemCard";
//import Copy from "../components/Homepage/Copy"

const Homepage = () => {
    return(

        <Wrapper>
            <ItemCard/>
        </Wrapper>
    );
};

export default Homepage;

const Wrapper = styled.div`
margin-left: 20vw;
`