import * as React from "react";
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/order">Order</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;