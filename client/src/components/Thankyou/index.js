import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const Thankyou = (otherGuests, active) => {
    // console.log(otherGuests)
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            <p> Hello</p>
            <p>Thank you for RSVPing to our wedding, you may come back to change your response any time before May 14th 2024.</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {otherGuests.otherGuests.map((others) => {
                    return (
                        <>
                            <Link to={`/RSVP/${others.firstname}/${others.lastname}/`}>
                                <Button active={active} onClick={console.log("picked another person")}>RSVP for {others.firstname} {others.lastname}</Button>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>)
}

export default Thankyou