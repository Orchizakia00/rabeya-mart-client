import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const ProductCard = ({ product }) => {
    const axiosPublic = useAxiosPublic();

    const handleAddToCart = (product) => {
        // console.log(product);
        // toast.success("Product added to cart!");
        axiosPublic.post('/cart', product)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Product added to cart!");
                    // reset();
                }
            })
    

    };

    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt={product.productName} className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">{product.productName} ({product.quantity})</h2>
                <p className="text-lg">৳ {product.price}</p>
                <p></p>
                <div className="card-actions">
                    {
                        product.availability == false ?
                            <button className="btn border-orange-600 text-orange-600 btn-outline w-full hover:bg-orange-600 hover:border-none hover:text-white cursor-not-allowed"><FaBan /> Out of Stock</button>
                            :
                            <button onClick={() => handleAddToCart(product)} className="btn border-orange-600 text-orange-600 btn-outline w-full hover:bg-orange-600 hover:border-none hover:text-white"><FaCartPlus /> Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;