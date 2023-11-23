import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'products.json'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;