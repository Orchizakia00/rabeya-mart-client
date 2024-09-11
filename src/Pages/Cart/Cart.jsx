import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Cart = () => {

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
    console.log(cart);

    return (
        <div className="min-h-screen">
            <SectionTitle heading={'Your Cart'} subHeading={'View Your Cart'}></SectionTitle>

            {
                cart.map((product) => (
                    <div key={product._id} className="card card-side bg-base-100 shadow-xl mb-10">
                        <figure>
                            <img
                                className="w-[300px] h-[300px]"
                                src={product.img}
                                alt={product.productName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}</h2>
                            <p>Price: {product.price}</p>
                            <div className="card-actions justify-end items-center">
                                <p className="flex justify-end text-lg">{product.quantity}</p>
                                <button><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                cart.length === 0 ? (
                    <div className="flex justify-center items-center text-xl min-h-[calc(100vh-300px)]">
                        Your cart is empty
                    </div>
                ) : (
                    <div className="flex justify-end mt-10">
                        <button className="btn btn-outline text-white hover:text-orange-600 bg-orange-600 hover:bg-white border-white hover:border-orange-600">Place Order</button>
                    </div>
                )
            }


        </div>
    );
};

export default Cart;