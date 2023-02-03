import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_GUEST } from "../../utils/queries";
import { GIVE_RSVP } from "../../utils/mutations";

function SearchResults(searchResults) {
    // useEffect(() => {

    // }, [searchResults])
    const { loading, data } = useQuery(GET_GUEST, { variables: { firstname: searchResults.firstname, lastname: searchResults.lastname } })
    // const guest = data?.getGuest() || []
    console.log({ ...searchResults })
    if (loading) {
        return (
            <p> Loading...</p>
        )
    }
    // console.log(guest)
    return (
        < p > Search results</p >
    )
}

export default SearchResults