import {useState} from "react";
import styled, {GlobalStyleComponent} from "styled-components";
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

    let subtitle;

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        // subtitle.style.color = "#EEE"
    }

    const closeModal = () => {
        setIsOpen(false)
        setConfirmed(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const _id = object._id
        console.log(_id)

        fetch(`/api/updatestock/${object._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: _id})
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setConfirmed(true)
        })
    }

    return(
        <>
            <button onClick={openModal}>Buy now</button>
            <Modal 
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Buy Now Modal"
            >
            {confirmed === false ?
            <>
                <p>Please enter your details to complete the purchase.</p>
                <button onClick={closeModal}>close</button>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Full name"
                    required={true}
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    required={true}
                    />
                    <input 
                    type="text"
                    placeholder="Address"
                    required={true}
                    />
                    <input 
                    type="text"
                    placeholder="Credit card number"
                    required={true}
                    />
                    <button type="submit">Purchase</button>
                </form>
            </>
                : confirmed === true &&
                <>
                <p>Thank you for your purchase!</p>
                <button onClick={closeModal}>close</button>
                </>
                }
            </Modal>
        </>
    )
}

export default BuyNowModal;