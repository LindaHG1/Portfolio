import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import lind from "../images/Logo3.jpg"

// import cv from '../assets/CV.pdf'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <>
            <div className={color ? "header header__bg" : "header"}>
                <div className="nav__container">
                    <span className="nav__logo"><img className="imglinda" src={lind} /></span>
                    <div className={`nav__items ${isOpen && "open"}`}>
                        <Link
                            to="home"
                            
                            smooth={true}
                            offset={-50}
                            duration={1000}
                            className="nav__links"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="nav__links"
                        >
                            About
                        </Link>
                        <Link
                            to="skills"
                            
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="nav__links"
                        >
                            Skills
                        </Link>
                        <Link
                            to="works"
                            
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="nav__links"
                        >
                            Work
                        </Link>
                        <Link
                            to="contact"
                            
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className="nav__links"
                        >
                            Contact
                        </Link>
                        {/* <a href={cv} target="_blank" className="nav__links">Resume</a> */}
                    </div>

                    <div
                        className={`nav__toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}