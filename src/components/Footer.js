import logoWhite from "../assets/brand/logoWhite.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const socials = [
    {
        icon: faInstagram,
        url: "https://instagram.com",
    },
    {
        icon: faTwitter,
        url: "https://twitter.com",
    },
    {
        icon: faYoutube,
        url: "https://www.youtube.com",
    },
];
const Footer = () => {
    const listSocials = socials.map(social => {
        return (
            <a href={social.url}>
                <FontAwesomeIcon
                    icon={social.icon}
                    size="xl"
                />
            </a>
        );
    });
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
                <div className="footerSocials">
                    {listSocials}
                </div>
            </div>
        </footer>
    );
};

export default Footer;