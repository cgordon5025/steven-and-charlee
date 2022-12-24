import React from "react";
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
                    <span
                        className="emoji"
                        role="img"
                        aria-label="heart"
                        aria-hidden="false">❤️</span> {' '}
                    by Charlee
                </h4>
            </div>
        </footer>
    )
}

export default Footer