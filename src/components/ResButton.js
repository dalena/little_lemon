import { Link } from "react-router-dom";
function ResButton() {
    return (
        <Link to="/reservations">
            <button aria-label="Go to Reservation Form">
                Reservations
            </button>
        </Link>
    );
}
export default ResButton;