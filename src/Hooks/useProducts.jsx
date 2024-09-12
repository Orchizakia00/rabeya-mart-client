import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProducts = () => {

    const axios = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('/products');
            return res.data;
        }
    });

    return products;
};

export default useProducts;