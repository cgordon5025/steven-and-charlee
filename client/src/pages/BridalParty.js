import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import PartyContext from "../utils/PartyContext";
import { SAVE_PARTY } from "../utils/action";

function BridalParty() {
    const [partyModal, setPartyModal] = useState(true)
    //is the password correct
    const [partyPass, setPartyPass] = useState()
    //what did they input
    const [partyInput, setPartyInput] = useState('')
    //give them a response based off their input, is it correct and if not display the message
    const [partyResp, setPartyResp] = useState(false)
    const { party, setParty } = useContext(PartyContext)
    const handleCorrect = () => {
        const payload = {
            loggedin: true
        }
        setParty({
            type: SAVE_PARTY,
            payload: payload
        })
        setPartyPass(true)
        setPartyResp(false)
        setPartyModal(false)
        localStorage.setItem("PartyAuth", JSON.stringify(true))
    }
    const handleWrong = () => {
        setPartyPass(false)
        setPartyResp(true)
        setPartyModal(true)
    }
    const handleClose = () => {
        console.log('close active')
        console.log(partyInput)
        partyInput.password == "Password" ? (handleCorrect()) : (handleWrong());
    }
    //somemore notes
    const reroute = () => {
        console.log('reroute active')
        setPartyModal(false)
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setPartyInput({
            ...partyInput,
            [name]: value
        })
    }
    const styles = {
        btns: {
            margin: "1%"
        }
    }
    return (
        <>
            <div className="supreme-container">
                <p> Hello</p>
                <p> Info for the bridal party</p>
            </div>
            {party ? (<></>) : (
                <Modal show={partyModal} onHide={handleClose}>
                    <Modal.Header>
                        Please enter the password to gain access to this page
                    </Modal.Header>
                    <Modal.Body style={{ display: "flex", flexDirection: "Column", alignItems: "center" }}>
                        <form>
                            <input
                                className="form-input"
                                placeholder="Enter the password"
                                name="password"
                                type="password "
                                id="password-input"
                                onChange={handleChange}
                            >
                            </input>
                        </form>
                        {partyResp ? (
                            <p style={{ marginTop: "3%" }}> You have entered the wrong password</p>
                        ) : (
                            <></>
                        )
                        }
                    </Modal.Body>
                    <Modal.Footer style={{ display: "flex", flexDirection: "column" }}>
                        < Button style={styles.btns} onClick={handleClose}>Submit</Button>
                        < Link onClick={reroute} to='/'> Not in the Wedding Party</Link>
                    </Modal.Footer>
                </Modal>

            )
            }
        </>
    )
}
// Need an option for when they click out of the modal so it doesn't prompt the wrong password part

export default BridalParty