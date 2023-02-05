import React, { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import SearchResults from "../components/SearchResults"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useQuery, useMutation } from "@apollo/client"
import { GET_GUEST } from "../utils/queries"
import { GIVE_RSVP } from "../utils/mutations"
function RSVP() {
    const [showSearchbar, setShowSearchbar] = useState(true)
    const [searchedGuest, setSearchedGuest] = useState({ firstname: "", lastname: "" })
    const [searchResults, setSearchResults] = useState()


    const styles = {
        searchbar: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        hideSearchbar: {
            display: "hidden"
        }
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSearchedGuest({
            ...searchedGuest,
            [name]: value
        })
        console.log(searchedGuest)
    }
    const handleSearch = async (event) => {
        setSearchResults({ ...searchedGuest })
    }
    return (
        <>
            <div style={styles.searchbar}>
                <p className="text-center"> Enter your name as it appears on the invitation</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <input style={{ marginRight: "10%" }}
                        name="firstname"
                        value={searchedGuest.firstname}
                        onChange={handleChange}
                        placeholder="Enter First Name"></input>
                    <input
                        name="lastname"
                        value={searchedGuest.lastname}
                        onChange={handleChange}
                        placeholder="Enter Last Name"></input>
                    <Link to={`/RSVP/${searchedGuest.firstname}/${searchedGuest.lastname}/`}>
                        <FontAwesomeIcon style={{ marginLeft: "5%" }} onClick={handleSearch} icon={faArrowAltCircleRight}></FontAwesomeIcon>
                    </Link>

                </div>

            </div>
        </>
    )
}
// NOTE NEED TO ITERATE THROUGH MEMBERS OF PARTY
export default RSVP