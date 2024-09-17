import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";


const ProductCard = ({ product }) => {
    const axios = useAxiosPublic();
    const user = useAuth();
    const loggedInUser = user?.user;
    const userEmail = loggedInUser?.email;
    const [cart, refetch] = useCart();

    const handleAddToCart = (product) => {
        const cartItem = {
            productId: product._id,
            productName: product.productName,
            price: product.price,
            quantity: 1,
            img: product.img,
            userEmail
        };

        const existingCartItem = cart.find(item => item.productId === cartItem.productId);

        if (existingCartItem) {
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1
            };

            axios.put(`/cart/${existingCartItem._id}`, { quantity: updatedCartItem.quantity })
                .then(res => {
                    console.log(res.data);
                    toast.success("Cart updated successfully!");
                    refetch();
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Failed to update cart.");
                });
        } else {
            axios.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success("Product added to cart!");
                        refetch();
                    } else {
                        console.log("Something went wrong! Please try again.");
                    }
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Failed to add to cart.");
                });
        }
    };


    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt={product.productName} className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">{product.productName} ({product.quantity})</h2>
                <p className="text-lg">৳ {product.price} Tk</p>
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