import { Link } from "react-router-dom"

const Card = ({ title, description, price, imageSrc }) => {
    return (
        <div className="specialCard">
            <div className="cardImg">
                <img src={imageSrc} alt="thinly roasted squash with basil and creme garnish"></img>
            </div>
            <div className="cardBody">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>${price}</p>
            </div>
            <div className="cardButton">
                <Link to="/order"><button aria-label="Order">Order</button></Link>
            </div>
        </div>
    );
};

export default Card;