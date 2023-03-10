import React, { useState } from "react";
import {Link} from "react-router-dom";

function Navbar () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
     <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Name Goes HERE <i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
                            Resume
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        </li>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
            </div>
        </nav>
     </>   
   )

}

export default Navbar