

import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });


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