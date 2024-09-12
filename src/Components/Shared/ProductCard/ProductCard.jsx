import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";


const ProductCard = ({ product }) => {
    const axios = useAxiosPublic();
    const user = useAuth();
    // console.log('point', user);
    const loggedInUser = user?.user;
    const userEmail = loggedInUser?.email;
    const { data: cart = [] } = useCart();

    const handleAddToCart = (product) => {

        const cartItem = {
            productId: product._id,
            productName: product.productName,
            price: product.price,
            quantity: 1,
            img: product.img,
            userEmail
        };

        const existingCartItem = cart.filter(item => item.productId === product._id);
        console.log(existingCartItem);

        if (existingCartItem) {
            // toast.error("Product is already in the cart!"); 
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1  // Increment quantity by 1
            };
            axios.put(`/cart/${existingCartItem._id}`, updatedCartItem)
                .then(res => {
                    console.log(res.data);
                    toast.success("Cart updated successfully!");
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Failed to update cart.");
                });
        }

        else {
            axios.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success("Product added to cart!");
                        // reset();
                    }
                    else {
                        console.log("Something went wrong! Please try again.");
                    }
                })
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