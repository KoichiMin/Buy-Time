import styled from "styled-components";
import CategoryManager from "../components/Homepage/CategoryManager";

const Homepage = () => {
    return(
        <Wrapper>
            <CategoryManager />
        </Wrapper>
    );
};

export default Homepage;

const Wrapper = styled.div`
margin-left: 20vw;
overflow: hidden;
`