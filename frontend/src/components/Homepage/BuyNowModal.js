import {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const BuyNowModal = ({ object }) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
        setConfirmed(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const _id = object._id

        //removes one item in stock on click of buy now button
        fetch(`/api/updatestock/${object._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: _id})
        })
        .then((res) => res.json())
        .then((json) => {
            setConfirmed(true)
        })
    }

    return(
        <>
            <StyledButton onClick={openModal}>Buy now</StyledButton>
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Buy Now Modal"
            >
            {confirmed === false ?
            
            <Wrapper>
                <StyledTitle>Payment</StyledTitle>
                    <InputContainer>
                    <h1>Total: {object.price}</h1>
                    </InputContainer>
                    <form onSubmit={handleSubmit}>

                    <InputContainer>
                        <StyledLabel>Card Holder Name</StyledLabel>
                        <StyledInput required={true} type="text" placeholder="Card Holder Name"></StyledInput>
                    </InputContainer>

                    <InputContainer>
                        <StyledLabel>Card Number</StyledLabel>
                        <StyledInput required={true} type="text" placeholder="Card Number"></StyledInput>
                    </InputContainer>

                    <InputContainer2>

                        <InputContainer>
                            <StyledLabel>Expiry Date</StyledLabel>
                            <StyledInput1 required={true} type="text" placeholder="Expiry Date"></StyledInput1>
                        </InputContainer>

                        <InputContainer>
                            <StyledLabel>CVV Code</StyledLabel>
                            <StyledInput1 required={true} type="text" placeholder="CVV Code"></StyledInput1>
                        </InputContainer>

                    </InputContainer2>

                    <ButtonContainer>
                        <StyledConfirmButton type="submit">Confirm</StyledConfirmButton>
                        <StyledCancelButton onClick={closeModal}>Cancel</StyledCancelButton>
                    </ButtonContainer>

                    </form>
            </Wrapper>
                : confirmed === true &&
                <>
                <ConfirmedDiv>
                    <StyledLabel>Thank you for your purchase!</StyledLabel>
                    <StyledCloseButton onClick={closeModal}>close</StyledCloseButton>
                </ConfirmedDiv>
                </>
                }
            </Modal>
        </>
    )
}

const StyledTitle = styled.h1`
    color:#0d47a1;
    margin-top:2vh;
    margin-bottom: 2vh;
    font-size: 2vw;
`
const Wrapper = styled.div`
    width:30vw;
    height: 50vh;
`
const Container = styled.form`
    display: flex;
    flex-direction: column;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2vw;
    margin-bottom: 2vh;
`
const StyledLabel = styled.label`
    font-size: large;
    margin-bottom: 1vh;
`

const StyledInput = styled.input`
    color:grey;
    border:solid 1px;
    padding-top:0.2vh;
    padding-bottom:0.2vh;
    width: 25.3vw;
`
const InputContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 1vh;
`

const StyledInput1 = styled.input`
    color:gray;
    width: 11.5vw;
    border:solid 1px;
    padding-top:0.2vh;
    padding-bottom:0.2vh;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3vh;
`
const StyledConfirmButton = styled.button`
    background-color: #fcb900;
    border-width: 0;
    border-radius: 2vw;
    margin-right: 2vw;
    padding:1vh 2vw;
    color:white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`
const StyledCancelButton = styled.button`
    background-color: #d32f2f;
    border-width: 0;
    border-radius: 2vw;
    margin-left: 2vw;
    padding:1vh 2vw;
    color:white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`

const StyledCloseButton = styled.button`
    background-color: #0d47a1;
    border: none;
    border-radius: 5px;
    width: 80px;
    color:white;
    margin-top: 10px;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`
const ConfirmedDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .closeButton{
        background-color: #d32f2f;
    }
`

const StyledButton = styled.button`
width: 6vw;
height: 3vh;
font-size: 15px;
border:none;
color: #F9F7F7;
border-radius: 5px;
font-weight: 2px;
background-color: #3F72AF;
&:hover {
    opacity: 0.7;
}

&:active {
    transform: translateY(2px);
    }
`
export default BuyNowModal;