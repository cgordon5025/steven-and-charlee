// import React, { useState } from "react";
// import Button from "react-bootstrap/esm/Button";

// function RSVPList({ searchResults, currentGuestID, setCurrentGuestID, nextGuestID, setNextGuestID }) {
//     const [currentRSVP, setCurrentRSVP] = useState(0)
//     const [rawYesRSVP, setRawYesRSVP] = useState(false)
//     const [rawNoRSVP, setRawNoRSVP] = useState(false)
//     const [RSVPForm, setRSVPForm] = useState(
//         {
//             guestID: "",
//             RSVP: "",
//             mealOpt: "",
//             allergyDiet: ""
//         }
//     )
//     const otherGuests = searchResults.otherGuests
//     console.log(otherGuests)
//     const RSVPResp = ""
//     const RSVPGroup = [{ ...searchResults }]
//     otherGuests.forEach(element => {
//         RSVPGroup.push(element)
//         console.log(element)
//     });


//     const handleYesRSVP = () => {
//         if (rawYesRSVP == true) {
//             RSVPResp = "Will Attend"
//         }
//     }
//     const handleNoRSVP = () => {
//         if (rawNoRSVP == true) {
//             RSVPResp = "Will Not Attend"
//         }
//     }
//     return (
//         <>
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 <h1> RSVP For</h1>
//                 <h2>{RSVPGroup[currentRSVP].firstname} {RSVPGroup[currentRSVP].lastname}</h2>
//                 <h3>RSVP</h3>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10%" }}>
//                         <label for="RSVPYes">Will Attend</label>
//                         <input type="radio" name="RSVPYes" value={rawYesRSVP} onChange={handleYesRSVP} />
//                     </div>
//                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                         <label for="RSVPNo">Will Not Attend</label>
//                         <input type="radio" name="RSVPNo" value={rawNoRSVP} onChange={handleNoRSVP} />
//                     </div>
//                 </div>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10%" }}>
//                         <label for="chicken">Chicken</label>
//                         <input type="radio" name="chicken" value={rawNoRSVP} onChange={handleNoRSVP} />
//                     </div>
//                 </div>
//                 {/* <input type="radio" name="RSVP" value="something">Will Not Attend</input> */}
//             </div>
//         </>
//     )
// }

// export default RSVPList