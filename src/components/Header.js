import Nav from './Nav';
import logo from '../assets/brand/logo.png';
function Header() {
    return (
        <header>
            <div><img className="logo" src={logo} alt="logo"></img></div>
            <Nav/>
        </header>
    );
}

export default Header;