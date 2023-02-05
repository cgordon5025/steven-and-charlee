import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
const styles = {
    icons: {
        margin: "0px 5px 0px"
    }
}

const Footer = () => {
    return (
        <footer className="w-100 mt-auto p-4">
            <div className="container text-center">
                <h4>
                    Made With {' '}
                    <Link style={{ textDecoration: "none" }} to="/Login">
                        <span
                            className="emoji"
                            role="img"
                            aria-label="heart"
                            aria-hidden="false">❤️</span> {' '}
                    </Link>
                    by Charlee
                </h4>
            </div>
        </footer>
    )
}

export default Footer