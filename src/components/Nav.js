import * as React from "react";
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
];
const navItems = navList.map(nav =>
    <li key={nav.id}>
        <Link to={nav.url}>{nav.name}</Link>
    </li>
);

function Nav() {
    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    );
}

export default Nav;