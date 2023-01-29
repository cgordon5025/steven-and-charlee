import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_GUESTS } from "../utils/queries";
import { ADD_GUEST } from "../utils/mutations";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import GuestList from '../components/GuestList'

function AllGuests() {
    const [newGuest, setNewGuest] = useState(false)
    const [newName, setNewName] = useState("")
    const [totalGuest, setTotalGuest] = useState([])
    const { loading, data } = useQuery(ALL_GUESTS)
    const [addGuest] = useMutation(ADD_GUEST)
    const guests = data?.allGuests || [];
    useEffect(() => {
        setTotalGuest(guests)
    }, [loading])
    const handleSubmit = async () => {
        try {
            if (newName.name) {
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
    const handleChange = (event => {
        const name = event.target.name
        const value = event.target.value
        // console.log(name, value)
        setNewName({
            ...newName,
            [name]: value
        })
    })

    const handleClose = () => {
        setNewName("")
        setNewGuest(false)
    }



    if (loading) {
        return (<div>Loading Guests...</div>)
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => {
                    setNewGuest(true)
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
            <Modal show={newGuest}>
                <Modal.Header style={{ "--bs-modal-header-border-color": "#140600" }} closeButton>
                    <Modal.Title className="text-center">Add A New Guest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label for="name">Guest Name: </label>
                        <input
                            className="form-input"
                            placeholder="Enter Guest's Name"
                            name="name"
                            type="text"
                            id="name-input"
                            value={newName.value}
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