import quote from "../assets/brand/quote.png";
import { useState, useEffect } from "react";

const QuoteCard = () => {
    const quotes = [
        {
            quote: "Every dinner is more than a meal, it is a celebration of friendship and flavor",
            name: "Clementine C.",
            id: 0
        },
        {
            quote: "From the moment we walked in, the warmth and charm of Little Lemon captivated us. The food is not only delicious but also beautifully presented, making each visit a delight.",
            name: "Risha M.",
            id: 1
        },
        {
            quote: "The ambiance at Little Lemon is as exquisite as their menu. Each dish is a masterpiece of flavor and presentation. A must-visit for food lovers in Philly!",
            name: "Nader S.",
            id: 2
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [forceUpdate, setForceUpdate] = useState(0);

    const carouselInfiniteScroll = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        );
        setForceUpdate(f => f + 1); // Increment to force re-render
    };
    useEffect(() => {
        const interval = setInterval(carouselInfiniteScroll, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="quoteBox">
            <h3><img src={quote} alt="a quotation mark"></img></h3>
            {quotes.map((q, index) => (
                <div key={q.id} className={`quoteCard ${currentIndex === index ? 'quoteCard-active' : ''}`}>
                    <h4>{q.quote}</h4>
                    <p>— {q.name}</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteCard;