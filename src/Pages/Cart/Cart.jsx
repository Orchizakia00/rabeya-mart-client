import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const Cart = () => {
    return (
        <div className="min-h-screen">
            <SectionTitle heading={'Your Cart'} subHeading={'View Your Cart'}></SectionTitle>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-10">
                <button className="btn btn-outline text-white hover:text-orange-600 bg-orange-600 hover:bg-white border-white hover:border-orange-600">Place Order</button>
            </div>

        </div>
    );
};

export default Cart;