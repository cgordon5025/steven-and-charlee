import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

function BridalParty() {
    const [showModal, setShowModal] = useState(true)
    const [validPass, setValidPass] = useState()
    const [passInput, setPassInput] = useState('')
    const [showResp, setShowResp] = useState(false)
    const handleCorrect = () => {
        setValidPass(true)
        setShowResp(false)
        setShowModal(false)
    }
    const handleWrong = () => {
        setValidPass(false)
        setShowResp(true)
        setShowModal(true)
    }
    const handleClose = () => {
        console.log(passInput)
        passInput.password == "Password" ? (handleCorrect()) : (handleWrong());
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setPassInput({
            ...passInput,
            [name]: value
        })
    }
    return (
        <>
            <div className="supreme-container">
                <p> Hello</p>
                <p> Info for the birdal party</p>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    Please enter the password to gain access to this page
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input
                            className="form-input"
                            placeholder="Enter the password"
                            name="password"
                            type="text"
                            id="password-input"
                            onChange={handleChange}
                        >
                        </input>
                    </form>
                </Modal.Body>
                <Modal.Footer style={{ display: "flex", flexDirection: "Column" }}>
                    {showResp ? (
                        <p> You have entered the wrong password</p>
                    ) : (
                        <></>
                    )
                    }
                    < Button onClick={handleClose}>Submit</Button>


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BridalParty