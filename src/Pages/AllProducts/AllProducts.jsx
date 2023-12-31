
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="">
            <SectionTitle heading={'all products'} subHeading={'At Your Doorstep'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;