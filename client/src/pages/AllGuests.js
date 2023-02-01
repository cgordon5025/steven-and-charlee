import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_GUESTS } from "../utils/queries";
import { ADD_GUEST } from "../utils/mutations";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import GuestList from '../components/GuestList'

function AllGuests() {
    const [newGuestModal, setNewGuestModal] = useState(false)
    const [newName, setNewName] = useState({ firstname: "", lastname: "" })
    const [totalGuest, setTotalGuest] = useState([])
    const { loading, data } = useQuery(ALL_GUESTS)
    const [addGuest] = useMutation(ADD_GUEST)
    const guests = data?.allGuests || [];

    useEffect(() => {
        setTotalGuest(guests)
    }, [loading])
    const handleSubmit = async () => {
        try {
            console.log(newName)
            if (newName.firstname && newName.lastname) {
                const { data } = await addGuest({
                    variables: { ...newName }
                });
                setTotalGuest([...totalGuest, { ...data.addGuest }])
                console.log(totalGuest)
                handleClose()
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleAddClose = () => {
        setNewGuestModal(false)
    }
    const handleChange = (event => {
        const name = event.target.name
        const value = event.target.value
        // console.log(name, value)
        setNewName({
            ...newName,
            [name]: value
        })
        console.log(newName)
    })

    const handleClose = () => {
        setNewName("")
        setNewGuestModal(false)
    }



    if (loading) {
        return (<div>Loading Guests...</div>)
    }

    return (
        <>


            <p className="text-center"> Total No. of Guests: {totalGuest.length}</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p> Total Yes's: {totalGuest.filter((yes) => yes.RSVP === "yes").length}</p>
                <p> Total No's: {totalGuest.filter((no) => no.RSVP === "no").length}</p>
                <p> Waiting On: {totalGuest.filter((waiting) => waiting.RSVP == null).length}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p> Chicken: {totalGuest.filter((chicken) => chicken.mealOpt === "chicken").length}</p>
                <p> Steak: {totalGuest.filter((steak) => steak.mealOpt === "steak").length}</p>
                <p> Seafood: {totalGuest.filter((seafood) => seafood.mealOpt === "seafood").length}</p>
                <p> Undecided: {totalGuest.filter((waiting) => waiting.mealOpt == null).length}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => {
                    setNewGuestModal(true)
                }}> Add New Guest</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>RSVP Status</th>
                        <th>Meal Choice</th>
                        <th>Dietary Restrictions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <GuestList guests={totalGuest} setTotalGuest={setTotalGuest} />
                </tbody>
            </Table>
            <Modal show={newGuestModal} onHide={handleAddClose}>
                <Modal.Header style={{ "--bs-modal-header-border-color": "#140600" }} closeButton>
                    <Modal.Title className="text-center">Add A New Guest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label style={{ marginRight: "2%" }} for="name">Enter First Name: </label>
                        <input
                            className="form-input"
                            placeholder="Guest's First Name"
                            name="firstname"
                            type="text"
                            id="name-input"
                            value={newName.firstname}
                            onChange={handleChange}
                        />
                        <br></br>
                        <br></br>
                        <label style={{ marginRight: "2%" }} for="name">Enter Last Name: </label>
                        <input
                            className="form-input"
                            placeholder="Guest's Last Name"
                            name="lastname"
                            type="text"
                            id="name-input"
                            value={newName.lastname}
                            onChange={handleChange}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={handleSubmit}>Add Guest</Button>
                </Modal.Footer>
            </Modal>
        </>

    )


}

export default AllGuests