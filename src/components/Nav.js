import React, { useState } from "react";
import { Link } from "react-router-dom"

const navList = [
    {
        id: 0,
        name: "about",
        url: "/about"
    },
    {
        id: 1,
        name: "menu",
        url: "/menu"
    },
    {
        id: 2,
        name: "order",
        url: "/order"
    },
    {
        id: 3,
        name: "reservations",
        url: "/reservations"

    },
    {
        id: 4,
        name: "login",
        url: "/login"
    }
];
function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = navList.map(nav => (
        <li key={nav.id}>
            <Link to={nav.url} onClick={() => setIsMenuOpen(false)}>{nav.name}</Link>
        </li>
    ));

    return (
        <nav>
            {/* Hamburger Icon */}
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Menu Items */}
            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                {navItems}
            </ul>
        </nav>
    );
}

export default Nav;