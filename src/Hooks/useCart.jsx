import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useCart = () => {
    const axios = useAxiosPublic();
    const user = useAuth();
    const userEmail = user.user.email;

    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axios.get(`/cart?userEmail=${userEmail}`);
            return res.data;
        }
    });

    return cart;
};

export default useCart;