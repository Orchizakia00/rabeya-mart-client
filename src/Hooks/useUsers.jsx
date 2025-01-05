import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUsers = () => {

    const axios = useAxiosPublic();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/users');
            return res.data;
        }
    });

    return users;
};

export default useUsers;