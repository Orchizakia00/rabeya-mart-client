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

            <div className="flex justify-between">
                <div>
                    {
                        cart.map((product) => (
                            <div key={product._id} className="card card-side bg-base-100 shadow-xl mb-10">
                                <figure>
                                    <img
                                        className="w-[400px] h-[300px]"
                                        src={product.img}
                                        alt={product.productName} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.productName}</h2>
                                    <p>Price: {product.price} TK</p>
                                    <div className="card-actions justify-end items-center">
                                        <p className="flex justify-end text-lg">{product.quantity}</p>
                                        <button><FaTrashAlt /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    cart.length === 0 ? (
                        <div className="flex justify-center items-center text-xl min-h-[calc(100vh-300px)]">
                            Your cart is empty
                        </div>
                    ) : (
                        <div className="bg-white py-8 px-6 shadow rounded-lg h-fit">
                            <p className="text-center text-xl font-semibold mb-6">Order Summary</p>
                            <p className="flex justify-between gap-20">Subtotal ({cart.length} items): <span>50 BDT</span></p>
                            <p className="flex justify-between gap-20">Delivery Charge: <span>50 BDT</span></p>
                            <p className="flex justify-between gap-20 mt-6">Total Price: <span>50 BDT</span></p>
                            <div className="flex justify-end mt-10">
                                <button className="btn w-full text-white bg-orange-600 hover:bg-orange-700">Proceed To Confirm</button>
                            </div>
                        </div>
                    )
                }
            </div>




        </div>
    );
};

export default Cart;