import { useEffect, useState } from "react";


const useProducts = () => {

    // const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json)
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])

    return [products];
};

export default useProducts;