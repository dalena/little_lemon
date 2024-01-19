import ResButton from "./ResButton";
import { Link } from "react-router-dom";
function Title() {
    return (
        <section className="titleCont">
            <div className="titleBox">
                <p>In a vibrant citrus orchard stands a unique, tiny lemon known as "Little Lemon." Its delicate, sun-kissed rind encases an extraordinarily sweet zest. Born from a magical seed and nurtured by joy, Little Lemon symbolizes the delight found in life's small wonders, reminding all that the tiniest things can possess great magic.</p>
            </div>
            <div className="resbutBox">
                <ResButton/>
            </div>
        </section>
    );
}
export default Title;