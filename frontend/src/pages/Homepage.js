import styled from "styled-components";
// import WatchCard from "../components/Homepage/WatchCard";
import ItemCard from "../components/Homepage/ItemCard";
//import Copy from "../components/Homepage/Copy"
import WatchDisplay from "../components/WatchDisplay";

import { useContext } from "react";
import { GlobalStates } from "../GlobalStates";
import CategoryManager from "../components/Homepage/CategoryManager";

// Dummy data for testing. Thats what you will have to pass to WatchDisplay Illie
const pages = [
    {
        "pageNumber": 1,
        "watchesInPage": [
            {
                "_id": 6771,
                "name": "High Tech Pet MS-4 Digital, Water-Resistant Ultrasonic Collar",
                "price": "$34.99",
                "body_location": "Neck",
                "category": "Pets and Animals",
                "imageSrc": "data:image/jpeg;base64,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",
                "numInStock": 0,
                "companyId": 14834
            },
            {
                "_id": 7112,
                "name": "Whistle BK897541 WhistleTM Wireless Activity Monitor for Dogs",
                "price": "$99.99",
                "body_location": "Neck",
                "category": "Pets and Animals",
                "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgQCgkLEA0PDRAQEBsZEBkOIB0WIiAdHx8kHTQsJCYxJx8fLTUtMTU3Ojo6IyszODM4NzQ5OisBCgoKDQwNGg8PGjclHyUsNDc3Nyw1Lzg3Nzc0Njc3NDcwLy8sMDc0Nzc4Nzc2OC80MSw0LC03NzQ3Nyw3LCw0NP/AABEIADwAPAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAHAgMEBQYBCP/EADIQAAIBAwIEBQEHBQEAAAAAAAECAwAEEQUhEjFBYQYTIlFxkQeBkqHB0fAjMjPh8RT/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAIREAAgICAgIDAQAAAAAAAAAAAQIAAxESITEigRRBUQT/2gAMAwEAAhEDEQA/ACuydqR5dSSudhTcrJEheRgijcliAPvNNzF4jPB2pJQVl9d8aRwTi20hRcuA7SuoBRVGOZzgbke59qxMfi7WJ7lnbUJY2HJcjH0x+dI+Up6Eo+I+OYXTHSTHQ8s/Heo2rIt2y3KE78ahTjuw5dtjRC0e/tdX0+K9s24opB2yG9j8f7pyWh+omylk7nDFSPK7VYeWPakmPtTNorEG32sQXkN/FdxXDCM8CqAxBU46Y75J70P5Xnuc/wDpld392Ynb60e/E+grqsL5UPxIFZG5ZGcMPY7kbfpQg1fR7vTp5RHaSyxhsEcOXXlzI6Hcg4GfYHasyy3V9W9TVpQMmV9ystIJAgSIkKch+E7kc6mNCiFXVeFh/NzUWxureVZD6k8s4YMN811buISMjHjz6lyetKJO0eMYlNrV+wk8tThch89c8q0H2deJhpeuWazy+XbSkxyb+kIdgT8HBzWP1Vi1y+Rsu38/OocTsjlhz6VWo4Bkzc5BnrkYYArgg4IPTHY9a4RQ6+zLxNHDpMVnq8/l8ZUW3GT+EdtgR03okKVdQyniU8iDtino4YcSJ6yhwZLIqp1jw9YatJHLcq6zR/2SRuUfHsSOY+asPNBO0o3+K4Gzyk3pTAMMEQ1JU5Bg88UeAYgDPbyu8eG4uIjjD9Dy3Hvnlzocy+H7ieS4Ft6bmA+uI+2/qQ9eRGOx516HlVnQqTlTz5YxQ18WaRe2l8LyG3IjIwzIMqCOWR7EHf61BehqOU6ml/NYLRq/cD1xDwuRIpLtn8X/AGpmnWcMETTTheIAsM8hipGvzQw3SXEiFVIOQ3Pi9h8frWbutTkum8mNT5TY26k9Puz0p1e9gH0IFjLWT+zb6NaNrPh6XW7i6KPbSslvGuMFRw54u54tvjvV3Y+KNasbcQW146RDJA2I+7IrM+H7Wexs0t2kYLKwlaIn0h8YyR8Y+narZjEhxJjNDY428INaEr58wvhIzu0LZpwQw5yFkB7E0+APalqgxVuJBmNK5UYVZMddxUbUFW5tnhnhYxSDhbiIxw1ZIK5KoZSpGQRQuuVIEJGwwJgf1f7ObecXBTUmWA8Mq8Y4iu5z6s+3bqKzMEMemGezgRMxENx8IyQfcn96KV5/T1Ka1X/CoOB2Ocj4oV64xjvjwbB29Q6Vj1XvYSjHqbL0oi7gSbZyGWQO5yx5D9vinprfjkLMd+1RbQ8DEqBtt929SS7Z50R7gT//2Q==",
                "numInStock": 4,
                "companyId": 14639
            }
        ]
    },
    {
        "pageNumber": 2,
        "watchesInPage": [
            {
                "_id": 7112,
                "name": "Whistle BK897541 WhistleTM Wireless Activity Monitor for Dogs",
                "price": "$99.99",
                "body_location": "Neck",
                "category": "Pets and Animals",
                "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgQCgkLEA0PDRAQEBsZEBkOIB0WIiAdHx8kHTQsJCYxJx8fLTUtMTU3Ojo6IyszODM4NzQ5OisBCgoKDQwNGg8PGjclHyUsNDc3Nyw1Lzg3Nzc0Njc3NDcwLy8sMDc0Nzc4Nzc2OC80MSw0LC03NzQ3Nyw3LCw0NP/AABEIADwAPAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAHAgMEBQYBCP/EADIQAAIBAwIEBQEHBQEAAAAAAAECAwAEEQUhEjFBYQYTIlFxkQeBkqHB0fAjMjPh8RT/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAIREAAgICAgIDAQAAAAAAAAAAAQIAAxESITEigRRBUQT/2gAMAwEAAhEDEQA/ACuydqR5dSSudhTcrJEheRgijcliAPvNNzF4jPB2pJQVl9d8aRwTi20hRcuA7SuoBRVGOZzgbke59qxMfi7WJ7lnbUJY2HJcjH0x+dI+Up6Eo+I+OYXTHSTHQ8s/Heo2rIt2y3KE78ahTjuw5dtjRC0e/tdX0+K9s24opB2yG9j8f7pyWh+omylk7nDFSPK7VYeWPakmPtTNorEG32sQXkN/FdxXDCM8CqAxBU46Y75J70P5Xnuc/wDpld392Ynb60e/E+grqsL5UPxIFZG5ZGcMPY7kbfpQg1fR7vTp5RHaSyxhsEcOXXlzI6Hcg4GfYHasyy3V9W9TVpQMmV9ystIJAgSIkKch+E7kc6mNCiFXVeFh/NzUWxureVZD6k8s4YMN811buISMjHjz6lyetKJO0eMYlNrV+wk8tThch89c8q0H2deJhpeuWazy+XbSkxyb+kIdgT8HBzWP1Vi1y+Rsu38/OocTsjlhz6VWo4Bkzc5BnrkYYArgg4IPTHY9a4RQ6+zLxNHDpMVnq8/l8ZUW3GT+EdtgR03okKVdQyniU8iDtino4YcSJ6yhwZLIqp1jw9YatJHLcq6zR/2SRuUfHsSOY+asPNBO0o3+K4Gzyk3pTAMMEQ1JU5Bg88UeAYgDPbyu8eG4uIjjD9Dy3Hvnlzocy+H7ieS4Ft6bmA+uI+2/qQ9eRGOx516HlVnQqTlTz5YxQ18WaRe2l8LyG3IjIwzIMqCOWR7EHf61BehqOU6ml/NYLRq/cD1xDwuRIpLtn8X/AGpmnWcMETTTheIAsM8hipGvzQw3SXEiFVIOQ3Pi9h8frWbutTkum8mNT5TY26k9Puz0p1e9gH0IFjLWT+zb6NaNrPh6XW7i6KPbSslvGuMFRw54u54tvjvV3Y+KNasbcQW146RDJA2I+7IrM+H7Wexs0t2kYLKwlaIn0h8YyR8Y+narZjEhxJjNDY428INaEr58wvhIzu0LZpwQw5yFkB7E0+APalqgxVuJBmNK5UYVZMddxUbUFW5tnhnhYxSDhbiIxw1ZIK5KoZSpGQRQuuVIEJGwwJgf1f7ObecXBTUmWA8Mq8Y4iu5z6s+3bqKzMEMemGezgRMxENx8IyQfcn96KV5/T1Ka1X/CoOB2Ocj4oV64xjvjwbB29Q6Vj1XvYSjHqbL0oi7gSbZyGWQO5yx5D9vinprfjkLMd+1RbQ8DEqBtt929SS7Z50R7gT//2Q==",
                "numInStock": 4,
                "companyId": 14639
            }
        ]
    }
]

const Homepage = () => {
    const {dispatch, test} = useContext(GlobalStates);
    console.log(test);
    return(
        <Wrapper>
            <CategoryManager />
        </Wrapper>
    );
};

export default Homepage;

const Wrapper = styled.div`
margin-left: 20vw;
`