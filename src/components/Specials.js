import Card from "./Card";

const specials = [
    {
        title: "zapallo de otono",
        description:
            "delicately roasted squash, sacha inchi salsa macha, yuzo kosho crema",
        price: "16",
        getImageSrc: () => require("../assets/food/zdo.jpg"),
    },
    {
        title: "pollo a la parrilla",
        description:
            "mary's half-chicken, ají panca, smoked sweet potato, grilled scallions",
        price: "32",
        getImageSrc: () => require("../assets/food/plp.jpg"),
    },
    {
        title: "helado a lo clasico",
        description:
            "delicately roasted squash, sacha inchi salsa macha, yuzo kosho crema",
        price: "18",
        getImageSrc: () => require("../assets/food/halc.jpg"),
    },
]

function Specials() {
    return (
        <section className="specialCont">
            <h2>Specials</h2>
            <div className="specialBox">
                {specials.map((special) => (
                    <Card
                        key={special.title}
                        title={special.title}
                        description={special.description}
                        price={special.price}
                        imageSrc={special.getImageSrc()}
                    />
                ))}
            </div>
        </section>
    );
}

export default Specials;