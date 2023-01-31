import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_GUEST } from "../utils/queries"
import { GIVE_RSVP } from "../utils/mutations"
function RSVP() {

    return (
        <p> Hello</p>
    )
}
// NOTE NEED TO ITERATE THROUGH MEMBERS OF PARTY
export default RSVP