import sales from '../../../assets/sales/sales.jpg'

const Sales = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-end my-14"
            style={{
                backgroundImage: `url(${sales})`,
                backgroundSize: '110%', // Zoom out effect by increasing the size
                backgroundPosition: 'center', // Keep the image centered
                backgroundRepeat: 'no-repeat', // Prevent tiling
            }}>
            <div className="bg-opacity-20"></div>
            <div className="text-black text-right">
                <div className="mr-10">
                    <h1 className="text-orange-600 mb-10 text-4xl font-bold">Exclusive Offers</h1>
                    <p className="mb-5 text-2xl max-w-lg space-y-4">
                        Enjoy up to <span className='text-orange-600 font-bold'>30%</span> off on fresh fruits and vegetables. Stock up on healthy essentials and save more today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sales;