import React, { useState, useEffect, useContext, useReducer } from "react";
import PartyContext from "../utils/PartyContext";
import { RSVP_PARTY } from "../utils/action";
import { reducer } from '../utils/reducers';

import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_GUEST } from "../utils/queries";
import { GIVE_RSVP } from "../utils/mutations";
import Button from 'react-bootstrap/Button';
import RSVP from "./SearchRSVP";



const SearchResults = () => {
    const { guestname: guestParam } = useParams()
    const guestName = guestParam.split("+")
    const { loading, data } = useQuery(GET_GUEST, { variables: { firstname: guestName[0], lastname: guestName[1] } })
    const searchResults = data?.getGuest || [];

    const [submitRSVP] = useMutation(GIVE_RSVP)
    const [currentRSVP, setCurrentRSVP] = useState(0)

    const RSVPGroup = [{ ...searchResults }]
    const [RSVPParty, setRSVPParty] = useReducer(reducer, [{ ...searchResults }])
    const [progress, setProgress] = useState(true)
    // const [RSVPResp, setRSVPResp] = useState(RSVPParty[currentRSVP].RSVP)
    // const [mealResp, setMealResp] = useState(RSVPParty[currentRSVP].mealOpt)
    // const [dietResp, setDietResp] = useState(RSVPParty[currentRSVP].allergyDiet)
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

    const addOtherMembers = () => {
        const otherGuests = searchResults.otherGuests

        otherGuests.forEach(element => {
            RSVPGroup.push(element)
        });

        const payload = {
            ...RSVPGroup
        }

        setRSVPParty({
            type: RSVP_PARTY,
            payload: payload
        })
    }

    const handleChange = (event) => {

    }
    const saveRsvpVars = async () => {
        // if (currentRSVP == 0 && RSVPParty[0].otherGuests.length != 0) {
        //     console.log("adding new other members")
        //     // await addOtherMembers()
        // }
        setGuestRSVP(
            {
                guestId: RSVPParty[currentRSVP]._id,
                rsvp: RSVPResp,
                mealOpt: mealResp,
                allergyDiet: dietResp
            })
        console.log(guestRSVP)
    }
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
    const advanceGuest = () => {

        if (currentRSVP == 0 && searchResults.otherGuests.length == 0) {
            console.log("single person loop")
            const nextRSVP = currentRSVP + 1
            setCurrentRSVP(nextRSVP)
            console.log(RSVPGroup)
        } else {
            setProgress(false)

        }
        if (currentRSVP == 0 || currentRSVP <= searchResults.otherGuests.length + 1) {
            console.log("more than one person loop")
            const nextRSVP = currentRSVP + 1
            console.log(nextRSVP)
            setCurrentRSVP(nextRSVP)
        } else {
            console.log("ooooops")
            setProgress(false)
        }
    }
    const SubmitPartyRSVP = async () => {
        console.log("click")

        await saveRsvpVars()

        console.log(guestRSVP)

        await handleRSVP()
        setProgress(false)
        // await advanceGuest()

    }

    return (
        <>
            {/* {progress ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1 className="text-center"> RSVP For</h1>
                    <h2 className="text-center">{RSVPParty[currentRSVP].firstname} {RSVPParty[currentRSVP].lastname}</h2>
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
                    <p>If you have other members of your party, you will be prompted to answer for them as well</p>

                </div>
            ) : (
                <>
                    <p>All done, go explore the website now {guestName[0]} {guestName[1]}</p>
                    <p>Please contact us if we spelt your name wrong </p>
                </>
            )} */}

            {progress ? (
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
                    {/* <p>If you have other members of your party, you will be prompted to answer for them as well</p> */}

                </div>
            ) : (
                <>
                    <p>
                        Thank you for RSVPing to our site, if there are other guests, please click the RSVP link and fill out the form for them as well
                    </p>
                </>
            )}
            {/* <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 className="text-center"> RSVP For</h1>
                <h2 className="text-center">{RSVPParty[currentRSVP].firstname} {RSVPParty[currentRSVP].lastname}</h2>
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
                    <input defaultValue={dietResp} name="allergyDiet" value={dietResp.allergyDiet} onChange={handleAllergy}></input>
                </form>
                <br></br>
                <Button onClick={SubmitPartyRSVP}>Submit RSVP</Button>
                <p>If you have other members of your party, you will be prompted to answer for them as well</p>

            </div> */}
        </>
    )

}

export default SearchResults