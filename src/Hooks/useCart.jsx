import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCart = () => {
    const axios = useAxiosPublic();
    const user = useAuth();
    
    const userEmail = user?.user?.email;

    const { data: cart = [] , refetch } = useQuery({
        queryKey: ['cart', userEmail],
        queryFn: async () => {
            if (!userEmail) return [];
            const res = await axios.get(`/cart?userEmail=${userEmail}`);
            return res.data;
        },
        enabled: !!userEmail
    });

    return [cart, refetch];
};

export default useCart;
