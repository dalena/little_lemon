import Nav from './Nav';
import logo from '../assets/brand/logo.png';
function Header() {
    return (
        <header>
            <div><img src={logo} alt="logo"></img></div>
            <Nav/>
        </header>
    );
}

export default Header;