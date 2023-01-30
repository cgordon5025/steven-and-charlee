import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_GUEST, ADD_TO_PARTY } from "../../utils/mutations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { faPencil, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function GuestList({ guests, setTotalGuest }) {
    const [editGuest] = useMutation(EDIT_GUEST)
    const [addParty] = useMutation(ADD_TO_PARTY)
    const [editModal, setEditModal] = useState(false)
    const [groupModal, setGroupModal] = useState(false)
    const [currentGuest, setCurrentGuest] = useState({})
    const [editName, setEditName] = useState({})
    const [newMember, setNewMember] = useState()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setEditName({
            ...editName,
            [name]: value
        })
        console.log(value)
        console.log(editName)
    }

    const saveEdit = async () => {
        try {
            const { data } = await editGuest({
                variables: {
                    guestId: editName._id,
                    name: editName.name
                }
            });
            console.log({ ...editName })
            const updatedGuests = await guests.map(person => {
                if (person._id === currentGuest._id) {
                    return editName
                }
                return person
            })
            setTotalGuest(updatedGuests)
            setEditModal(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    const handlePartyChange = (selectedOption) => {
        console.log(selectedOption.target)
        console.log(this.setState(selectedOption.target.value))
        setNewMember({
            memberId: selectedOption.value
        })
        console.log(newMember)
    }
    const saveParty = async (event) => {
        event.preventDefault()
        console.log(newMember)
        console.log(currentGuest._id)
        // note to self weird error happening here, might be an asynchronous error id isn't carrying over into the task???
        // console log to check the issues, maybe save ID's to a local variable
        const { data } = await addParty({
            variables: {
                person1Id: currentGuest._id,
                person2Id: newMember
            }
        })
        // person1_id: currentGuest._id,
        // person2_id: newMember
    }
    const handleEditClose = () => {
        setEditModal(false)
    }
    const handleGroupClose = () => {
        setGroupModal(false)
    }
    return (
        <>
            {guests.map((guest) => {
                return (
                    <>
                        <tr key={guest._id}>
                            <td>{guest.name}</td>
                            {guest.RSVP != null ?
                                (<td>{guest.RSVP}</td>) :
                                (<td>Unconfirmed</td>)}
                            {guest.mealOpt != null ?
                                (<td>{guest.mealOpt}</td>) :
                                (<td>Undecided</td>)
                            }
                            {guest.allergyDiet != null ?
                                (<td>{guest.allergyDiet}</td>) :
                                (<td>No accomodation needed</td>)
                            }

                            <td >
                                <span>
                                    <FontAwesomeIcon style={{ marginRight: "10%" }}
                                        onClick={() => {
                                            setCurrentGuest(guest)
                                            setEditName(guest)
                                            setEditModal(true)
                                            setGroupModal(false)
                                        }} icon={faPencil}></FontAwesomeIcon>
                                </span>
                                <FontAwesomeIcon icon={faUserFriends}
                                    onClick={() => {
                                        setCurrentGuest(guest)
                                        setGroupModal(true)
                                        setEditModal(false)
                                    }}
                                ></FontAwesomeIcon>
                            </td>
                            <td></td>
                        </tr >

                    </>
                )
            }
            )}
            <Modal show={groupModal} onHide={handleGroupClose}>
                <Modal.Header style={{ "--bs-modal-header-border-color": "#140600" }} closeButton>
                    <Modal.Title className="text-center">Create A Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Select one person to add to <span>{currentGuest.name}'s</span> party</p>
                    <form>
                        <select onChange={(choice) => setNewMember(choice.target.value)}>
                            {guests.map(opt => {
                                return (
                                    <option name="newMemberId" value={opt._id}>{opt.name}</option>
                                )
                            })}
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={saveParty}> Add Member</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={editModal} onHide={handleEditClose}>
                <Modal.Header style={{ "--bs-modal-header-border-color": "#140600" }} closeButton>
                    <Modal.Title className="text-center">Change the Spelling of a Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        className="form-input"
                        name="name"
                        value={editName.name}
                        onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={saveEdit}> Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GuestList