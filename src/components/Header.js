import Nav from './Nav';
import logo3 from '../assets/brand/logo3.png';
import * as React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div>
                <Link to="/"><img className="logo" src={logo3} alt="logo"></img></Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;