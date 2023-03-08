import React, { useState } from "react";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
        },
        {
            text: "About",
        },
        {
            text: "Applications",
        },
        {
            text: "Contact",
        },
    ]

    return (
    <nav>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Applications</a>
            <a href="">Contact</a>
        </div>
    </nav>
    )
}

export default Navbar