import React, { useState, useEffect, useContext, useReducer } from "react";
import PartyContext from "../utils/PartyContext";
import { RSVP_PARTY } from "../utils/action";
import { reducer } from '../utils/reducers';
import Thankyou from "../components/Thankyou";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_GUEST } from "../utils/queries";
import { GIVE_RSVP } from "../utils/mutations";
import Button from 'react-bootstrap/Button';
import RSVP from "./SearchRSVP";



const SearchResults = () => {
    const { firstname: firstname, lastname: lastname } = useParams()
    // const { loading, data } = useQuery(GET_GUEST, { variables: { firstname: guestName[0], lastname: guestName[1] } })
    const { loading, data } = useQuery(GET_GUEST, { variables: { firstname: firstname, lastname: lastname } })
    const searchResults = data?.getGuest || [];
    const [RSVPParty, setRSVPParty] = useState()
    // const [otherGuests, setOtherGuests] = useState()
    const [submitRSVP] = useMutation(GIVE_RSVP)
    // useEffect(() => {
    //     setRSVPParty(searchResults)
    //     setOtherGuests(RSVPParty.otherGuests)
    // }, [loading])
    // console.log(RSVPParty)
    // const RSVPParty = [{ ...searchResults }]
    const otherGuests = searchResults.otherGuests
    const [reload, setreload] = useState(false)
    const [RSVPField, setRSVPField] = useState("block")
    const [moreRSVPField, setMoreRSVPField] = useState('none')
    const [progress, setProgress] = useState(true)
    const [active, setActive] = useState(false)
    const [RSVPResp, setRSVPResp] = useState(searchResults.RSVP != "" ? (searchResults.RSVP) : (""))
    const [mealResp, setMealResp] = useState(searchResults.mealOpt != "" ? (searchResults.mealOpt) : ("")
    )
    const [dietResp, setDietResp] = useState(searchResults.allergyDiet != "" ? (searchResults.allergyDiet) : ("")
    )
    const [guestRSVP, setGuestRSVP] = useState()
    const handleAllergy = (event) => {
        const value = event.target.value
        setDietResp({
            value
        })
    }

    useEffect(() => {
        if (reload) {
            // window.location.reload()
        } else {
            console.log("page has loaded")
        }
    }, [reload])


    const handleChange = (event) => {

    }
    // const saveRsvpVars = async () => {
    //     // if (currentRSVP == 0 && RSVPParty[0].otherGuests.length != 0) {
    //     //     console.log("adding new other members")
    //     //     // await addOtherMembers()
    //     // }
    //     setGuestRSVP(
    //         {
    //             guestId: RSVPParty[currentRSVP]._id,
    //             rsvp: RSVPResp,
    //             mealOpt: mealResp,
    //             allergyDiet: dietResp
    //         })
    //     console.log(guestRSVP)
    // }
    const handleRSVP = async () => {
        console.log(guestRSVP)
        try {
            const { data } = await submitRSVP({
                variables: {
                    guestId: searchResults._id,
                    rsvp: RSVPResp,
                    mealOpt: mealResp,
                    allergyDiet: dietResp
                }
            });
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const SubmitPartyRSVP = async () => {
        console.log("click")

        // await saveRsvpVars()

        console.log(guestRSVP)

        await handleRSVP()
        setProgress(false)
        setActive(true)
        setRSVPField("none")
        setMoreRSVPField("block")

    }

    return (
        <>
            {searchResults.firstname ?
                (
                    <div style={{ display: RSVPField }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h1 className="text-center"> RSVP For</h1>
                            <h2 className="text-center">{searchResults.firstname} {searchResults.lastname}</h2>
                            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <label for="rsvp"> RSVP:</label>
                                <select defaultValue={RSVPResp} onChange={(choice) => setRSVPResp(choice.target.value)}>
                                    <option name="rsvp" value="default"> </option>
                                    <option name="rsvp" value="Will Attend">Will Attend</option>
                                    <option name="rsvp" value="Will Not Attend">Will Not Attend</option>
                                </select>
                                <br></br>
                                <label for="mealOpt"> Meal Choice:</label>
                                <select defaultValue={mealResp} onChange={(choice) => setMealResp(choice.target.value)}>
                                    <option name="mealOpt" value="default"> </option>
                                    <option name="mealOpt" value="Chicken">Chicken</option>
                                    <option name="mealOpt" value="Steak">Steak</option>
                                    <option name="mealOpt" value="Seafood">Seafood</option>
                                </select>
                                <br></br>
                                <label for="allergyDiet"> Do you have dietary restrictions or allergies?</label>
                                <input defaultValue={dietResp} name="allergyDiet" value={dietResp} onChange={handleAllergy}></input>
                            </form>
                            <br></br>
                            <Button onClick={SubmitPartyRSVP}>Submit RSVP</Button>
                        </div>
                    </div>
                ) :
                (
                    <p> Sorry please try again, no guest by the name of {firstname} {lastname} was found</p>
                )}

            <div style={{ display: moreRSVPField }}>
                <p>Thank you for RSVPing to our wedding, you may come back to change your response any time before May 14th 2024.</p>
                <p>If there are other people in your party please search for their name as well</p>
                {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {otherGuests.map((others) => {
                        return (
                            <>
                                <Link to={`/RSVP/${others.firstname}/${others.lastname}/`}>
                                    <Button active={active} onClick={setreload(true)}>RSVP for {others.firstname} {others.lastname}</Button>
                                </Link>
                            </>
                        )
                    })}
                </div> */}
            </div>
        </>
    )

}

export default SearchResults