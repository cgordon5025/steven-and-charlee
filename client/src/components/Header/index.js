import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg supreme-container" style={{ display: "flex", justifyContent: "center" }}>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
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
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header