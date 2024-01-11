import logoWhite from "../assets/brand/logoWhite.png"
function Footer() {
    return (
        <footer>
            <div className="footerBox">
                <img src={logoWhite} alt="white logo of little lemon"></img>
            </div>
            <div className="footerBox">
                <h5>Address</h5>
                <p>1523 walnut grove lane<br></br>
                philadelphia, pa 19103
                </p>
                <br></br>
                <h5>Phone</h5>
                <p>+1 215 987 6543</p>
            </div>
            <div className="footerBox">
                <h5>Hours</h5>
                <p><b>Mon - Thur</b> <br></br>5pm - 11pm<br></br><br></br>
                <b>Fri - Sun </b> <br></br> 5pm - 1am
                </p>
            </div>
            <div className="footerBox">
                <h5>Connect</h5>
            </div>
        </footer>
    );
}

export default Footer;