

import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useProducts from "../../Hooks/useProducts";

const AllProducts = () => {


    const products = useProducts();


    return (
        <div className="">
            <SectionTitle heading={'all products'} subHeading={'At Your Doorstep'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;