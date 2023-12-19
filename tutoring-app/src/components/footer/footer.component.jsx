import './footer.styles.scss';
import { React, Fragment } from "react";
import { Outlet } from 'react-router';

const Footer = () => {
    return (
        <Fragment>
            <Outlet />
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
                    <footer className="footer-row">
                        <div className="footer-column">
                            <header className="footer-section">Info</header>
                            <p><a className='footer-link' href='./contact'>Contact</a></p>
                            <p><a className='footer-link' href='./about'>About</a></p>
                        </div>

                        <div className="footer-column">
                            <header className="footer-section">Programs</header>
                            <p><a className='footer-link' href='./programs'>Little Kids (6-12)</a></p>
                            <p><a className='footer-link' href='./programs'>Big kids (13-18)</a></p>
                        </div>
                    </footer>
                </div>

            </div>
        </Fragment>
    );
};
export default Footer;
