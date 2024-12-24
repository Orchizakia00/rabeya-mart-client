import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Faq from "../FAQ/FAQ";
import Popular from "../Popular/Popular";
import Sales from "../Sales/Sales";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Sales />
            <Popular />
            <Faq />
        </div>
    );
};

export default Home;