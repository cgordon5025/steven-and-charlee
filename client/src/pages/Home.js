import React from "react";
import Countdown from "../components/Countdown";
const Home = () => {
    return (
        <div className="container">
            <div id="about">
                {/* this is is year, month, date order  */}
                <Countdown />

                <h2> Our Story</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            {/* <img src="some.png"></img> */}
            {/* Carousel or gallery of images from engagement shoot among others */}

        </div>
    )
}

export default Home