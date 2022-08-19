import styled from "styled-components";

const SearchBar = () => {
    return(
        <Wrapper>
        <input
        type="text"
        />
        </Wrapper>
    );
};

export default SearchBar;

const Wrapper = styled.div`
input {
    width: 20vw;
    height: 10px;
    border-radius: 5px;
    border: solid #cdcdcd 2px;
    padding: 10px;
    font-size: 20px;
}
`