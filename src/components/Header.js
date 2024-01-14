import Nav from './Nav';
import logo from '../assets/brand/logo.png';
import * as React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div>
                <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;