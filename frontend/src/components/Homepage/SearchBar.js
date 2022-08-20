import styled from "styled-components";
import { useEffect, useState } from "react";

const SearchBar = () => {
    const [list, setList] = useState([])
    const [load, setLoad] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() =>{
        fetch("/api/get-items")
            .then(res => res.json())
            .then((data) =>{
                setList(data.result)
                setLoad(true)               
            })

        }, []);

    return(
        <Wrapper>
        <input
        type="text"
        value={value}
        onChange={(ev)=>
            setValue(ev.target.value)
        }
        />
        <ul>
            {load &&  list.filter(item=>{
            return item.name.toLowerCase().includes(value.toLowerCase())
            && value.length > 2 
        }).map((selected) =>{
                return(
                <li>
                    {selected.name}
                </li> 

                )
            })}
        </ul>
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