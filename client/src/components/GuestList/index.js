import React from "react";
import { useMutation } from "@apollo/client";
import { EDIT_GUEST, ADD_TO_PARTY } from "../../utils/mutations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPencil, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function GuestList({ guests, setTotalGuest }) {
    console.log(guests)
    const [editGuest] = useMutation(EDIT_GUEST)
    const [addParty] = useMutation(ADD_TO_PARTY)

    const editName = () => {

    }
    return (
        <>
            {guests.map((guest) => {
                return (
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
                            <FontAwesomeIcon style={{ paddingRight: "10%" }} onClick={editName} icon={faPencil}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                        </td>
                        <td></td>
                    </tr>
                )
            }
            )}
        </>
    )
}

export default GuestList