import { Link } from "react-router-dom";
function ResButton() {
    return (
        <Link to="/reservations">
            <button>
                Reservations
            </button>
        </Link>
    );
}
export default ResButton;