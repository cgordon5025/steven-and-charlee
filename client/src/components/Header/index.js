import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="navbar navbar-expand-sm supreme-container" style={{ display: "flex", justifyContent: "center" }}>
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="nav
                    bar-toggler-icon"></span>
                </button>

                {/* need to reformat or do something to the collapse, don't like the style of it */}
                <div className="justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registry">Registry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Travel">Travel</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Weddingparty">Wedding Party</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Schedule">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/RSVP">RSVP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AllGuests">All Guests</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header