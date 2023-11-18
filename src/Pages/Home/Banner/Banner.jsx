

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-70px)]" style={{ backgroundImage: 'url(https://i.ibb.co/ryKNg1z/there-is-shopping-cart-filled-with-vegetables-eggs-generative-ai-958165-28846.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold text-black">Fresh Picks: Quality Groceries Delivered</h1>
                    <p className="mb-5 text-black text-xl font-semibold">Discover freshness at Fresh Picks Market – your destination for quality groceries, from farm to table!</p>
                    <button className="btn btn-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;