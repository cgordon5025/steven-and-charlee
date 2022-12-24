import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">Home</Link>
                <div id="navbarNav" style={{ marginLeft: "auto" }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Messages">Message Board</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Registry">Registry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Travel">Travel Information</Link>
                        </li>
                        
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header