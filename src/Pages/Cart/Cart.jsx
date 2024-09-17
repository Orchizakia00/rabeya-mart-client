import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Cart = () => {

    const [cart, refetch] = useCart();
    const axios = useAxiosPublic();

    const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const deliveryCharge = 50;
    const totalPrice = subtotal + deliveryCharge;

    const handleMinus = (product) => {
        const updatedCartItem = {
            ...product,
            quantity: product.quantity - 1
        };

        axios.put(`/cart/${product._id}`, { quantity: updatedCartItem.quantity })
            .then(res => {
                console.log(res.data);
                toast.success("Cart updated successfully!");
                refetch();
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to update cart.");
            });
    }

    const handlePlus = (product) => {
        const updatedCartItem = {
            ...product,
            quantity: product.quantity + 1
        };

        axios.put(`/cart/${product._id}`, { quantity: updatedCartItem.quantity })
            .then(res => {
                console.log(res.data);
                toast.success("Cart updated successfully!");
                refetch();
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to update cart.");
            });
    }

    const handleRemove = (productId) => {

        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to delete?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/cart/${productId}`)
                                .then(res => {
                                    console.log(res.data);
                                    toast.success("Product removed from cart!");
                                    refetch();
                                })
                                .catch(err => {
                                    console.error(err);
                                    toast.error("Failed to remove product from cart.");
                                });
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div className="min-h-screen">
            <SectionTitle heading={'Your Cart'} subHeading={'View Your Cart'}></SectionTitle>

            {
                cart.length === 0 ? (
                    <div className="flex justify-center items-center text-xl min-h-[calc(100vh-300px)]">
                        Your cart is empty
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <div>
                            {
                                cart.map((product) => (
                                    <div key={product._id} className="card card-side bg-base-100 shadow-xl mb-10 w-full">
                                        <figure>
                                            <img
                                                className="w-[400px] h-[300px]"
                                                src={product.img}
                                                alt={product.productName} />
                                        </figure>
                                        <div className="pl-6 pt-16 pr-28">
                                            <h2 className="card-title mb-6">{product.productName} - {product.size}</h2>
                                            <p className="mb-14">Price: {product.price} TK</p>
                                            <div className="flex justify-items-end gap-4">
                                                <button onClick={() => handleMinus(product)} className="p-2 bg-gray-200 rounded-lg"><FaMinus color="#fa6e02" /></button>
                                                <p className="text-xl">{product.quantity}</p>
                                                <button onClick={() => handlePlus(product)} className="p-2 bg-gray-200 rounded-lg"><FaPlus color="#fa6e02" /></button>
                                            </div>
                                            <button onClick={() => handleRemove(product._id)} className="mt-6"><FaTrashAlt color="#fa6e02" /></button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            <div className="bg-white py-8 px-6 shadow rounded-lg h-fit">
                                <p className="text-center text-xl font-semibold mb-6">Order Summary</p>
                                <p className="flex justify-between gap-20">Subtotal ({cart.length} items): <span>{subtotal} BDT</span></p>
                                <p className="flex justify-between gap-20 mb-6">Delivery Charge: <span>{deliveryCharge} BDT</span></p>
                                <hr />
                                <p className="flex justify-between gap-20 mt-2">Total Price: <span>{totalPrice} BDT</span></p>
                                <div className="flex justify-end mt-10">
                                    <button className="btn w-full text-white bg-orange-600 hover:bg-orange-700">Proceed To Confirm</button>
                                </div>
                            </div>
                        }
                    </div>
                )

            }






        </div>
    );
};

export default Cart;