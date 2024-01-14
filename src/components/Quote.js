import quote from "../assets/brand/quote.png";

function Quote() {
    return (
        <section className="quoteCont">
        <h2>Testimonials</h2>
        <div className="quoteBox">
            <div className="quoteCard">
                <h3><img src={quote} alt="a quotation mark"></img></h3>
                <h4>Every dinner is more than a meal, it is a celebration of friendship and flavor</h4>
                <p>— Clementine C.</p>
            </div>
        </div>
    </section>
    );
}
export default Quote;