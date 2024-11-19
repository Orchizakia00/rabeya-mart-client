import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";
import Sales from "../Sales/Sales";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Sales />
            <Popular />
        </div>
    );
};

export default Home;