import interior from '../assets/food/interior.jpg';
function WhoWeAre() {
    return (
        <section className="wwaCont">
            <h2>Our Story</h2>
            <div className='wwaBox'>
                <div className='wwaContent'>
                    <div>
                        <img src={interior} alt="interior of Little Lemon" />
                    </div>
                    <div>
                        <p>
                            Nestled in the heart of Philadelphia's bustling culinary scene, Little Lemon stands as a beacon of gastronomic excellence and communal joy. The brainchild of renowned chef Julianne Carter, Little Lemon was born from a vision of creating not just a restaurant, but a place where every meal is a celebration of togetherness.
                        </p>
                        <br/>
                        <p>
                            Julianne, a Philly native, always believed that food had the power to bring people together. She envisioned a space where the clinking of glasses, the laughter of diners, and the sizzle of expertly prepared cuisine could blend into a symphony of shared experiences. With this dream, Little Lemon opened its doors, and it wasn't long before it became a beloved fixture in Philadelphia's dining landscape.

                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;