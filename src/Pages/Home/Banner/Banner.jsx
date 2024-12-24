import { motion } from "framer-motion";
import banner from "../../../assets/banner/bannerImg.png"

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-70px)] w-full" style={{ backgroundImage: `url(${banner})` }}>
            {/* <div className="hero-overlay  bg-opacity-50"></div> */}
            <div className="mr-[640px] text-left">
                <div className="">
                    {/* <motion.h1
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}

                        className="mb-5 text-5xl uppercase font-bold text-orange-600">
                        grocery shop
                    </motion.h1> */}
                    <motion.h1
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}

                        className="mb-5 text-3xl font-bold text-orange-600">
                        Premium Quality, Budget-Friendly
                    </motion.h1>
                    <motion.p
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}
                        className="mb-5 text-lg">
                        Enjoy the freshest produce and essentials from local farms, <br /> delivered straight to your doorstep with speed and care.
                    </motion.p>
                    <motion.button
                        initial={{ y: 1500 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}
                        className="btn btn-secondary text-white bg-orange-600">Shop Now</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;