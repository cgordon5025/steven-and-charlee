import React from "react";

const Travel = () => {
    return (
        <>
            <h1> Travel Information</h1>

            <div>
                <div>
                    <h2>Ceremony and Reception</h2>
                    <p>Country Club of Roswell</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.75699095484!2d-84.2861511675467!3d34.02444816464345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5754e237aa117%3A0x515a1d8fc4830f09!2sCountry%20Club%20of%20Roswell!5e0!3m2!1sen!2sus!4v1675632217450!5m2!1sen!2sus" style={{ border: "0", width: "600", height: "450" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p> Hotels</p>
            <p> We have a hotelblock at this hotel, please sya you're witht eh Gordon&Tarr Party</p>
            <p> Transportation between Hotel and Venue</p>
            <p> Directions from hotel to Venue</p>
            <p> venue address</p>
            <p> Fun things to do in the area?</p>
            <p> include google maps?</p>
            {/* note change this address when we have one */}
            {/* <iframe src="https://www.google.com/maps/place/Country+Club+of+Roswell,+2500+Club+Springs+Dr,+Roswell,+GA+30076/@34.0244438,-84.2816665,17z/data=!4m6!3m5!1s0x88f5754e237aa117:0x515a1d8fc4830f09!8m2!3d34.0244438!4d-84.2816665!16s%2Fg%2F1tcxqj0c" style={{ border: "0", width: "600", height: "450" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </>
    )
}

export default Travel