import zdo from "../assets/food/zdo.jpg"
import quote from "../assets/brand/quote.png"
function Main() {
    return (
        <main>
            <section className="titleCont">
                <div className="titleBox">
                    <p>In a vibrant citrus orchard stands a unique, tiny lemon known as "Little Lemon." Its delicate, sun-kissed rind encases an extraordinarily sweet zest. Born from a magical seed and nurtured by joy, Little Lemon symbolizes the delight found in life's small wonders, reminding all that the tiniest things can possess great magic.</p>
                </div>
                <div className="resBox">
                    <button>Reservations</button>
                </div>
            </section>
            <section className="specialCont">
                <h2>Specials</h2>
                <div className="specialBox">
                    <div className="specialCard">
                        <div className="cardImg">
                            <img src={zdo} alt="thinly roasted squash with basil and creme garnish"></img>
                        </div>
                        <div className="cardBody">
                            <h3>zapallo de otono</h3>
                            <p>delicately roasted squash, sacha inchi salsa macha, yuzo kosho crema</p>
                            <p>$16</p>
                        </div>
                        <div className="cardButton">
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="specialCard">
                        <div className="cardImg">
                            <img src={zdo} alt="thinly roasted squash with basil and creme garnish"></img>
                        </div>
                        <div className="cardBody">
                            <h3>zapallo de otono</h3>
                            <p>delicately roasted squash, sacha inchi salsa macha, yuzo kosho crema</p>
                            <p>$16</p>
                        </div>
                        <div className="cardButton">
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="specialCard">
                        <div className="cardImg">
                            <img src={zdo} alt="thinly roasted squash with basil and creme garnish"></img>
                        </div>
                        <div className="cardBody">
                            <h3>zapallo de otono</h3>
                            <p>delicately roasted squash, sacha inchi salsa macha, yuzo kosho crema</p>
                            <p>$16</p>
                        </div>
                        <div className="cardButton">
                            <button>Order</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Testimonials</h2>
                <div className="quoteBox">
                    <div className="quoteCard">
                        <h3><img src={quote}></img></h3>
                        <h4>Every dinner is more than a meal, it is a celebration of friendship and flavor</h4>
                        <p>— Clementine C.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;