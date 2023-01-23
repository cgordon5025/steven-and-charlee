import React from "react";

const Travel = () => {
    return (
        <>
            <h2> Travel Information</h2>
            <p> Hotels</p>
            <p> We have a hotelblock at this hotel, please sya you're witht eh Gordon&Tarr Party</p>
            <p> Transportation between Hotel and Venue</p>
            <p> Directions from hotel to Venue</p>
            <p> venue address</p>
            <p> Fun things to do in the area?</p>
            <p> include google maps?</p>
            {/* note change this address when we have one */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.917973162172!2d-84.40219168430922!3d33.78861633902289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504f6b8aeaa07%3A0xd26e8e7f02637639!2s1220%20Mecaslin%20St%20NW%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1674487470616!5m2!1sen!2sus" style={{ border: "0", width: "600", height: "450" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Travel