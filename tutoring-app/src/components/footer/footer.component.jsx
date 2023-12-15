import React from "react";
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <h1 className="footer-header"
                style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Shared Vision Tutoring
            </h1>

            <div className="footer-information">
                <div className="footer-row">
                    
                        <div className="footer-column">
                            <header className="footer-section">Info</header>
                            <span className='footer-link' href="/contact">
                                Contact
                            </span>
                            <span className='footer-link'href="/about">
                                About
                            </span>
                        </div>
                    
                    
                        <div className="footer-column">
                        <header className="footer-section">Programs</header>
                            <span className='footer-link' href="/programs">
                                Little Kids (6-12)
                            </span>
                            <span className='footer-link' href="/programs">
                                Big kids (13-18)
                            </span>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};
export default Footer;